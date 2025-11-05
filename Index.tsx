import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Chatbot from "@/components/Chatbot";
import ConversationPreview from "@/components/ConversationPreview";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import BehindTheVoice from "@/components/BehindTheVoice";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import ScrollProgress from "@/components/ScrollProgress";
import UrgencyBanner from "@/components/UrgencyBanner";
import ComparisonSection from "@/components/ComparisonSection";
import MultiStepForm from "@/components/MultiStepForm";
import LiveSupport from "@/components/LiveSupport";
import AnimatedStats from "@/components/AnimatedStats";
import AIReadinessQuiz from "@/components/AIReadinessQuiz";
import ROICalculator from "@/components/ROICalculator";
import BookingCalendar from "@/components/BookingCalendar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <LiveSupport />
      <Header />
      <Hero />
      <UrgencyBanner />
      <Chatbot />
      <ConversationPreview />
      <AnimatedStats />
      <section id="industries">
        <Industries />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <BehindTheVoice />
      <section id="features">
        <Features />
      </section>
      <ComparisonSection />
      <SocialProof />
      <ROICalculator />
      <AIReadinessQuiz />
      <MultiStepForm />
      <BookingCalendar />
      <CTASection />
      
      {/* Footer */}
      <footer className="border-t border-border/40 py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        {/* AI Grid Background */}
        <div className="absolute inset-0 ai-grid-bg opacity-5" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h3 className="text-3xl font-bold gradient-text">Stratify AI</h3>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Intelligent AI receptionist solutions for service-based businesses. Never miss a call, never miss an opportunity.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-base text-muted-foreground mb-16">
              <a href="#features" className="hover:text-foreground hover:scale-105 transition-all duration-300">Features</a>
              <a href="#how-it-works" className="hover:text-foreground hover:scale-105 transition-all duration-300">How It Works</a>
              <a href="#industries" className="hover:text-foreground hover:scale-105 transition-all duration-300">Industries</a>
              <a href="#" className="hover:text-foreground hover:scale-105 transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-foreground hover:scale-105 transition-all duration-300">Terms of Service</a>
              <a href="#" className="hover:text-foreground hover:scale-105 transition-all duration-300">Contact</a>
            </div>

            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground/80">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50" />
                <span>Enterprise Security</span>
              </div>
            </div>

            <div className="pt-10 border-t border-border/40 text-center text-sm text-muted-foreground">
              © 2025 Stratify AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
