'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MoreHorizontal, Sparkles, Plus, Heart, Eye, MessageSquare } from 'lucide-react';

const inspirations = [
  {
    id: 1,
    title: 'Finding Light in Dark Moments',
    content: 'Remember that even in the darkest moments, there is always a glimmer of hope waiting to be discovered. Your resilience is stronger than you think.',
    author: 'Dr. Sarah Mitchell',
    category: 'Hope & Resilience',
    status: 'Published',
    publishDate: '2024-03-15',
    views: 2847,
    likes: 456,
    comments: 23,
    tags: ['hope', 'resilience', 'mental-strength'],
  },
  {
    id: 2,
    title: 'The Power of Small Steps',
    content: 'Healing happens one small step at a time. Celebrate each tiny victory, for they are building blocks to your greater journey.',
    author: 'Rachel Green',
    category: 'Recovery',
    status: 'Published',
    publishDate: '2024-03-14',
    views: 1923,
    likes: 312,
    comments: 18,
    tags: ['recovery', 'progress', 'self-care'],
  },
  {
    id: 3,
    title: 'Embracing Your Journey',
    content: 'Your mental health journey is unique to you. There is no timeline for healing, no right or wrong way to grow. Trust your process.',
    author: 'Marcus Williams',
    category: 'Self-Acceptance',
    status: 'Published',
    publishDate: '2024-03-13',
    views: 3156,
    likes: 687,
    comments: 42,
    tags: ['self-acceptance', 'journey', 'growth'],
  },
  {
    id: 4,
    title: 'Strength in Vulnerability',
    content: 'Being vulnerable is not a sign of weakness; it is the birthplace of courage, creativity, and change.',
    author: 'Dr. Maria Garcia',
    category: 'Courage',
    status: 'Draft',
    publishDate: null,
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['vulnerability', 'courage', 'authenticity'],
  },
  {
    id: 5,
    title: 'Community Heals',
    content: 'You are not alone in this journey. The Boma community stands with you, supporting you every step of the way.',
    author: 'Admin',
    category: 'Community',
    status: 'Scheduled',
    publishDate: '2024-03-16',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['community', 'support', 'connection'],
  },
];

export default function CraddlePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInspirations = inspirations.filter(inspiration =>
    inspiration.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inspiration.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inspiration.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-700';
      case 'Draft':
        return 'bg-gray-100 text-gray-700';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Craddle - Daily Inspirations</h1>
          <p className="text-gray-600">Create and manage daily inspirational content for the community</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Inspiration
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">89,234</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900">12,456</p>
              </div>
              <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">14.2%</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inspirations Management */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Daily Inspirations</CardTitle>
              <CardDescription>Manage inspirational content for the Boma community</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search inspirations..."
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
            {filteredInspirations.map((inspiration) => (
              <div key={inspiration.id} className="flex items-start justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{inspiration.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{inspiration.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        {inspiration.category}
                      </Badge>
                      <span>By {inspiration.author}</span>
                      {inspiration.publishDate && (
                        <>
                          <span>•</span>
                          <span>{inspiration.publishDate}</span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {inspiration.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    {inspiration.status === 'Published' && (
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{inspiration.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{inspiration.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{inspiration.comments}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className={getStatusColor(inspiration.status)}>
                    {inspiration.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common content management tasks</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg transition-colors text-left">
            <Sparkles className="h-6 w-6 text-purple-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">Schedule Daily Post</div>
            <div className="text-xs text-gray-600">Plan tomorrow's inspiration</div>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-lg transition-colors text-left">
            <Heart className="h-6 w-6 text-teal-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">View Analytics</div>
            <div className="text-xs text-gray-600">Check engagement metrics</div>
          </button>
          
          <button className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg transition-colors text-left">
            <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
            <div className="text-sm font-medium text-gray-900">Community Feedback</div>
            <div className="text-xs text-gray-600">Review user responses</div>
          </button>
        </CardContent>
      </Card>
    </div>
  );
}