import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: LucideIcon;
  gradient?: string;
}

const ProgramCard = ({
  title,
  subtitle,
  description,
  link,
  icon: Icon,
  gradient = "from-primary to-primary-light",
}: ProgramCardProps) => {
  return (
    <Card className="group hover:shadow-glow border-border/50 hover:border-primary/30 flex h-full flex-col transition-all duration-300">
      <CardHeader>
        <div
          className={`h-14 w-14 rounded-xl bg-linear-to-br ${gradient} mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-foreground/80 font-medium">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button
            variant="outline"
            className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary w-full transition-all"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
