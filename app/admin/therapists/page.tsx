'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MoreHorizontal, UserCheck, Star, Calendar, Clock } from 'lucide-react';

const therapists = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    email: 'sarah.mitchell@boma.com',
    specialization: 'Anxiety & Depression',
    license: 'Licensed Clinical Social Worker',
    rating: 4.9,
    sessionsCompleted: 245,
    status: 'Active',
    joinDate: '2023-08-15',
    nextAvailable: 'Today 2:00 PM',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    email: 'james.wilson@boma.com',
    specialization: 'Couples Therapy',
    license: 'Licensed Marriage & Family Therapist',
    rating: 4.8,
    sessionsCompleted: 189,
    status: 'Active',
    joinDate: '2023-09-22',
    nextAvailable: 'Tomorrow 10:00 AM',
  },
  {
    id: 3,
    name: 'Dr. Maria Garcia',
    email: 'maria.garcia@boma.com',
    specialization: 'Trauma & PTSD',
    license: 'Licensed Professional Counselor',
    rating: 4.9,
    sessionsCompleted: 312,
    status: 'Active',
    joinDate: '2023-07-10',
    nextAvailable: 'Today 4:30 PM',
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    email: 'michael.brown@boma.com',
    specialization: 'Addiction Recovery',
    license: 'Licensed Clinical Social Worker',
    rating: 4.7,
    sessionsCompleted: 178,
    status: 'Pending Review',
    joinDate: '2024-01-05',
    nextAvailable: 'Under Review',
  },
  {
    id: 5,
    name: 'Dr. Lisa Thompson',
    email: 'lisa.thompson@boma.com',
    specialization: 'Child & Adolescent',
    license: 'Licensed Professional Counselor',
    rating: 4.8,
    sessionsCompleted: 267,
    status: 'On Leave',
    joinDate: '2023-06-18',
    nextAvailable: 'Unavailable',
  },
];

export default function TherapistsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTherapists = therapists.filter(therapist =>
    therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-700';
      case 'On Leave':
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
          <h1 className="text-2xl font-bold text-gray-900">Therapists Management</h1>
          <p className="text-gray-600">Manage licensed therapists and their profiles</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <UserCheck className="h-4 w-4 mr-2" />
          Add New Therapist
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Therapists</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900">8,945</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Therapists Directory */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Therapist Directory</CardTitle>
              <CardDescription>Manage licensed therapists and their specializations</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search therapists..."
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
            {filteredTherapists.map((therapist) => (
              <div key={therapist.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{therapist.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="font-medium text-blue-600">{therapist.specialization}</span>
                      <span>•</span>
                      <span>{therapist.license}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span>{therapist.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{therapist.sessionsCompleted} sessions</span>
                      <span>•</span>
                      <span>Joined {therapist.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge className={getStatusColor(therapist.status)}>
                      {therapist.status}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">
                      Next: {therapist.nextAvailable}
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