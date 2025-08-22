import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Settings,
  UserPlus,
  BookOpen,
  Clock,
  Star,
  ChevronDown,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  LogOut
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPrograms: 0,
    totalContacts: 0,
    unreadContacts: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { user, isAdmin, logout, apiCall } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    if (!isAdmin()) {
      navigate('/');
      return;
    }

    fetchDashboardStats();
  }, [isAdmin, navigate]);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await apiCall('/api/admin/dashboard');
      
      if (data.success) {
        setStats(data.data.stats || {});
      } else {
        setError('Failed to load dashboard data');
      }
    } catch (error) {
      setError('Error loading dashboard data');
      console.error('Dashboard error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  // Sample data for charts
  const enrollmentData = [
    { month: 'Jan', children: 45, revenue: 15000 },
    { month: 'Feb', children: 52, revenue: 17500 },
    { month: 'Mar', children: 48, revenue: 16200 },
    { month: 'Apr', children: 61, revenue: 20500 },
    { month: 'May', children: 55, revenue: 18500 },
    { month: 'Jun', children: 67, revenue: 22500 },
  ];

  const programDistribution = [
    { name: 'Infant Care', value: 25, color: '#22c55e' },
    { name: 'Toddler', value: 35, color: '#3b82f6' },
    { name: 'Preschool', value: 30, color: '#f59e0b' },
    { name: 'School Age', value: 10, color: '#ef4444' },
  ];

  const recentEnrollments = [
    { id: 1, name: 'Emma Johnson', program: 'Toddler', date: '2025-01-10', status: 'Active' },
    { id: 2, name: 'Liam Smith', program: 'Infant Care', date: '2025-01-08', status: 'Pending' },
    { id: 3, name: 'Sophia Davis', program: 'Preschool', date: '2025-01-05', status: 'Active' },
    { id: 4, name: 'Noah Wilson', program: 'School Age', date: '2025-01-03', status: 'Active' },
  ];

  const dashboardStats = [
    {
      title: 'Total Users',
      value: stats.totalUsers.toString(),
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Programs',
      value: stats.totalPrograms.toString(),
      change: '+8%',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Contacts',
      value: stats.totalContacts.toString(),
      change: '+2%',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Unread Messages',
      value: stats.unreadContacts.toString(),
      change: stats.unreadContacts > 0 ? 'Needs attention' : 'All caught up',
      icon: Bell,
      color: stats.unreadContacts > 0 ? 'text-red-600' : 'text-green-600',
      bgColor: stats.unreadContacts > 0 ? 'bg-red-50' : 'bg-green-50'
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'children', label: 'Children', icon: Users },
    { id: 'programs', label: 'Programs', icon: BookOpen },
    { id: 'staff', label: 'Staff', icon: UserPlus },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isAdmin()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.firstName} {user?.lastName}! Here's what's happening at Le Jardin Eden.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </Button>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="flex items-center space-x-2 text-red-600 border-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <>
            {/* Navigation Tabs */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-green-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Overview Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {dashboardStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={index} className="hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                              <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                            </div>
                            <div className={`p-3 rounded-full ${stat.bgColor}`}>
                              <Icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </motion.div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Enrollment Trends */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Card className="hover-lift">
                      <CardHeader>
                        <CardTitle>Enrollment Trends</CardTitle>
                        <CardDescription>Child enrollment and revenue over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={enrollmentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line 
                              type="monotone" 
                              dataKey="children" 
                              stroke="#22c55e" 
                              strokeWidth={3}
                              dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Program Distribution */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className="hover-lift">
                      <CardHeader>
                        <CardTitle>Program Distribution</CardTitle>
                        <CardDescription>Children by program type</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={programDistribution}
                              cx="50%"
                              cy="50%"
                              outerRadius={100}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {programDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Recent Enrollments */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Recent Enrollments</CardTitle>
                          <CardDescription>Latest child registrations</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentEnrollments.map((enrollment) => (
                          <div key={enrollment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{enrollment.name}</p>
                                <p className="text-sm text-gray-600">{enrollment.program}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="text-sm text-gray-600">{enrollment.date}</p>
                                <Badge 
                                  variant={enrollment.status === 'Active' ? 'default' : 'secondary'}
                                  className={enrollment.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                                >
                                  {enrollment.status}
                                </Badge>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {/* Children Tab Content */}
            {activeTab === 'children' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <div>
                        <CardTitle>Child Management</CardTitle>
                        <CardDescription>Manage all enrolled children</CardDescription>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input placeholder="Search children..." className="pl-10 w-64" />
                        </div>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Filter className="w-4 h-4" />
                          <span>Filter</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Child Management</h3>
                      <p className="text-gray-600 mb-6">This would contain a comprehensive child management interface with search, filtering, and detailed child profiles.</p>
                      <Button className="btn-primary text-white">
                        Add New Child
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Other tabs would have similar placeholder content */}
            {activeTab !== 'overview' && activeTab !== 'children' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {tabs.find(tab => tab.id === activeTab)?.icon && 
                        React.createElement(tabs.find(tab => tab.id === activeTab).icon, { 
                          className: "w-8 h-8 text-gray-400" 
                        })
                      }
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {tabs.find(tab => tab.id === activeTab)?.label} Section
                    </h3>
                    <p className="text-gray-600">
                      This section would contain comprehensive {activeTab} management features and functionality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

