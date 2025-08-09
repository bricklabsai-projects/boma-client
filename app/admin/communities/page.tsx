'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MoreHorizontal, MessageSquare, Users, Plus, TrendingUp } from 'lucide-react';

const communities = [
  {
    id: 1,
    name: 'Anxiety Support',
    description: 'A safe space for sharing experiences and coping strategies for anxiety',
    members: 1247,
    posts: 3421,
    moderators: ['Dr. Sarah Mitchell', 'David Johnson'],
    status: 'Active',
    createdDate: '2023-08-15',
    lastActivity: '5 minutes ago',
    category: 'Mental Health',
  },
  {
    id: 2,
    name: 'Depression Warriors',
    description: 'Supporting each other through depression recovery journeys',
    members: 892,
    posts: 2156,
    moderators: ['Rachel Green', 'Dr. James Wilson'],
    status: 'Active',
    createdDate: '2023-09-22',
    lastActivity: '12 minutes ago',
    category: 'Mental Health',
  },
  {
    id: 3,
    name: 'PTSD Recovery',
    description: 'Veterans and civilians supporting PTSD healing',
    members: 456,
    posts: 1234,
    moderators: ['Marcus Williams', 'Dr. Maria Garcia'],
    status: 'Active',
    createdDate: '2023-10-10',
    lastActivity: '1 hour ago',
    category: 'Trauma Support',
  },
  {
    id: 4,
    name: 'Addiction Recovery',
    description: 'Clean and sober support community',
    members: 678,
    posts: 1876,
    moderators: ['Rachel Green'],
    status: 'Active',
    createdDate: '2023-11-05',
    lastActivity: '30 minutes ago',
    category: 'Addiction',
  },
  {
    id: 5,
    name: 'Grief Support',
    description: 'Processing loss and finding healing together',
    members: 234,
    posts: 567,
    moderators: ['Anna Martinez'],
    status: 'Under Review',
    createdDate: '2024-01-20',
    lastActivity: '2 days ago',
    category: 'Grief & Loss',
  },
];

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700';
      case 'Suspended':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communities Management</h1>
          <p className="text-gray-600">Manage support communities and their content</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Community
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Communities</p>
                <p className="text-2xl font-bold text-gray-900">34</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">8,467</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">23,456</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <div className="h-3 w-3 bg-teal-500 rounded-full animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Communities Directory */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Community Directory</CardTitle>
              <CardDescription>Manage support communities and monitor activity</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCommunities.map((community) => (
              <div key={community.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {community.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{community.name}</h3>
                    <p className="text-sm text-gray-600 max-w-md mt-1">{community.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {community.category}
                      </Badge>
                      <span>{community.members} members</span>
                      <span>•</span>
                      <span>{community.posts} posts</span>
                      <span>•</span>
                      <span>Created {community.createdDate}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Moderators: {community.moderators.join(', ')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-right">
                  <div>
                    <Badge className={getStatusColor(community.status)}>
                      {community.status}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">
                      Last activity: {community.lastActivity}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}