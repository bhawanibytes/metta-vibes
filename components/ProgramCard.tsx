"use client";

import Link from "next/link";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: LucideIcon;
  gradient?: string;
  bgImageUrl: string;
  isActive: boolean;
  onActivate: () => void;
}

const ProgramCard = ({
  title,
  subtitle,
  description,
  link,
  icon: Icon,
  gradient = "from-primary to-primary-light",
  bgImageUrl,
  isActive,
  onActivate,
}: ProgramCardProps) => {
  return (
    <Card
      className="group text-white hover:shadow-glow hover:border-primary/30 bg-[#112b47] border-[#1f548d] relative flex h-full cursor-pointer flex-col overflow-hidden border transition-all duration-300"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onTouchMove={onActivate}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl bg-cover bg-center transition-opacity duration-600 ${isActive ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(51, 65, 85, 0.7), rgba(51, 65, 85, 0.7)), url(${bgImageUrl})`,
        }}
      />

      <CardHeader className="relative z-10">
        <div
          className={`h-14 w-14 rounded-xl bg-linear-to-br ${gradient} mb-4 flex items-center justify-center transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle
          className={`text-xl transition-colors duration-300`}
        >
          {title}
        </CardTitle>
        <CardDescription
          className={`text-[#e4e3e3] font-medium transition-colors duration-300 `}
        >
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 grow">
        <p
          className={`text-[#e4e3e3] leading-relaxed transition-colors duration-300 `}
        >
          {description}
        </p>
      </CardContent>
      <CardFooter className="relative z-10">
        <Link href={link} className="w-full">
          <Button
            variant="outline"
            className={`w-full text-black transition-all ${isActive ? "bg-primary text-primary-foreground border-primary" : ""}`}
          >
            Learn More
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform ${isActive ? "translate-x-1" : ""}`}
            />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
