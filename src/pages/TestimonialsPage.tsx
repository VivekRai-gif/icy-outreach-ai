import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const TestimonialsPage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c5c5?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "ICY transformed our influencer marketing completely. We went from 3% response rates to 35% in just one month. The AI-generated messages are so personalized that influencers actually want to work with us.",
      metrics: {
        responseRate: "35%",
        roiIncrease: "450%",
        timeSaved: "20hrs/week"
      }
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder & CEO",
      company: "EcoBeauty",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "As a startup, we couldn't afford an agency. ICY gave us enterprise-level influencer marketing capabilities at a fraction of the cost. The ROI tracking alone pays for itself.",
      metrics: {
        responseRate: "42%",
        roiIncrease: "320%",
        timeSaved: "15hrs/week"
      }
    },
    {
      name: "Emily Watson",
      title: "Brand Manager",
      company: "FitLife Co",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "The influencer matching is incredibly accurate. ICY finds creators who genuinely align with our brand values, not just follower counts. Our partnerships feel more authentic now.",
      metrics: {
        responseRate: "28%",
        roiIncrease: "280%",
        timeSaved: "12hrs/week"
      }
    },
    {
      name: "David Kim",
      title: "Marketing Lead",
      company: "GameZone",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "ICY's analytics dashboard gives us insights we never had before. We can see exactly which influencers drive the most value and optimize our campaigns in real-time.",
      metrics: {
        responseRate: "31%",
        roiIncrease: "390%",
        timeSaved: "18hrs/week"
      }
    },
    {
      name: "Lisa Park",
      title: "Growth Marketing Manager",
      company: "StyleHaven",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "We've scaled from working with 5 influencers to 50+ without increasing our team size. ICY handles all the heavy lifting while we focus on creative strategy.",
      metrics: {
        responseRate: "38%",
        roiIncrease: "520%",
        timeSaved: "25hrs/week"
      }
    },
    {
      name: "Alex Johnson",
      title: "Digital Marketing Director",
      company: "TravelMore",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      text: "The fraud detection feature saved us from several fake influencer partnerships. ICY ensures every dollar we spend goes toward authentic, high-quality creators.",
      metrics: {
        responseRate: "29%",
        roiIncrease: "340%",
        timeSaved: "14hrs/week"
      }
    }
  ];

  const caseStudies = [
    {
      company: "TechFlow",
      industry: "SaaS",
      challenge: "Low response rates and time-consuming manual outreach",
      solution: "Implemented ICY's AI-powered discovery and automated messaging",
      results: [
        "35% average response rate (was 3%)",
        "450% increase in campaign ROI",
        "20 hours saved per week",
        "12x more influencer partnerships"
      ],
      logo: "🚀"
    },
    {
      company: "EcoBeauty",
      industry: "Beauty & Wellness",
      challenge: "Limited budget for influencer marketing as a startup",
      solution: "Used ICY to scale influencer outreach without hiring an agency",
      results: [
        "42% response rate within 2 months",
        "320% ROI on influencer campaigns",
        "50+ active partnerships",
        "15 hours saved weekly"
      ],
      logo: "🌿"
    },
    {
      company: "GameZone",
      industry: "Gaming",
      challenge: "Difficulty finding gaming influencers with engaged audiences",
      solution: "Leveraged ICY's advanced filtering and authenticity verification",
      results: [
        "31% response rate",
        "390% campaign ROI",
        "Zero fake influencer incidents",
        "18 hours saved per week"
      ],
      logo: "🎮"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "10M+", label: "Influencers Analyzed" },
    { value: "35%", label: "Average Response Rate" },
    { value: "400%", label: "Average ROI Increase" }
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
              Customer Success Stories
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            See Why Brands <span className="text-gradient">Love</span> ICY
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From startups to enterprise companies, discover how ICY is transforming influencer marketing and driving real results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="card-glow p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient">{testimonial.metrics.responseRate}</div>
                    <div className="text-xs text-muted-foreground">Response Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient">{testimonial.metrics.roiIncrease}</div>
                    <div className="text-xs text-muted-foreground">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient">{testimonial.metrics.timeSaved}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Detailed <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dive into how different companies achieved remarkable results with ICY.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.company}
                className="card-glow p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-4xl">{study.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-foreground mb-4">Results Achieved</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div 
                          key={resultIndex}
                          className="flex items-center space-x-3 p-3 bg-primary/5 border border-primary/20 rounded-lg"
                        >
                          <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Watch Customer <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our customers about their experience with ICY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Chen", company: "TechFlow", duration: "2:34" },
              { name: "Marcus Rodriguez", company: "EcoBeauty", duration: "3:12" }
            ].map((video, index) => (
              <Card 
                key={video.name}
                className="card-glow group cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video bg-gradient-card rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-foreground">{video.name}</h3>
                    <p className="text-sm text-muted-foreground">{video.company}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Join Our <span className="text-gradient">Success Stories</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why hundreds of brands trust ICY for their influencer marketing.
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
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;