import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Eye } from "lucide-react";
import Link from "next/link";

const templates = [
  {
    id: 1,
    title: "Modern Portfolio",
    description: "Clean and minimal portfolio template for developers",
    price: "$29",
    rating: 4.8,
    downloads: 1234,
    views: 5678,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    category: "Portfolio",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Complete e-commerce solution with modern design",
    price: "$49",
    rating: 4.9,
    downloads: 2156,
    views: 8901,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "High-converting landing page for SaaS products",
    price: "$39",
    rating: 4.7,
    downloads: 987,
    views: 3456,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
    category: "Landing Page",
  },
  {
    id: 4,
    title: "Blog Template",
    description: "Elegant blog template with dark theme support",
    price: "$24",
    rating: 4.6,
    downloads: 1567,
    views: 4321,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&q=80",
    category: "Blog",
  },
  {
    id: 5,
    title: "Dashboard UI",
    description: "Professional dashboard with analytics components",
    price: "$59",
    rating: 4.9,
    downloads: 3421,
    views: 9876,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    category: "Dashboard",
  },
  {
    id: 6,
    title: "Agency Website",
    description: "Modern agency website with portfolio showcase",
    price: "$44",
    rating: 4.8,
    downloads: 1876,
    views: 6543,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    category: "Agency",
  },
];

const categories = [
  "All",
  "Portfolio",
  "E-commerce",
  "Landing Page",
  "Blog",
  "Dashboard",
  "Agency",
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Templates
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional website templates built with modern technologies. Ready
            to customize and deploy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {template.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{template.title}</CardTitle>
                <CardDescription className="mb-3">
                  {template.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{template.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {template.price}
                </span>
                <Link href={`/product/${template.id}`}>
                  <Button>View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
