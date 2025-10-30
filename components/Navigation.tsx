"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const programLinks = [
    { name: "The Kindred Path", path: "/kindred-path" },
    { name: "The Metta Cove", path: "/metta-cove" },
    { name: "What the GRIEF?!", path: "/grief" },
    { name: "Metta Works!", path: "/metta-works" },
    { name: "Family Playbook", path: "/family-playbook" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-card/95 border-border sticky top-0 z-50 border-b shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="from-primary to-primary-light bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent">
              Metta Vibes
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              About Us
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/70 hover:text-primary data-[state=open]:text-primary text-sm font-medium">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="bg-card grid w-50 gap-3 p-4">
                      {programLinks.map((link) => (
                        <li key={link.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.path}
                              className={`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none ${
                                isActive(link.path)
                                  ? "bg-accent/50 text-primary font-medium"
                                  : ""
                              }`}
                            >
                              <div className="text-sm leading-none font-medium">
                                {link.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Button variant="default" size="lg" className="shadow-soft">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-muted rounded-lg p-2 transition-colors lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-border space-y-2 border-t py-4 lg:hidden">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-colors ${
                isActive("/")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-colors ${
                isActive("/about")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              About Us
            </Link>

            <div className="px-4 py-2">
              <div className="text-foreground/90 mb-2 text-sm font-semibold">
                Programs
              </div>
              <div className="space-y-1 pl-2">
                {programLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-colors ${
                isActive("/contact")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              Contact
            </Link>

            <div className="px-4 pt-4">
              <Button variant="default" size="lg" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
