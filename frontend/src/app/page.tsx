"use client";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Earth, Leaf, AlertTriangle, TreePine } from "lucide-react";

const Index = () => {
  const navigate = useRouter();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-4xl text-center z-10 animate-fadeIn">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
              <Earth className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">
            Planète Alerte
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Together, we can protect our environment through citizen vigilance
          </p>
          <Button
            onClick={() => navigate.push("/report")}
            className="button-gradient text-lg px-8 py-6"
          >
            Report an Incident
            <AlertTriangle className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold">Environmental Protection</h3>
              </div>
              <p className="text-muted-foreground">
                We empower citizens to be active guardians of our environment by providing
                a platform to report ecological incidents in real-time.
              </p>
            </Card>
            <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <TreePine className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Community Action</h3>
              </div>
              <p className="text-muted-foreground">
                By connecting concerned citizens with environmental authorities,
                we create a powerful network for rapid response to ecological threats.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid gap-8">
            {[
              {
                step: "1",
                title: "Spot an Incident",
                description: "Notice an environmental issue in your area",
              },
              {
                step: "2",
                title: "Report It",
                description: "Use our simple form to document the incident with photos and details",
              },
              {
                step: "3",
                title: "Take Action",
                description: "We notify relevant authorities and track the resolution process",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-500/10 to-emerald-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every report contributes to protecting our environment.
            Start making a difference today.
          </p>
          <Button
            onClick={() => navigate.push("/report")}
            className="button-gradient text-lg px-8 py-6"
          >
            Start Reporting
            <AlertTriangle className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;