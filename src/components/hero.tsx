import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

      <div className="relative pt-32 pb-40 sm:pt-40 sm:pb-48">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Premium Digital Assets
            </div>

            <h1 className="text-6xl sm:text-7xl font-bold text-foreground mb-8 tracking-tight">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Digital
              </span>{" "}
              Marketplace
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover high-quality website templates, icons, and design assets
              crafted by top designers. Build stunning projects with our curated
              collection of premium digital resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="text-lg px-8 py-6">
                Browse Templates
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>

              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View All Assets
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Instant downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Commercial license included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Premium support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
