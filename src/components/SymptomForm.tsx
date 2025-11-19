import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

interface SymptomFormProps {
  onSubmit: (symptoms: string) => void;
}

const SymptomForm = ({ onSubmit }: SymptomFormProps) => {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symptoms.trim()) {
      onSubmit(symptoms);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="symptoms" className="text-base font-medium">
          What symptoms are you experiencing?
        </Label>
        <Textarea
          id="symptoms"
          placeholder="Example: I've had a persistent headache for 3 days, especially in the morning..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="min-h-[120px] resize-none"
        />
        <p className="text-sm text-muted-foreground">
          Include details like duration, severity, and any relevant context.
        </p>
      </div>
      
      <Button type="submit" size="lg" className="w-full" disabled={!symptoms.trim()}>
        <Send className="mr-2 h-4 w-4" />
        Analyze Symptoms
      </Button>
    </form>
  );
};

export default SymptomForm;
