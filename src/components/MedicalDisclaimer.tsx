import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const MedicalDisclaimer = () => {
  return (
    <Alert variant="default" className="border-primary/50 bg-primary/5">
      <AlertTriangle className="h-5 w-5 text-primary" />
      <AlertDescription className="text-sm">
        <strong>Medical Disclaimer:</strong> This AI assistant provides general health information only. 
        It is not a substitute for professional medical advice, diagnosis, or treatment. 
        Always consult a qualified healthcare provider for any medical concerns or emergencies.
      </AlertDescription>
    </Alert>
  );
};

export default MedicalDisclaimer;
