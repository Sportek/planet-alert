"use client";
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
import axiosInstance from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
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
  const [longlat, setLongLat] = useState({ latitude: 0, longitude: 0 });

  const resetState = () => {
    setTypeIncident("");
    setTypePersonnalisé("");
    setDescription("");
    setLongLat({ latitude: 0, longitude: 0 });

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'appel

    const incident = {
      latitude: longlat.latitude,
      longitude: longlat.longitude,
      description: description,
      type: typeIncident,
    }
    console.log(incident)
    const response = await axiosInstance.post('/incidents', incident);
    console.log(response)
    setIsLoading(false)
    resetState()
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
              <MapDisplay setLongLat={setLongLat}  ></MapDisplay>

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
    </div >
  );
};

export default SignalerIncident;
