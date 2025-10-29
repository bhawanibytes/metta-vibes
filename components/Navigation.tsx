"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const navLinks = [
    // { name: "Home", path: "/" },
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
            {/* <div className="text-2xl font-bold bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Metta Vibes
            </div> */}
            <Image
              src={"/metta-vibes-logo.png"}
              height={60}
              width={90}
              alt="Metta Vibes Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              key={"/"}
              href={"/"}
              className={`text-foreground/70 hover:text-primary text-sm font-medium transition-colors`}
            >
              {"Home"}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 transition-colors ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
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
