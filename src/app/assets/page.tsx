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

const designAssets = [
  {
    id: 1,
    title: "UI Kit Components",
    description: "Complete UI component library with dark theme",
    price: "$39",
    rating: 4.9,
    downloads: 2345,
    views: 8901,
    fileCount: 45,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80",
    category: "UI Kit",
  },
  {
    id: 2,
    title: "Illustration Pack",
    description: "Modern vector illustrations for web and mobile",
    price: "$29",
    rating: 4.8,
    downloads: 1876,
    views: 6543,
    fileCount: 30,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
    category: "Illustrations",
  },
  {
    id: 3,
    title: "Brand Identity Kit",
    description: "Complete branding package with logos and guidelines",
    price: "$49",
    rating: 4.9,
    downloads: 987,
    views: 4321,
    fileCount: 25,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
    category: "Branding",
  },
  {
    id: 4,
    title: "Mockup Collection",
    description: "High-quality device and screen mockups",
    price: "$34",
    rating: 4.7,
    downloads: 3456,
    views: 12345,
    fileCount: 20,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
    category: "Mockups",
  },
  {
    id: 5,
    title: "Typography Pack",
    description: "Premium font collection for modern designs",
    price: "$24",
    rating: 4.6,
    downloads: 2134,
    views: 7890,
    fileCount: 15,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
    category: "Typography",
  },
  {
    id: 6,
    title: "Pattern Library",
    description: "Seamless patterns and textures for backgrounds",
    price: "$19",
    rating: 4.5,
    downloads: 1654,
    views: 5432,
    fileCount: 50,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
    category: "Patterns",
  },
];

const categories = [
  "All",
  "UI Kit",
  "Illustrations",
  "Branding",
  "Mockups",
  "Typography",
  "Patterns",
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Design{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Assets
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium design resources to accelerate your creative workflow. From
            UI kits to illustrations.
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

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designAssets.map((asset) => (
            <Card
              key={asset.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {asset.category}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-purple-600">
                    {asset.fileCount} Files
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{asset.title}</CardTitle>
                <CardDescription className="mb-3">
                  {asset.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{asset.rating}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{asset.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{asset.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {asset.price}
                </span>
                <Link href={`/product/${asset.id}`}>
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
