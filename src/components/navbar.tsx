import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { ShoppingCart, Package, Palette, Code } from "lucide-react";
import UserProfile from "./user-profile";
import { ThemeSwitcher } from "./theme-switcher";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Geneiss Studio
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/templates"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            Templates
          </Link>
          <Link
            href="/icons"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Palette className="w-4 h-4" />
            Icons
          </Link>
          <Link
            href="/assets"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            Assets
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>

          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
