import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Activity, AlertCircle } from "lucide-react";
import SymptomForm from "@/components/SymptomForm";
import ChatInterface from "@/components/ChatInterface";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [initialSymptoms, setInitialSymptoms] = useState("");

  const handleStartChat = (symptoms?: string) => {
    if (symptoms) {
      setInitialSymptoms(symptoms);
    }
    setShowChat(true);
  };

  if (showChat) {
    return <ChatInterface initialSymptoms={initialSymptoms} onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                HealthAI Assistant
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-6">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
            <MessageSquare className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            AI-Powered Health Guidance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get evidence-based health information and symptom analysis powered by advanced AI.
            Understand your symptoms better and make informed decisions.
          </p>
          <MedicalDisclaimer />
        </section>

        {/* Symptom Checker */}
        <section className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 shadow-lg border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Describe Your Symptoms</h3>
            <SymptomForm onSubmit={handleStartChat} />
          </Card>
        </section>

        {/* Quick Start */}
        <section className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-muted-foreground mb-4">Or start a conversation directly</p>
          <Button size="lg" onClick={() => handleStartChat()} className="shadow-lg">
            Start Health Consultation
          </Button>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
            <p className="text-sm text-muted-foreground">
              Responses grounded in medical knowledge and research, with probability-based reasoning.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
            <Activity className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Symptom Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Detailed analysis of your symptoms with possible causes and recommended actions.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
            <AlertCircle className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Safety First</h3>
            <p className="text-sm text-muted-foreground">
              Clear guidance on when to seek immediate medical attention and red flags to watch for.
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Important:</strong> This AI assistant is for informational purposes only and does not replace professional medical advice.
          </p>
          <p>Always consult with a qualified healthcare provider for medical concerns.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
