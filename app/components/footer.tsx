import Link from "next/link";
import { Film, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Film className="h-6 w-6" />
              <span className="font-bold text-xl">CineReview</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for movie reviews, ratings, and
              cinematic discussions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/browse"
                className="block text-muted-foreground hover:text-foreground"
              >
                Browse Movies
              </Link>
              <Link
                href="/review"
                className="block text-muted-foreground hover:text-foreground"
              >
                Write Review
              </Link>
              <Link
                href="/profile"
                className="block text-muted-foreground hover:text-foreground"
              >
                My Profile
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CineReview. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
