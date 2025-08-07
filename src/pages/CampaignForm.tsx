import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CampaignData {
  brandName: string;
  productDescription: string;
  targetAudience: string;
  campaignGoal: string;
  brandTone: string;
  platforms: string[];
  budgetLevel: string;
}

const CampaignForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<CampaignData>({
    brandName: "",
    productDescription: "",
    targetAudience: "",
    campaignGoal: "",
    brandTone: "",
    platforms: [],
    budgetLevel: ""
  });

  const handlePlatformChange = (platform: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      platforms: checked 
        ? [...prev.platforms, platform]
        : prev.platforms.filter(p => p !== platform)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store form data for output page
    localStorage.setItem('campaignData', JSON.stringify(formData));
    
    toast({
      title: "Campaign Created!",
      description: "AI is now analyzing influencers and generating messages...",
    });

    navigate('/output');
  };

  return (
    <div className="min-h-screen py-8 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">ICY</span>
          </div>
        </div>

        {/* Form */}
        <Card className="card-glow animate-slide-up">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gradient mb-2">
              Create Your Campaign
            </CardTitle>
            <p className="text-muted-foreground">
              Tell us about your brand and campaign goals to find the perfect influencers
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Brand Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gradient mb-4">Brand Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="brandName" className="text-sm font-medium">Brand Name</Label>
                    <Input
                      id="brandName"
                      placeholder="Enter your brand name"
                      value={formData.brandName}
                      onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                      className="bg-input border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="brandTone" className="text-sm font-medium">Brand Tone</Label>
                    <Select value={formData.brandTone} onValueChange={(value) => setFormData(prev => ({ ...prev, brandTone: value }))}>
                      <SelectTrigger className="bg-input border-border focus:border-primary">
                        <SelectValue placeholder="Select brand tone" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="friendly">Friendly & Casual</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="luxury">Luxury & Premium</SelectItem>
                        <SelectItem value="playful">Playful & Fun</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productDescription" className="text-sm font-medium">Product Description</Label>
                  <Textarea
                    id="productDescription"
                    placeholder="Describe your product or service in detail..."
                    value={formData.productDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, productDescription: e.target.value }))}
                    className="bg-input border-border focus:border-primary transition-colors min-h-[120px]"
                    required
                  />
                </div>
              </div>

              {/* Campaign Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gradient mb-4">Campaign Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="targetAudience" className="text-sm font-medium">Target Audience</Label>
                  <Input
                    id="targetAudience"
                    placeholder="e.g., Tech-savvy millennials, Fashion enthusiasts, Fitness lovers"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
                    className="bg-input border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaignGoal" className="text-sm font-medium">Campaign Goal</Label>
                  <Textarea
                    id="campaignGoal"
                    placeholder="What do you want to achieve with this campaign?"
                    value={formData.campaignGoal}
                    onChange={(e) => setFormData(prev => ({ ...prev, campaignGoal: e.target.value }))}
                    className="bg-input border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">Platform Focus</Label>
                  <div className="flex flex-wrap gap-4">
                    {['Instagram', 'YouTube', 'TikTok', 'Twitter', 'LinkedIn'].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox
                          id={platform}
                          checked={formData.platforms.includes(platform)}
                          onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                          className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor={platform} className="text-sm cursor-pointer">{platform}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">Budget Level</Label>
                  <RadioGroup 
                    value={formData.budgetLevel} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, budgetLevel: value }))}
                    className="flex flex-wrap gap-6"
                  >
                    {[
                      { value: 'micro', label: 'Micro ($100-$1K)', desc: 'Small influencers' },
                      { value: 'mid', label: 'Mid-tier ($1K-$10K)', desc: 'Medium reach' },
                      { value: 'macro', label: 'Macro ($10K+)', desc: 'Large influencers' }
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option.value} 
                          id={option.value}
                          className="border-border text-primary focus:ring-primary"
                        />
                        <Label htmlFor={option.value} className="cursor-pointer">
                          <div className="text-sm font-medium">{option.label}</div>
                          <div className="text-xs text-muted-foreground">{option.desc}</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="btn-hero w-full py-4 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing Influencers...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Generate Campaign
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampaignForm;