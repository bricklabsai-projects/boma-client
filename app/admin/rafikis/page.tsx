'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MoreHorizontal, HeartHandshake, Users, MessageCircle, Award } from 'lucide-react';

const rafikis = [
  {
    id: 1,
    name: 'David Johnson',
    email: 'david.johnson@email.com',
    specialties: ['Anxiety', 'Depression'],
    experience: 'Personal experience with anxiety',
    status: 'Active',
    joinDate: '2023-11-15',
    supportedUsers: 12,
    rating: 4.8,
    totalInteractions: 156,
  },
  {
    id: 2,
    name: 'Rachel Green',
    email: 'rachel.green@email.com',
    specialties: ['Addiction Recovery'],
    experience: '3 years sober, addiction recovery',
    status: 'Active',
    joinDate: '2023-10-08',
    supportedUsers: 8,
    rating: 4.9,
    totalInteractions: 203,
  },
  {
    id: 3,
    name: 'Marcus Williams',
    email: 'marcus.williams@email.com',
    specialties: ['PTSD', 'Trauma'],
    experience: 'Military veteran, PTSD recovery',
    status: 'Active',
    joinDate: '2024-01-12',
    supportedUsers: 15,
    rating: 4.7,
    totalInteractions: 89,
  },
  {
    id: 4,
    name: 'Anna Martinez',
    email: 'anna.martinez@email.com',
    specialties: ['Grief', 'Loss'],
    experience: 'Loss of spouse, grief counseling',
    status: 'Training',
    joinDate: '2024-02-20',
    supportedUsers: 0,
    rating: null,
    totalInteractions: 12,
  },
  {
    id: 5,
    name: 'Chris Thompson',
    email: 'chris.thompson@email.com',
    specialties: ['Bipolar Disorder'],
    experience: 'Living with bipolar for 10+ years',
    status: 'Inactive',
    joinDate: '2023-09-03',
    supportedUsers: 5,
    rating: 4.6,
    totalInteractions: 78,
  },
];

export default function RafikisPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRafikis = rafikis.filter(rafiki =>
    rafiki.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rafiki.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Training':
        return 'bg-blue-100 text-blue-700';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rafikis Management</h1>
          <p className="text-gray-600">Manage peer supporters and their community contributions</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <HeartHandshake className="h-4 w-4 mr-2" />
          Add New Rafiki
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Rafikis</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <HeartHandshake className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Users Supported</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-900">5,678</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.7</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rafikis Directory */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Rafiki Directory</CardTitle>
              <CardDescription>Manage peer supporters and their specializations</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search rafikis..."
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
            {filteredRafikis.map((rafiki) => (
              <div key={rafiki.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {rafiki.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{rafiki.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {rafiki.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="bg-teal-100 text-teal-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 max-w-md">{rafiki.experience}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-right">
                  <div>
                    <Badge className={getStatusColor(rafiki.status)}>
                      {rafiki.status}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      <div>Supporting: {rafiki.supportedUsers} users</div>
                      <div>Interactions: {rafiki.totalInteractions}</div>
                      {rafiki.rating && (
                        <div className="flex items-center space-x-1">
                          <Award className="h-3 w-3 text-yellow-500" />
                          <span>Rating: {rafiki.rating}</span>
                        </div>
                      )}
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