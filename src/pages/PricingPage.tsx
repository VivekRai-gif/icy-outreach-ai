import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      price: isAnnual ? 49 : 59,
      originalPrice: isAnnual ? null : null,
      description: "Perfect for small brands and startups",
      features: [
        "Up to 50 influencer matches/month",
        "AI-generated outreach messages",
        "Basic analytics & tracking",
        "Email integration",
        "Community support"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "primary"
    },
    {
      name: "Pro",
      icon: Zap,
      price: isAnnual ? 149 : 179,
      originalPrice: isAnnual ? 179 : null,
      description: "For growing agencies and marketing teams",
      features: [
        "Up to 500 influencer matches/month",
        "Advanced AI personalization",
        "Multi-platform outreach",
        "Advanced analytics & ROI tracking",
        "Team collaboration tools",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "accent"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      originalPrice: null,
      description: "For large enterprises with custom needs",
      features: [
        "Unlimited influencer matches",
        "White-label solution",
        "Custom AI model training",
        "Dedicated account manager",
        "Advanced security & compliance",
        "API access",
        "Custom reporting",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "primary"
    }
  ];

  const features = [
    "AI-powered influencer discovery",
    "Automated outreach campaigns",
    "Real-time performance tracking",
    "Multi-platform integration",
    "Advanced analytics dashboard",
    "Team collaboration tools"
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
              Simple, Transparent Pricing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Choose Your <span className="text-gradient">Plan</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name}
                  className={`relative p-8 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'card-glow border-primary/40 bg-gradient-card' 
                      : 'card-glow'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                      plan.color === 'accent' ? 'bg-gradient-accent' : 'bg-gradient-primary'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      {plan.price === "Custom" ? (
                        <span className="text-4xl font-bold text-gradient">Custom</span>
                      ) : (
                        <>
                          {plan.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through mr-2">
                              ${plan.originalPrice}
                            </span>
                          )}
                          <span className="text-4xl font-bold text-gradient">${plan.price}</span>
                          <span className="text-muted-foreground ml-1">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => plan.name === "Enterprise" ? navigate('/contact') : navigate('/campaign')}
                    className={`w-full ${
                      plan.popular ? 'btn-hero' : 'btn-accent'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border border-border hover:border-primary/20 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the next billing cycle."
              },
              {
                q: "Is there a free trial?",
                a: "Absolutely! All paid plans come with a 14-day free trial. No credit card required to start."
              },
              {
                q: "What happens if I exceed my monthly limits?",
                a: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits as needed."
              },
              {
                q: "Do you offer custom enterprise solutions?",
                a: "Yes! Our Enterprise plan includes custom features, dedicated support, and can be tailored to your specific needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-glow p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-gradient">Get Started</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of brands using ICY to transform their influencer marketing.
          </p>
          <Button 
            onClick={() => navigate('/campaign')}
            className="btn-hero text-lg px-8 py-3"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;