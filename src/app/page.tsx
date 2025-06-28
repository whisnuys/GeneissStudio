import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Code,
  Palette,
  Package,
  Star,
  Download,
  Users,
  TrendingUp,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const featuredProducts = [
    {
      id: 1,
      title: "Modern SaaS Dashboard",
      category: "Template",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
      rating: 4.9,
    },
    {
      id: 2,
      title: "Minimalist Icon Pack",
      category: "Icons",
      price: "$29",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
      rating: 4.8,
    },
    {
      id: 3,
      title: "E-commerce Template",
      category: "Template",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      rating: 5.0,
    },
    {
      id: 4,
      title: "Brand Identity Kit",
      category: "Assets",
      price: "$39",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
      rating: 4.7,
    },
  ];

  const categories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Templates",
      description: "Modern, responsive templates for every need",
      count: "150+ Templates",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Icon Collections",
      description: "Beautiful icons for web and mobile apps",
      count: "5000+ Icons",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Design Assets",
      description: "Graphics, illustrations, and UI kits",
      count: "300+ Assets",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Handpicked premium assets from our top creators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-card"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Browse Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find exactly what you need from our organized collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm font-medium text-primary mb-4">
                    {category.count}
                  </div>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                <Download className="w-8 h-8" />
                50K+
              </div>
              <div className="text-primary-foreground/80">Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                <Users className="w-8 h-8" />
                10K+
              </div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8" />
                99%
              </div>
              <div className="text-primary-foreground/80">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Start Building Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of designers and developers who trust Geneiss Studio
            for their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Free
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/templates">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
