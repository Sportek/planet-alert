"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'appel API
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Succès !",
          description: "Vous êtes connecté avec succès.",
          className: "bg-emerald-500 text-white",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center mx-auto py-20">
      <Card className="glass-card max-w-xl w-full">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-semibold">Planète Alerte</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Connectez-vous pour signaler des incidents écologiques
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                />
                <Label htmlFor="remember-me" className="text-sm">Se souvenir de moi</Label>
              </div>
              <Button variant="link" className="text-sm p-0 h-auto font-normal">
                Mot de passe oublié ?
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full button-gradient"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Se connecter"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Index;
