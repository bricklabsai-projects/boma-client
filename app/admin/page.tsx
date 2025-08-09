import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, HeartHandshake, MessageSquare, Sparkles, TrendingUp } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.3%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Active Therapists',
      value: '127',
      change: '+3.2%',
      changeType: 'positive' as const,
      icon: UserCheck,
    },
    {
      title: 'Rafikis',
      value: '89',
      change: '+8.1%',
      changeType: 'positive' as const,
      icon: HeartHandshake,
    },
    {
      title: 'Communities',
      value: '34',
      change: '+15.7%',
      changeType: 'positive' as const,
      icon: MessageSquare,
    },
  ];

  const recentActivity = [
    {
      type: 'New User Registration',
      user: 'Sarah Johnson',
      time: '2 minutes ago',
    },
    {
      type: 'Therapist Session Completed',
      user: 'Dr. Michael Chen with Alex Rodriguez',
      time: '15 minutes ago',
    },
    {
      type: 'New Community Post',
      user: 'Emma Davis in "Anxiety Support"',
      time: '32 minutes ago',
    },
    {
      type: 'Daily Inspiration Posted',
      user: 'Admin in Craddle',
      time: '1 hour ago',
    },
    {
      type: 'New Rafiki Application',
      user: 'James Wilson',
      time: '2 hours ago',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Boma Admin</h1>
        <p className="text-teal-100 text-lg">
          Monitor and manage your mental health platform with comprehensive insights and controls.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Recent Activity</CardTitle>
            <CardDescription>Latest platform activity and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.type}
                    </p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="w-full text-left p-4 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors">
              <Sparkles className="h-5 w-5 text-teal-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">Post Daily Inspiration</div>
              <div className="text-xs text-gray-600">Add new content to Craddle</div>
            </button>
            
            <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <UserCheck className="h-5 w-5 text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">Review Therapist Applications</div>
              <div className="text-xs text-gray-600">3 pending applications</div>
            </button>
            
            <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <HeartHandshake className="h-5 w-5 text-green-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">Approve Rafiki Applications</div>
              <div className="text-xs text-gray-600">2 new applications</div>
            </button>
            
            <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <MessageSquare className="h-5 w-5 text-purple-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">Moderate Communities</div>
              <div className="text-xs text-gray-600">Review flagged content</div>
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Platform Health */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Platform Health</CardTitle>
          <CardDescription>Key metrics and system status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">98.7%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4.8/5</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500 mb-2">1,247</div>
              <div className="text-sm text-gray-600">Active Sessions</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}