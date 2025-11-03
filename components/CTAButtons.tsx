import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { googleFormLink, phoneNumber } from "@app/constants";
import Link from "next/link";

function CTAButtons() {
  return (
    <>
      <Link href={`tel:${phoneNumber}`}>
        <Button size="lg" className="shadow-glow cursor-pointer text-lg">
          <Phone className="mr-2 h-5 w-5" />
          {`Call Now: ${phoneNumber}`}
        </Button>
      </Link>
      <Link href={`${googleFormLink}`}>
        <Button size="lg" variant="outline" className="cursor-pointer text-lg">
          Request Consultation
        </Button>
      </Link>
    </>
  );
}

export default CTAButtons;
