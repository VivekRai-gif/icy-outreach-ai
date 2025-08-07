import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  DollarSign, 
  Calendar,
  Filter,
  Download,
  Eye,
  Send,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const stats = [
    {
      title: "Total Campaigns",
      value: "24",
      change: "+12%",
      icon: BarChart3,
      color: "primary"
    },
    {
      title: "Active Outreach",
      value: "156",
      change: "+8%",
      icon: Send,
      color: "accent"
    },
    {
      title: "Response Rate",
      value: "34.2%",
      change: "+15%",
      icon: MessageSquare,
      color: "primary"
    },
    {
      title: "ROI Generated",
      value: "$45.2K",
      change: "+28%",
      icon: DollarSign,
      color: "accent"
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: "Summer Beauty Launch",
      status: "active",
      influencers: 12,
      responses: 8,
      budget: "$2,500",
      roi: "340%",
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Tech Product Review",
      status: "completed",
      influencers: 8,
      responses: 6,
      budget: "$1,800",
      roi: "220%",
      startDate: "2024-01-10"
    },
    {
      id: 3,
      name: "Fitness Challenge",
      status: "draft",
      influencers: 0,
      responses: 0,
      budget: "$3,200",
      roi: "0%",
      startDate: "2024-01-20"
    }
  ];

  const recentOutreach = [
    {
      influencer: "@sarah.wellness",
      platform: "Instagram",
      status: "responded",
      message: "Love your brand! Let's collaborate...",
      timestamp: "2 hours ago"
    },
    {
      influencer: "@tech_reviewer",
      platform: "YouTube",
      status: "pending",
      message: "Sent personalized proposal",
      timestamp: "1 day ago"
    },
    {
      influencer: "@fitness_guru",
      platform: "Instagram",
      status: "declined",
      message: "Not aligned with current goals",
      timestamp: "2 days ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "responded":
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
      case "draft":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "declined":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "draft":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Analytics <span className="text-gradient">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">
                Track your campaigns and optimize your influencer outreach performance
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-6 md:mt-0">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              
              <Button 
                onClick={() => navigate('/campaign')}
                className="btn-hero"
              >
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.title}
                  className="card-glow p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      stat.color === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Campaigns Table */}
            <div className="lg:col-span-2">
              <Card className="card-glow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Active Campaigns</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate('/campaign')}
                  >
                    View All
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-sm font-medium text-muted-foreground py-3">Campaign</th>
                        <th className="text-left text-sm font-medium text-muted-foreground py-3">Status</th>
                        <th className="text-left text-sm font-medium text-muted-foreground py-3">Influencers</th>
                        <th className="text-left text-sm font-medium text-muted-foreground py-3">ROI</th>
                        <th className="text-left text-sm font-medium text-muted-foreground py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign) => (
                        <tr key={campaign.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="py-4">
                            <div>
                              <p className="font-medium text-foreground">{campaign.name}</p>
                              <p className="text-sm text-muted-foreground">{campaign.budget} budget</p>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <div>
                              <p className="text-foreground">{campaign.influencers} total</p>
                              <p className="text-sm text-muted-foreground">{campaign.responses} responses</p>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="font-medium text-green-400">{campaign.roi}</span>
                          </td>
                          <td className="py-4">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <div>
              <Card className="card-glow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Recent Outreach</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {recentOutreach.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-medium text-foreground text-sm">{item.influencer}</p>
                          <span className="text-xs text-muted-foreground">{item.platform}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{item.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="card-glow p-6 mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/campaign')}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/output')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Find Influencers
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Reports
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardPage;