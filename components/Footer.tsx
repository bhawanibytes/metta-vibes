import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  addressLink,
  developerGithub,
  mailId,
  phoneNumber,
} from "@app/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white border-border mt-20 border-t bg-[#03172d] ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/metta_vibes_logo.png"}
                height={60}
                width={90}
                alt="Metta Vibes Logo"
                // className="h-70 w-100"
              />
            </Link>
            <p className="text-muted mb-4 text-sm">
              Behavioral Health and Wellness
            </p>
            <p className="text-muted text-sm">
              Intensive Outpatient Programs for Women & Children Healing from
              Trauma
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kindred-path"
                  className="text-muted hover:text-primary transition-colors"
                >
                  The Kindred Path
                </Link>
              </li>
              <li>
                <Link
                  href="/metta-cove"
                  className="text-muted hover:text-primary transition-colors"
                >
                  The Metta Cove
                </Link>
              </li>
              <li>
                <Link
                  href="/grief"
                  className="text-muted hover:text-primary transition-colors"
                >
                  What the GRIEF?!
                </Link>
              </li>
              <li>
                <Link
                  href="/metta-works"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Metta Works!
                </Link>
              </li>
              <li>
                <Link
                  href="/family-playbook"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Family Playbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h4 className="mb-4 font-semibold">Insurance Accepted</h4>
            <ul className="text-muted space-y-2 text-sm">
              <li>Medicaid</li>
              <li>Blue Cross Blue Shield</li>
              <li>Aetna</li>
              <li>AIHP</li>
              <li>Cigna</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <Link href={`tel:${phoneNumber}`}>
                  <span className="text-muted">{phoneNumber}</span>
                </Link>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <Link href={`mailto:${mailId}`}>
                  <span className="text-muted">
                    contact@mettavibes.com
                  </span>
                </Link>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <Link href={addressLink} target="_blank">
                  <span className="text-muted">Arizona</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-8 flex justify-between border-t pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Metta Vibes Behavioral Health and
            Wellness. All rights reserved.
          </p>
          <p>
            Medical website developed & Maintained by{" "}
            <Link
              href={developerGithub}
              target="_blank"
              className="border-b-2 border-gray-800 font-bold"
            >
              BhawaniBytes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
