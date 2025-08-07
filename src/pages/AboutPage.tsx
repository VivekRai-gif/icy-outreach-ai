import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Users, Zap, Heart, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Former marketing director at top tech companies. Passionate about AI and creator economy.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "AI researcher and full-stack engineer. 10+ years building scalable platforms.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c5c5?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI",
      bio: "PhD in Machine Learning. Expert in NLP and recommendation systems.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We believe in quality over quantity. Every match, every message, every insight is carefully crafted."
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "Real connections matter. We help brands build genuine relationships with creators who align with their values."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We're pushing the boundaries of what's possible with AI in marketing and creator partnerships."
    },
    {
      icon: Users,
      title: "Community",
      description: "Success is shared. We're building a platform that benefits both brands and creators equally."
    }
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
              About ICY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            We're <span className="text-gradient">Revolutionizing</span>
            <br />
            Influencer Marketing
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Born from the frustration of manual outreach and low response rates, ICY combines cutting-edge AI with deep marketing expertise to transform how brands connect with creators.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It started with a simple problem: spending weeks manually researching influencers, crafting personalized messages, and getting less than 5% response rates. We knew there had to be a better way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After months of building and testing, ICY was born. Our AI doesn't just automate outreach – it understands context, analyzes authenticity, and creates genuine connections that convert.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">98%</div>
                  <div className="text-sm text-muted-foreground">Match Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5x</div>
                  <div className="text-sm text-muted-foreground">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Brands</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-glow p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-6 h-6 text-primary" />
                    <span className="font-semibold">Our Mission</span>
                  </div>
                  <p className="text-muted-foreground">
                    To democratize influencer marketing by making it accessible, efficient, and authentic for brands of all sizes while empowering creators with meaningful partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="card-glow p-6 text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind ICY's mission to transform influencer marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="card-glow p-6 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Outreach?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of brands already using ICY to build authentic relationships with creators and drive real results.
          </p>
          <Button 
            onClick={() => navigate('/campaign')}
            className="btn-hero text-lg px-8 py-3"
          >
            Start Your First Campaign
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;