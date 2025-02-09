"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload } from "lucide-react";
import MapDisplay from "./map";
type TypeIncident =
  | "Incendie"
  | "Déversement de pétrole"
  | "Décharge illégale"
  | "Déforestation"
  | "Pollution"
  | "Autre";

const SignalerIncident = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [typeIncident, setTypeIncident] = useState<TypeIncident | "">("");
  const [typePersonnalisé, setTypePersonnalisé] = useState("");
  const [description, setDescription] = useState("");
  const [causeSuspectée, setCauseSuspectée] = useState("");
  const [fichiersSélectionnés, setFichiersSélectionnés] =
    useState<FileList | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'appel API
    setTimeout(() => {
      setIsLoading(false);
      if (typeIncident && description && causeSuspectée) {
        toast({
          title: "Succès !",
          description: "Votre rapport d'incident a été soumis.",
          className: "bg-emerald-500 text-white",
        });
        // Réinitialiser le formulaire
        setTypeIncident("");
        setTypePersonnalisé("");
        setDescription("");
        setCauseSuspectée("");
        setFichiersSélectionnés(null);
      } else {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFichiersSélectionnés(e.target.files);
      toast({
        title: "Fichiers sélectionnés",
        description: `${e.target.files.length} fichier(s) sélectionné(s) pour le téléchargement`,
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className=" inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGnpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      <div className="w-full max-w-2xl animate-fadeIn">
        <Card className="glass-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-semibold">
              Signaler un Incident
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Aidez à protéger notre environnement en signalant les incidents
              écologiques
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Type d'Incident
                </label>
                <Select
                  value={typeIncident}
                  onValueChange={(value) =>
                    setTypeIncident(value as TypeIncident)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionner le type d'incident" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Incendie">Incendie</SelectItem>
                    <SelectItem value="Déversement de pétrole">
                      Déversement de pétrole
                    </SelectItem>
                    <SelectItem value="Décharge illégale">
                      Décharge illégale
                    </SelectItem>
                    <SelectItem value="Déforestation">Déforestation</SelectItem>
                    <SelectItem value="Pollution">Pollution</SelectItem>
                    <SelectItem value="Autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {typeIncident === "Autre" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Spécifier le type d'incident
                  </label>
                  <Input
                    placeholder="Entrer le type d'incident"
                    value={typePersonnalisé}
                    onChange={(e) => setTypePersonnalisé(e.target.value)}
                  />
                </div>
              )}
              <MapDisplay></MapDisplay>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description
                </label>
                <Textarea
                  placeholder="Fournir des détails sur l'incident"
                  className="min-h-[100px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Cause suspectée
                </label>
                <Input
                  placeholder="Qu'est-ce qui a causé cet incident selon vous ?"
                  value={causeSuspectée}
                  onChange={(e) => setCauseSuspectée(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Télécharger des photos/vidéos
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">
                          Cliquez pour télécharger
                        </span>{" "}
                        ou faites glisser et déposez
                      </p>
                      <p className="text-xs text-gray-500">
                        Images ou vidéos (MAX. 10 Mo)
                      </p>
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
                {fichiersSélectionnés && (
                  <p className="text-sm text-muted-foreground">
                    {fichiersSélectionnés.length} fichier(s) sélectionné(s)
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
                    Soumission en cours...
                  </>
                ) : (
                  "Soumettre le rapport"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignalerIncident;
