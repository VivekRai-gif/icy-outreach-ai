import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Target,
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const FeaturesPage = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Discovery",
      description: "Our advanced AI analyzes millions of creators to find perfect matches for your brand, considering engagement rates, audience demographics, and content quality.",
      features: [
        "Real-time influencer database",
        "Advanced filtering & search",
        "Authenticity verification",
        "Audience quality analysis"
      ],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Personalized Outreach",
      description: "Generate compelling, personalized messages that get responses. Our AI understands context and creates authentic communications that convert.",
      features: [
        "GPT-4 powered messaging",
        "Brand tone customization",
        "Multi-platform templates",
        "A/B testing capabilities"
      ],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track every metric that matters. From response rates to ROI, get deep insights into your influencer marketing performance.",
      features: [
        "Real-time performance tracking",
        "ROI calculation",
        "Campaign comparison",
        "Custom reporting"
      ],
      color: "primary"
    }
  ];

  const additionalFeatures = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Find the perfect influencers with AI-powered search and filtering."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up automated campaigns that run themselves while you focus on strategy."
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Advanced algorithms detect fake followers and engagement to ensure authentic partnerships."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team with shared workspaces and role-based permissions."
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Target specific demographics, interests, and engagement patterns for better results."
    },
    {
      icon: Sparkles,
      title: "Content Optimization",
      description: "AI-powered suggestions to optimize your campaign content for maximum impact."
    }
  ];

  const integrations = [
    { name: "Instagram", logo: "📷" },
    { name: "YouTube", logo: "📺" },
    { name: "TikTok", logo: "🎵" },
    { name: "Twitter", logo: "🐦" },
    { name: "LinkedIn", logo: "💼" },
    { name: "Gmail", logo: "📧" },
    { name: "Slack", logo: "💬" },
    { name: "Zapier", logo: "⚡" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary-muted">
              Powerful Features
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Everything You Need for <span className="text-gradient">Successful</span> Influencer Marketing
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From AI-powered discovery to automated outreach and comprehensive analytics - ICY provides all the tools you need to scale your influencer marketing efforts.
          </p>
          
          <Button 
            onClick={() => navigate('/campaign')}
            className="btn-hero text-lg px-8 py-3"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={feature.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      feature.color === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <Card className="card-glow p-8 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                          feature.color === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                        } animate-pulse-glow`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              More <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tool you need to run successful influencer campaigns at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="card-glow p-6 text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Seamless <span className="text-gradient">Integrations</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with all your favorite platforms and tools to create a unified workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className="card-glow p-6 flex flex-col items-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <span className="text-sm text-muted-foreground font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Experience the <span className="text-gradient">Future</span> of Influencer Marketing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of brands using ICY to automate their outreach, find better matches, and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/campaign')}
              className="btn-hero text-lg px-8 py-3"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/pricing')}
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;