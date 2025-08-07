import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Target, MessageSquare, TrendingUp } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">ICY</span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/campaign')}
              className="border-primary/20 hover:border-primary/40 bg-transparent"
            >
              Get Started
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary-muted mb-8">
                ✨ AI-Powered Influencer Outreach
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient">ICY</span>
              <br />
              <span className="text-foreground">The AI Agent that Turns</span>
              <br />
              <span className="text-accent-gradient">Outreach into Opportunity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop wasting time on manual influencer outreach. Let ICY find perfect matches, 
              analyze their profiles, and craft personalized messages that actually get responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={() => navigate('/campaign')}
                className="btn-hero px-8 py-4 text-lg h-auto animate-pulse-glow"
              >
                Start Outreach Now
                <Target className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-accent px-8 py-4 text-lg h-auto border-accent/20 hover:border-accent/40"
              >
                Watch Demo
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="card-glow p-8 rounded-2xl text-left">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient">Smart Matching</h3>
                <p className="text-muted-foreground">
                  AI analyzes millions of influencer profiles to find perfect brand-audience alignment in seconds.
                </p>
              </div>
              
              <div className="card-glow p-8 rounded-2xl text-left">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient">Personalized Messages</h3>
                <p className="text-muted-foreground">
                  GPT-4 crafts authentic, personalized outreach messages that sound human and get responses.
                </p>
              </div>
              
              <div className="card-glow p-8 rounded-2xl text-left">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient">Track Results</h3>
                <p className="text-muted-foreground">
                  Monitor responses, track collaborations, and optimize your outreach strategy with real-time analytics.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;