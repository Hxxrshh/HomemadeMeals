import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Users, 
  Utensils, 
  Plus, 
  Trash2, 
  CheckCircle, 
  ClipboardList,
  ChevronRight,
  LogOut,
  RefreshCw
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [newMenuDay, setNewMenuDay] = useState('Monday');
  const [newMenuItems, setNewMenuItems] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [ordRes, menuRes] = await Promise.all([
        axios.get('http://localhost:5001/api/orders'),
        axios.get('http://localhost:5001/api/menu')
      ]);
      setOrders(ordRes.data);
      setMenu(menuRes.data);
    } catch (err) {
      console.error("Fetch data error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMenu = async (e) => {
    e.preventDefault();
    const items = newMenuItems.split(',').map(i => i.trim()).filter(i => i !== '');
    try {
      await axios.post('http://localhost:5001/api/menu', { day: newMenuDay, items });
      setNewMenuItems('');
      fetchData();
    } catch (err) {
      alert("Error updating menu");
    }
  };

  const handleCompleteOrder = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/api/orders/${id}`, { status: 'Completed' });
      fetchData();
    } catch (err) {
      alert("Error completing order");
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-tiffin-green">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your tiffin service operations</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium transition-colors"
          >
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'orders' ? 'bg-tiffin-green text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5" />
                <span className="font-bold">Customer Orders</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${activeTab === 'orders' ? 'bg-white/20 text-white' : 'bg-gray-200'}`}>
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${activeTab === 'menu' ? 'bg-tiffin-orange text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-3">
                <Utensils className="h-5 w-5" />
                <span className="font-bold">Weekly Menu</span>
              </div>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </button>

            <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                   <Users className="h-4 w-4 text-tiffin-green" /> Analytics
                </h4>
                <p className="text-3xl font-bold text-tiffin-green">{orders.filter(o => o.status === 'Pending').length}</p>
                <p className="text-xs text-gray-400">Total Pending Orders</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Recent Submissions</h3>
                  <button onClick={fetchData} className="p-2 text-tiffin-green hover:rotate-180 transition-transform duration-500">
                    <RefreshCw className="h-5 w-5" />
                  </button>
                </div>
                
                {orders.length === 0 ? (
                  <div className="bg-white p-20 text-center rounded-3xl italic text-gray-400">No orders found.</div>
                ) : (
                  orders.map((order) => (
                    <div key={order._id} className={`bg-white p-6 rounded-3xl shadow-sm border-l-8 ${order.status === 'Completed' ? 'border-gray-200 opacity-70' : 'border-tiffin-orange shadow-md'}`}>
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">{order.name}</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${order.status === 'Completed' ? 'bg-gray-100 text-gray-500' : 'bg-orange-100 text-tiffin-orange'}`}>
                                {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{order.phone} | {order.email}</p>
                          <p className="text-sm text-gray-600">Plan: <span className="font-bold text-tiffin-green">{order.planSelection}</span></p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Preferred Start Date</p>
                          <p className="font-bold text-gray-700">{new Date(order.preferredDeliveryDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                         <p className="text-sm text-gray-500 flex-grow"><span className="font-bold">Address:</span> {order.address}</p>
                         {order.status === 'Pending' && (
                           <button 
                             onClick={() => handleCompleteOrder(order._id)}
                             className="bg-tiffin-green/10 text-tiffin-green px-4 py-2 rounded-lg font-bold hover:bg-tiffin-green hover:text-white transition-all flex items-center gap-2"
                           >
                             <CheckCircle className="h-4 w-4" /> Mark Completed
                           </button>
                         )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Plus className="h-5 w-5 text-tiffin-orange" /> Update Weekly Menu
                  </h3>
                  <form onSubmit={handleUpdateMenu} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2">Day</label>
                        <select 
                          value={newMenuDay} 
                          onChange={(e) => setNewMenuDay(e.target.value)}
                          className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-tiffin-orange/20"
                        >
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Items (comma separated)</label>
                      <textarea 
                        required
                        value={newMenuItems}
                        onChange={(e) => setNewMenuItems(e.target.value)}
                        placeholder="Spring onion aloo, 4 roti, Gujarati kadhi, Rice"
                        rows="3"
                        className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-tiffin-orange/20"
                      />
                    </div>
                    <button type="submit" className="bg-tiffin-orange text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                      Save for {newMenuDay}
                    </button>
                  </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menu.map((item) => (
                    <div key={item.day} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group">
                      <h4 className="font-bold text-tiffin-green mb-2">{item.day}</h4>
                      <ul className="text-sm text-gray-500 min-h-[100px]">
                        {item.items.map((food, i) => <li key={i}>• {food}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
