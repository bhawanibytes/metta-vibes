import Image from "next/image";
import { Card, CardContent } from "./ui/card";

function InsuranceCard() {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <h3 className="mb-4 text-xl font-semibold">We Accept Insurance</h3>
        <div className="mb-6 flex flex-wrap justify-center gap-6">
          {[
            { name: "Medicaid", imagePath: "/ahcccs_logo.jpg" },
            {
              name: "Blue Cross Blue Shield",
              imagePath: "/bcbs_logo.svg",
            },
            { name: "Aetna", imagePath: "/aetna_logo.svg" },
            { name: "Cigna", imagePath: "/cigna_logo.svg" },
            { name: "Evernorth", imagePath: "/evernorth_logo.svg" },
          ].map((insurance) => (
            <Image
              key={insurance.name}
              alt={insurance.name}
              src={insurance.imagePath}
              height={40}
              width={100}
              className="h-10 w-25"
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4">
          {`We handle insurance verification, prior authorization, claims, and
          billing. Cost should never be a barrier to healing. We also offer sliding scale  payment plans and scholarships on a case by case basis because everyone deserves access to compassionate care when it's needed the most.`}
        </p>
      </CardContent>
    </Card>
  );
}

export default InsuranceCard;
