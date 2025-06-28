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

const iconPacks = [
  {
    id: 1,
    title: "Business Icons",
    description: "Professional business and office icon collection",
    price: "$19",
    rating: 4.9,
    downloads: 3456,
    views: 12345,
    iconCount: 120,
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80",
    category: "Business",
  },
  {
    id: 2,
    title: "Social Media Icons",
    description: "Complete social media platform icon set",
    price: "$15",
    rating: 4.8,
    downloads: 5678,
    views: 23456,
    iconCount: 80,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    category: "Social",
  },
  {
    id: 3,
    title: "Tech & Development",
    description: "Icons for developers and tech enthusiasts",
    price: "$24",
    rating: 4.9,
    downloads: 2134,
    views: 8765,
    iconCount: 150,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
    category: "Technology",
  },
  {
    id: 4,
    title: "E-commerce Icons",
    description: "Shopping and e-commerce related icons",
    price: "$22",
    rating: 4.7,
    downloads: 1987,
    views: 7654,
    iconCount: 100,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    category: "E-commerce",
  },
  {
    id: 5,
    title: "Medical & Health",
    description: "Healthcare and medical industry icons",
    price: "$26",
    rating: 4.8,
    downloads: 1543,
    views: 6789,
    iconCount: 90,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    category: "Medical",
  },
  {
    id: 6,
    title: "Travel & Tourism",
    description: "Travel, vacation and tourism icon pack",
    price: "$18",
    rating: 4.6,
    downloads: 2876,
    views: 9876,
    iconCount: 110,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
    category: "Travel",
  },
];

const categories = [
  "All",
  "Business",
  "Social",
  "Technology",
  "E-commerce",
  "Medical",
  "Travel",
];

export default function IconsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Icon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Collections
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium icon packs designed for modern applications. Available in
            multiple formats and sizes.
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

        {/* Icon Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iconPacks.map((pack) => (
            <Card
              key={pack.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {pack.category}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-green-600">
                    {pack.iconCount} Icons
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{pack.title}</CardTitle>
                <CardDescription className="mb-3">
                  {pack.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{pack.rating}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{pack.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{pack.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {pack.price}
                </span>
                <Link href={`/product/${pack.id}`}>
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
