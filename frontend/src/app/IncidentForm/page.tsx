"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload } from "lucide-react";
type IncidentType = "Fire" | "Oil Spill" | "Illegal Dumping" | "Deforestation" | "Pollution" | "Another";
const ReportIncident = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [incidentType, setIncidentType] = useState<IncidentType | "">("");
  const [customType, setCustomType] = useState("");
  const [description, setDescription] = useState("");
  const [suspectedCause, setSuspectedCause] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (incidentType && description && suspectedCause) {
        toast({
          title: "Success!",
          description: "Your incident report has been submitted.",
          className: "bg-emerald-500 text-white",
        });
        // Reset form
        setIncidentType("");
        setCustomType("");
        setDescription("");
        setSuspectedCause("");
        setSelectedFiles(null);
      } else {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files);
      toast({
        title: "Files selected",
        description: `${e.target.files.length} file(s) selected for upload`,
      });
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      
      <div className="w-full max-w-2xl animate-fadeIn">
        <Card className="glass-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-semibold">Report an Incident</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Help protect our environment by reporting ecological incidents
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Type of Incident
                </label>
                <Select
                  value={incidentType}
                  onValueChange={(value) => setIncidentType(value as IncidentType)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fire">Fire</SelectItem>
                    <SelectItem value="Oil Spill">Oil Spill</SelectItem>
                    <SelectItem value="Illegal Dumping">Illegal Dumping</SelectItem>
                    <SelectItem value="Deforestation">Deforestation</SelectItem>
                    <SelectItem value="Pollution">Pollution</SelectItem>
                    <SelectItem value="Another">Another</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {incidentType === "Another" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Specify Incident Type
                  </label>
                  <Input
                    placeholder="Enter incident type"
                    value={customType}
                    onChange={(e) => setCustomType(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description
                </label>
                <Textarea
                  placeholder="Provide details about the incident"
                  className="min-h-[100px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Suspected Cause
                </label>
                <Input
                  placeholder="What do you think caused this incident?"
                  value={suspectedCause}
                  onChange={(e) => setSuspectedCause(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Upload Photos/Videos
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">Images or videos (MAX. 10MB)</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {selectedFiles && (
                  <p className="text-sm text-muted-foreground">
                    {selectedFiles.length} file(s) selected
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full button-gradient"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Report"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default ReportIncident;