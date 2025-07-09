import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, Save, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header'

export default function AdminDashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [newItem, setNewItem] = useState({
    category: '',
    name: '',
    description: '',
    price: '',
    image: '',
    hoverImage: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch all items
  const fetchItems = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    console.log('Fetching items from Supabase...');
    
    const { data, error } = await supabase
      .from('items')
      .select('*');
    
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
      .insert([newItem]);

    if (error) {
      setError('Failed to add item: ' + error.message);
      setSuccess('');
    } else {
      setNewItem({ category: '', name: '', description: '', price: '', image: '', hoverImage: '' });
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
    setEditForm({ ...item });
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
        name: editForm.name,
        description: editForm.description,
        price: editForm.price,
        image: editForm.image,
        hoverImage: editForm.hoverImage
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
    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
     <Header/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">상품 관리</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              상품 추가하기
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

        {/* Add New Item Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">상품 추가하기</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="종류"
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="이름"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="가격 - 단위는 원 (쉼표 없이 숫자만 적어주세요 - 예: 10000)"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                placeholder="메인 사진 URL"
                value={newItem.image}
                onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                placeholder="커서 올렸을때 사진 URL"
                value={newItem.hoverImage}
                onChange={(e) => setNewItem({...newItem, hoverImage: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="설명"
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddItem}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Add Item
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Items Grid */}
        {editingId ? (
          // Edit Form Modal
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">상품 수정하기</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="종류"
                  value={editForm.category || ''}
                  onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="이름"
                  value={editForm.name || ''}
                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="가격 - 단위는 원 (쉼표 없이 숫자만 적어주세요 - 예: 10000)"
                  value={editForm.price || ''}
                  onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  placeholder="메인 사진 URL"
                  value={editForm.image || ''}
                  onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  placeholder="커서 올렸을때 사진 URL"
                  value={editForm.hoverImage || ''}
                  onChange={(e) => setEditForm({...editForm, hoverImage: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="설명"
                  value={editForm.description || ''}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={saveEdit}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Save size={16} />
                  Save Changes
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Items Grid Display
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => {
              const hoverImage = item.hoverImage || item.image?.replace('front', 'main') || item.image;
              
              return (
                <div 
                  key={item.id} 
                  className="bg-white border-white max-w-[20em] mx-auto group cursor-pointer transition-transform duration-300 hover:scale-105"
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
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {items.length === 0 && !loading && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-lg">
            <p className="text-xl mb-4">No items found</p>
            <p>Add your first item using the button above.</p>
          </div>
        )}
      </div>
    </div>
  );
}