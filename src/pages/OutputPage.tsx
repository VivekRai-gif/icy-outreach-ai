import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Mail, MessageCircle, CheckCircle, Clock, X, Sparkles, Users, TrendingUp, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InfluencerData {
  id: string;
  name: string;
  handle: string;
  platform: string;
  followers: string;
  engagement: string;
  niche: string;
  location: string;
  recentPost: string;
  matchScore: number;
  generatedMessage: string;
  status: 'pending' | 'replied' | 'declined';
}

const mockInfluencers: InfluencerData[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    handle: '@sarahtech',
    platform: 'Instagram',
    followers: '125K',
    engagement: '4.2%',
    niche: 'Tech & Lifestyle',
    location: 'San Francisco, CA',
    recentPost: 'Just unboxed the latest smartphone - the camera quality is insane! 📱✨',
    matchScore: 95,
    generatedMessage: `Hi Sarah! Loved your recent post about the new smartphone camera - your tech reviews always feel so genuine and detailed. I'm reaching out from [Brand] because I think our new productivity app would be perfect for your tech-savvy audience. We've built something that helps busy professionals streamline their workflow, and I'd love to explore a potential collaboration. Open to chat?`,
    status: 'pending'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    handle: '@marcusfitness',
    platform: 'YouTube',
    followers: '89K',
    engagement: '6.8%',
    niche: 'Fitness & Wellness',
    location: 'Austin, TX',
    recentPost: 'New workout video is live! 30-min HIIT session that will leave you feeling amazing 💪',
    matchScore: 88,
    generatedMessage: `Hey Marcus! Your 30-min HIIT video was incredible - I could feel the energy through the screen! I'm with [Brand] and we've created a wellness app that helps track workout progress and nutrition. Given your focus on efficient, high-impact workouts, I think it could really resonate with your community. Would love to discuss a partnership!`,
    status: 'replied'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    handle: '@emmaartist',
    platform: 'TikTok',
    followers: '67K',
    engagement: '8.1%',
    niche: 'Art & Creativity',
    location: 'Brooklyn, NY',
    recentPost: 'Speed painting my latest piece - sometimes the best art happens in the flow state 🎨',
    matchScore: 82,
    generatedMessage: `Hi Emma! Your speed painting video was mesmerizing - I watched it three times! The way you capture flow state in your art really resonates. I'm reaching out from [Brand] about our new digital art tools that help creators like you streamline their process while maintaining that creative flow. Interested in learning more?`,
    status: 'declined'
  }
];

const OutputPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [campaignData, setCampaignData] = useState<any>(null);
  const [influencers, setInfluencers] = useState<InfluencerData[]>(mockInfluencers);

  useEffect(() => {
    const stored = localStorage.getItem('campaignData');
    if (stored) {
      setCampaignData(JSON.parse(stored));
    }
  }, []);

  const copyMessage = (message: string) => {
    navigator.clipboard.writeText(message);
    toast({
      title: "Message Copied!",
      description: "The outreach message has been copied to your clipboard.",
    });
  };

  const sendEmail = (influencer: InfluencerData) => {
    const subject = `Partnership Opportunity with ${campaignData?.brandName}`;
    const body = influencer.generatedMessage.replace('[Brand]', campaignData?.brandName || 'our brand');
    
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + '\n\n_Message powered by ICY – The AI Agent that Turns Outreach into Opportunity._')}`;
    window.open(emailUrl);
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the pre-filled message.",
    });
  };

  const updateStatus = (id: string, status: 'pending' | 'replied' | 'declined') => {
    setInfluencers(prev => prev.map(inf => 
      inf.id === id ? { ...inf, status } : inf
    ));
    
    toast({
      title: "Status Updated",
      description: `Influencer status changed to ${status}.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'replied': return <CheckCircle className="w-4 h-4" />;
      case 'declined': return <X className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'replied': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'declined': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  if (!campaignData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gradient mb-4">No Campaign Data Found</h2>
          <Button onClick={() => navigate('/campaign')} className="btn-hero">
            Create New Campaign
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/campaign')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaign
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">ICY</span>
          </div>
        </div>

        {/* Campaign Summary */}
        <Card className="card-glow mb-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">Campaign Results for {campaignData.brandName}</CardTitle>
            <p className="text-muted-foreground">AI-powered influencer matches and personalized outreach messages</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient">{influencers.length}</div>
                <div className="text-sm text-muted-foreground">Influencers Found</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-accent-gradient">
                  {Math.round(influencers.reduce((acc, inf) => acc + inf.matchScore, 0) / influencers.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg Match Score</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient">{influencers.filter(i => i.status === 'replied').length}</div>
                <div className="text-sm text-muted-foreground">Responses</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-accent-gradient">
                  {influencers.reduce((acc, inf) => acc + parseFloat(inf.engagement), 0).toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">Total Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Influencer Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gradient mb-6">Matched Influencers</h2>
          
          {influencers.map((influencer) => (
            <Card key={influencer.id} className="card-glow animate-slide-up">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Influencer Info */}
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gradient mb-1">{influencer.name}</h3>
                        <p className="text-muted-foreground">{influencer.handle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent-gradient mb-1">{influencer.matchScore}%</div>
                        <div className="text-sm text-muted-foreground">Match Score</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Platform</div>
                        <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                          {influencer.platform}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Followers</div>
                        <div className="font-semibold">{influencer.followers}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Engagement</div>
                        <div className="font-semibold">{influencer.engagement}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Niche</div>
                        <div className="font-semibold">{influencer.niche}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-2">Recent Post</div>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border">
                        <p className="text-sm italic">"{influencer.recentPost}"</p>
                      </div>
                    </div>

                    {/* Status & Actions */}
                    <div className="flex items-center gap-3">
                      <Badge className={`${getStatusColor(influencer.status)} border`}>
                        {getStatusIcon(influencer.status)}
                        <span className="ml-1 capitalize">{influencer.status}</span>
                      </Badge>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus(influencer.id, 'replied')}
                          className="text-green-400 border-green-500/20 hover:bg-green-500/10"
                        >
                          <CheckCircle className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus(influencer.id, 'declined')}
                          className="text-red-400 border-red-500/20 hover:bg-red-500/10"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Generated Message */}
                  <div>
                    <h4 className="text-lg font-semibold text-gradient mb-4">AI-Generated Message</h4>
                    <div className="bg-muted/50 p-6 rounded-lg border border-border mb-4">
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {influencer.generatedMessage.replace('[Brand]', campaignData.brandName)}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground italic">
                          _Message powered by ICY – The AI Agent that Turns Outreach into Opportunity._
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => copyMessage(influencer.generatedMessage.replace('[Brand]', campaignData.brandName))}
                        className="btn-accent flex-1"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Message
                      </Button>
                      <Button
                        onClick={() => sendEmail(influencer)}
                        className="btn-hero flex-1"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-12">
          <Button
            onClick={() => navigate('/campaign')}
            className="btn-hero px-8 py-3"
          >
            Create New Campaign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;