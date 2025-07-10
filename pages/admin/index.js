import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, Save, X, Upload, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header'
import HeroSectionsAdmin from '@/components/HeroSectionsAdmin'

export default function AdminDashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [newItem, setNewItem] = useState({
    category: '',
    subcategory: '',
    name: '',
    description: '',
    price: '',
    image: '',
    hoverImage: '',
    descriptionImage: '',
    additionalImages: []
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  
  // Logo management state
  const [logoImage, setLogoImage] = useState('');
  const [logoLoading, setLogoLoading] = useState(false);

  // Image upload function
  const uploadImage = async (file, folder = 'products') => {
    if (!file) return null;

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('product-images') // Make sure this bucket exists in your Supabase Storage
      .upload(filePath, file);

    if (error) {
      console.error('Upload error:', error);
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  // Handle main image upload
  const handleMainImageUpload = async (file, isEdit = false) => {
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'main');
      
      if (isEdit) {
        setEditForm(prev => ({ ...prev, image: imageUrl }));
      } else {
        setNewItem(prev => ({ ...prev, image: imageUrl }));
      }
      
      setSuccess('Main image uploaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to upload main image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle hover image upload
  const handleHoverImageUpload = async (file, isEdit = false) => {
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'hover');
      
      if (isEdit) {
        setEditForm(prev => ({ ...prev, hoverImage: imageUrl }));
      } else {
        setNewItem(prev => ({ ...prev, hoverImage: imageUrl }));
      }
      
      setSuccess('Hover image uploaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to upload hover image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle description image upload
  const handleDescriptionImageUpload = async (file, isEdit = false) => {
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'description');
      
      if (isEdit) {
        setEditForm(prev => ({ ...prev, descriptionImage: imageUrl }));
      } else {
        setNewItem(prev => ({ ...prev, descriptionImage: imageUrl }));
      }
      
      setSuccess('Description image uploaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to upload description image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Handle additional images upload - FULLY ENABLED
  const handleAdditionalImagesUpload = async (files, isEdit = false) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = Array.from(files).map(file => uploadImage(file, 'additional'));
      const imageUrls = await Promise.all(uploadPromises);
      
      if (isEdit) {
        setEditForm(prev => ({ 
          ...prev, 
          additionalImages: [...(prev.additionalImages || []), ...imageUrls]
        }));
      } else {
        setNewItem(prev => ({ 
          ...prev, 
          additionalImages: [...(prev.additionalImages || []), ...imageUrls]
        }));
      }
      
      setSuccess(`${imageUrls.length} additional image(s) uploaded successfully!`);
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Additional images upload error:', error);
      setError('Failed to upload additional images: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Logo management functions
  const fetchLogo = async () => {
    setLogoLoading(true);
    try {
      const { data, error } = await supabase
        .from('hero_sections')
        .select('image_url')
        .eq('page_name', 'logo')
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setLogoImage(data.image_url);
      } else {
        setLogoImage('/images/logo.png'); // Default fallback
      }
    } catch (error) {
      console.error('Error fetching logo:', error);
      setLogoImage('/images/logo.png'); // Default fallback
    } finally {
      setLogoLoading(false);
    }
  };

  const handleLogoUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'logo');
      
      // Check if logo entry exists
      const { data: existingLogo } = await supabase
        .from('hero_sections')
        .select('id')
        .eq('page_name', 'logo')
        .single();

      if (existingLogo) {
        // Update existing logo
        await supabase
          .from('hero_sections')
          .update({ image_url: imageUrl })
          .eq('page_name', 'logo');
      } else {
        // Create new logo entry
        await supabase
          .from('hero_sections')
          .insert([{ page_name: 'logo', image_url: imageUrl }]);
      }

      setLogoImage(imageUrl);
      setSuccess('Logo updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to upload logo: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Remove additional image - FULLY ENABLED
  const removeAdditionalImage = (index, isEdit = false) => {
    if (isEdit) {
      setEditForm(prev => ({
        ...prev,
        additionalImages: prev.additionalImages?.filter((_, i) => i !== index) || []
      }));
    } else {
      setNewItem(prev => ({
        ...prev,
        additionalImages: prev.additionalImages?.filter((_, i) => i !== index) || []
      }));
    }
  };

  // Fetch all items
  const fetchItems = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    console.log('Fetching items from Supabase...');
    
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('created_at', { ascending: false });
    
    console.log('Supabase response:', { data, error });
    
    if (error) {
      console.error('Supabase error:', error);
      setError('Failed to fetch items: ' + error.message);
    } else {
      console.log('Items fetched successfully:', data);
      setItems(data || []);
    }
    setLoading(false);
  };

  // Add new item
  const handleAddItem = async () => {
    if (!newItem.name || !newItem.category || !newItem.price) {
      setError('Please fill in all required fields');
      return;
    }

    const { data, error } = await supabase
      .from('items')
      .insert([{
        ...newItem,
        additionalImages: JSON.stringify(newItem.additionalImages || [])
      }]);

    if (error) {
      setError('Failed to add item: ' + error.message);
      setSuccess('');
    } else {
      setNewItem({ 
        category: '', 
        subcategory: '', 
        name: '', 
        description: '', 
        price: '', 
        image: '', 
        hoverImage: '',
        descriptionImage: '',
        additionalImages: []
      });
      setShowAddForm(false);
      setSuccess('Item added successfully!');
      setError('');
      fetchItems(); // Refresh the list
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  // Start editing an item
  const startEdit = (item) => {
    setEditingId(item.id);
    
    // Properly parse additionalImages
    let additionalImages = [];
    if (item.additionalImages) {
      try {
        additionalImages = typeof item.additionalImages === 'string' 
          ? JSON.parse(item.additionalImages) 
          : Array.isArray(item.additionalImages) 
            ? item.additionalImages 
            : [];
      } catch (error) {
        console.error('Error parsing additionalImages:', error);
        additionalImages = [];
      }
    }
    
    setEditForm({ 
      ...item,
      additionalImages: additionalImages
    });
    setError('');
    setSuccess('');
  };

  // Save edited item
  const saveEdit = async () => {
    if (!editForm.name || !editForm.category || !editForm.price) {
      setError('Please fill in all required fields');
      return;
    }

    const { data, error } = await supabase
      .from('items')
      .update({
        category: editForm.category,
        subcategory: editForm.subcategory,
        name: editForm.name,
        description: editForm.description,
        price: editForm.price,
        image: editForm.image,
        hoverImage: editForm.hoverImage,
        descriptionImage: editForm.descriptionImage,
        additionalImages: JSON.stringify(editForm.additionalImages || [])
      })
      .eq('id', editingId);

    if (error) {
      setError('Failed to update item: ' + error.message);
      setSuccess('');
    } else {
      setEditingId(null);
      setEditForm({});
      setSuccess('Item updated successfully!');
      setError('');
      fetchItems(); // Refresh the list
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  // Delete item
  const deleteItem = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);

    if (error) {
      setError('Failed to delete item: ' + error.message);
      setSuccess('');
    } else {
      setSuccess('Item deleted successfully!');
      setError('');
      fetchItems(); // Refresh the list
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  useEffect(() => {
    if (activeTab === 'products') {
      fetchItems();
    } else if (activeTab === 'logo') {
      fetchLogo();
    }
  }, [activeTab]);

  const ImageUploadSection = ({ title, currentImage, onUpload, isEdit = false, accept = "image/*" }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept={accept}
          onChange={(e) => onUpload(e.target.files[0], isEdit)}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {uploading && <span className="text-sm text-blue-600">Uploading...</span>}
      </div>
      {currentImage && (
        <div className="mt-2">
          <img src={currentImage} alt="Preview" className="w-20 h-20 object-cover rounded border" />
        </div>
      )}
    </div>
  );

  // ADDITIONAL IMAGES SECTION - FULLY ENABLED
  const AdditionalImagesSection = ({ images, onUpload, onRemove, isEdit = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Additional Images (Profile Page) 
        <span className="text-xs text-gray-500 ml-2">({(images || []).length} uploaded)</span>
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          console.log('Additional images selected:', e.target.files.length);
          onUpload(e.target.files, isEdit);
        }}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
      />
      {images && images.length > 0 && (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img src={img} alt={`Additional ${index + 1}`} className="w-20 h-20 object-cover rounded border" />
              <button
                onClick={() => {
                  console.log('Removing image at index:', index);
                  onRemove(index, isEdit);
                }}
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                type="button"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      {(!images || images.length === 0) && (
        <p className="text-xs text-gray-400 italic">No additional images uploaded yet</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
     <Header/>
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">관리자 대시보드</h1>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex space-x-1 border-b">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'products'
                  ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              상품 관리
            </button>
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'hero'
                  ? 'bg-purple-100 text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              히어로 섹션 관리
            </button>
            <button
              onClick={() => setActiveTab('logo')}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'logo'
                  ? 'bg-green-100 text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              로고 관리
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button 
              onClick={() => setError('')}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
            {success}
            <button 
              onClick={() => setSuccess('')}
              className="ml-4 text-green-500 hover:text-green-700"
            >
              ×
            </button>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === 'products' && (
          <div>
            {/* Products Tab Header */}
            <div className="mb-6">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                상품 추가하기
              </button>
            </div>

            {/* Add New Item Form */}
            {showAddForm && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">상품 추가하기</h2>
                
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="카테고리 (예: Kennel Club)"
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="서브카테고리 (예: Dog)"
                    value={newItem.subcategory}
                    onChange={(e) => setNewItem({...newItem, subcategory: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="상품명"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="가격 (예: 10000)"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="상품 설명"
                    value={newItem.description}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    rows="3"
                  />
                </div>

                {/* Image Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <ImageUploadSection
                    title="메인 이미지"
                    currentImage={newItem.image}
                    onUpload={handleMainImageUpload}
                  />
                  <ImageUploadSection
                    title="호버 이미지"
                    currentImage={newItem.hoverImage}
                    onUpload={handleHoverImageUpload}
                  />
                  <ImageUploadSection
                    title="상세페이지 이미지"
                    currentImage={newItem.descriptionImage}
                    onUpload={handleDescriptionImageUpload}
                  />
                </div>

                {/* ADDITIONAL IMAGES SECTION - FULLY ENABLED */}
                <div className="mb-6">
                  <AdditionalImagesSection
                    images={newItem.additionalImages}
                    onUpload={handleAdditionalImagesUpload}
                    onRemove={removeAdditionalImage}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddItem}
                    disabled={uploading}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {uploading ? '업로드 중...' : '상품 추가'}
                  </button>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setNewItem({
                        category: '',
                        subcategory: '',
                        name: '',
                        description: '',
                        price: '',
                        image: '',
                        hoverImage: '',
                        descriptionImage: '',
                        additionalImages: []
                      });
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    취소
                  </button>
                </div>
              </div>
            )}

            {/* Items Grid */}
            {editingId ? (
              // Edit Form Modal
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <h2 className="text-xl font-semibold mb-4">상품 수정하기</h2>
                  
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="카테고리"
                      value={editForm.category || ''}
                      onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="서브카테고리 (선택사항)"
                      value={editForm.subcategory || ''}
                      onChange={(e) => setEditForm({...editForm, subcategory: e.target.value})}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="상품명"
                      value={editForm.name || ''}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="가격"
                      value={editForm.price || ''}
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="상품 설명"
                      value={editForm.description || ''}
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                      rows="3"
                    />
                  </div>

                  {/* Image Uploads */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <ImageUploadSection
                      title="메인 이미지"
                      currentImage={editForm.image}
                      onUpload={handleMainImageUpload}
                      isEdit={true}
                    />
                    <ImageUploadSection
                      title="호버 이미지"
                      currentImage={editForm.hoverImage}
                      onUpload={handleHoverImageUpload}
                      isEdit={true}
                    />
                    <ImageUploadSection
                      title="상세페이지 이미지"
                      currentImage={editForm.descriptionImage}
                      onUpload={handleDescriptionImageUpload}
                      isEdit={true}
                    />
                  </div>

                  {/* ADDITIONAL IMAGES SECTION - FULLY ENABLED */}
                  <div className="mb-6">
                    <AdditionalImagesSection
                      images={editForm.additionalImages}
                      onUpload={handleAdditionalImagesUpload}
                      onRemove={removeAdditionalImage}
                      isEdit={true}
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={saveEdit}
                      disabled={uploading}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      <Save size={16} />
                      {uploading ? '업로드 중...' : '변경사항 저장'}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                    >
                      <X size={16} />
                      취소
                    </button>
                  </div>
                </div>
              </div>
            ) : loading ? (
              // Loading state for products
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-xl text-gray-500">Loading products...</div>
              </div>
            ) : (
              // Items Grid Display
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => {
                  const hoverImage = item.hoverImage || item.image?.replace('front', 'main') || item.image;
                  
                  // Properly parse additionalImages
                  let additionalImages = [];
                  if (item.additionalImages) {
                    try {
                      additionalImages = typeof item.additionalImages === 'string' 
                        ? JSON.parse(item.additionalImages) 
                        : Array.isArray(item.additionalImages) 
                          ? item.additionalImages 
                          : [];
                    } catch (error) {
                      console.error('Error parsing additionalImages for item', item.id, ':', error);
                      additionalImages = [];
                    }
                  }
                  
                  return (
                    <div 
                      key={item.id} 
                      className="bg-white border-white w-[20em] mx-auto group cursor-pointer transition-transform duration-300 hover:scale-105 relative"
                    >
                      {/* Admin Controls */}
                      <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => startEdit(item)}
                          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors shadow-lg"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Additional Images Indicator - FULLY ENABLED */}
                      {additionalImages.length > 0 && (
                        <div className="absolute top-2 left-2 z-10 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                          +{additionalImages.length} images
                        </div>
                      )}

                      {/* Description Image Indicator */}
                      {item.descriptionImage && (
                        <div className="absolute bottom-2 left-2 z-10 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                          상세이미지
                        </div>
                      )}

                      {/* Image Section */}
                      <div className="relative overflow-hidden aspect-square">
                        {item.image ? (
                          <>
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />
                            {hoverImage && hoverImage !== item.image && (
                              <img 
                                src={hoverImage} 
                                alt={`${item.name} - hover`}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                              />
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">No Image</span>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          {item.category}
                          {item.subcategory && (
                            <span className="ml-1 text-blue-600"> • {item.subcategory}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-lg font-medium text-gray-900">
                          ₩{item.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {items.length === 0 && !loading && (
              <div className="text-center py-12 text-gray-500 bg-white rounded-lg">
                <p className="text-xl mb-4">상품이 없습니다</p>
                <p>위의 버튼을 사용해서 첫 번째 상품을 추가해보세요.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'hero' && (
          <HeroSectionsAdmin />
        )}

        {activeTab === 'logo' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">로고 관리</h2>
            </div>

            {/* Current Logo Display */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">현재 로고</h3>
              <div className="flex items-center space-x-6">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {logoLoading ? (
                    <div className="text-gray-500">Loading...</div>
                  ) : logoImage ? (
                    <img 
                      src={logoImage} 
                      alt="Current Logo" 
                      className="max-w-[200px] max-h-[100px] mx-auto object-contain"
                    />
                  ) : (
                    <div className="text-gray-400">
                      <ImageIcon size={48} className="mx-auto mb-2" />
                      <p>No logo uploaded</p>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-2">로고 정보</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    웹사이트 헤더에 표시되는 로고 이미지입니다. 
                    최적 크기: 200px × 100px (PNG, JPG 형식)
                  </p>
                  {logoImage && (
                    <p className="text-xs text-gray-500 break-all">
                      {logoImage}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Logo Upload Section */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">새 로고 업로드</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    로고 이미지 선택
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleLogoUpload(e.target.files[0])}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    disabled={uploading}
                  />
                  {uploading && (
                    <p className="text-sm text-green-600 mt-2">업로드 중...</p>
                  )}
                </div>

                <div className="text-xs text-gray-500">
                  <p>• 권장 형식: PNG, JPG</p>
                  <p>• 권장 크기: 200px × 100px</p>
                  <p>• 최대 파일 크기: 5MB</p>
                  <p>• 투명 배경 지원 (PNG)</p>
                </div>
              </div>
            </div>

            {/* Usage Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">📘 사용 안내</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 로고는 모든 페이지의 헤더에 자동으로 적용됩니다</li>
                <li>• 변경 후 브라우저 새로고침이 필요할 수 있습니다</li>
                <li>• 고화질 이미지를 사용하면 모든 화면에서 선명하게 표시됩니다</li>
              </ul>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}