"use client";
import ProgramCard from "@components/ProgramCard";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import Link from "next/link";
import {
  Heart,
  Users,
  Briefcase,
  BookOpen,
  Phone,
  CheckCircle,
  Shield,
  HelpingHand,
} from "lucide-react";
import { googleFormLink, phoneNumber } from "./constants";
import InsuranceCard from "@components/InsuranceCard";
import { useState } from "react";

const Index = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <div className="bg-gradient-calm overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(0deg,rgba(0,13,27,0.7)_0%,rgba(182,67,235,0.2)_100%),url('/hero.jpeg')] bg-size-[430%] bg-position-[right_25%_center] bg-no-repeat pb-10 md:bg-cover md:bg-center">
        {/* <div className="bg-gradient-hero absolute inset-0 opacity-10"></div> */}
        <div className="relative container px-4 py-20 lg:py-10">
          <div className="max-w-4xl space-y-8 text-center">
            <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Outpatient and Intensive Outpatient Program for{" "}
              <span className="from-primary to-primary-light bg-linear-to-r bg-clip-text text-transparent">
                Women & Children
              </span>{" "}
              Healing from Trauma
            </h1>
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              Reclaim your story. Build safety. Heal together.
            </p>
            <p className="mx-auto max-w-2xl text-lg font-medium text-gray-400">
              We specialize in trauma recovery for families escaping emotional
              abuse, narcissistic relationships, and complex family trauma.
            </p>
            {/* Key Benefits */}
            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Insurance Accepted",
                "Small Groups (5-6 max)",
                "Licensed Professionals",
                "Immediate Openings",
                "Evidence-Based Care",
                "Trauma Specialists",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center justify-center space-x-2 sm:justify-start"
                >
                  <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Link href={`tel:${phoneNumber}`}>
                <Button
                  size="lg"
                  className="shadow-glow cursor-pointer text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {`Call Now: 623-267-6240`}
                </Button>
              </Link>
              <Link href={`${googleFormLink}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-lg"
                >
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Mission */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Behavioral Health and Wellness
            </h2>
            <p className="text-muted-foreground text-xl">
              We believe that behavioral health is just as important as physical
              health—and that healing from trauma requires both intensive
              support and compassionate community.
            </p>
          </div>

          <div className="prose prose-lg text-foreground/80 max-w-none space-y-6">
            <p>
              At Metta Vibes, we specialize in helping women and children heal
              from emotional abuse, narcissistic relationships, domestic
              violence, and complex family trauma. Our{" "}
              <strong>Intensive Outpatient Programs</strong> provide the
              structured, evidence-based care that trauma survivors need to
              reclaim their stories and build lives rooted in safety,
              resilience, and authentic connection.
            </p>

            <div className="not-prose mt-8 grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Shield className="text-primary mb-3 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">We Understand</h3>
                  <p className="text-muted-foreground text-sm">
                    Our programs are designed by people who know firsthand the
                    devastating impact of abuse and the courage it takes to seek
                    help. We see you. We believe you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <CheckCircle className="text-primary mb-3 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">
                    {"We're Clinical"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Treatment is led by licensed mental health clinicians
                    trained in trauma-informed, evidence-based approaches
                    including EMDR, TF-CBT, DBT, and CPT.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Heart className="text-primary mb-3 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">
                    {"We're Accessible"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We accept Medicaid and major commercial insurance because
                    everyone deserves access to quality trauma treatment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Users className="text-primary mb-3 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">
                    {"We're Intentional"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Small group sizes (5-6 max) ensure every person receives
                    personalized attention and feels truly seen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is IOP */}
      <section className="bg-primary/10 pt-20 pb-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              What is IOP?
            </h2>
            <p className="text-muted-foreground mb-8 text-center text-xl">
              Understanding Intensive Outpatient Treatment
            </p>

            <Card className="bg-white border-primary/20 mb-8">
              <CardContent className="pt-6">
                <p className="mb-6 text-lg">
                  Intensive Outpatient Program (IOP) provides{" "}
                  <strong>9-20 hours per week</strong> of structured mental
                  health treatment—more support than traditional weekly therapy,
                  but you return home each day.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold">
                      IOP is right for you if:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Weekly therapy isn't enough",
                        "You need daily support to process trauma",
                        "You're struggling with anxiety, depression, or PTSD from abuse",
                        "You want to heal alongside others who understand",
                        "You need care that works with your insurance",
                      ].map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-primary/10 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-muted-foreground mb-8 text-center text-2xl font-bold">
              Conditions We Treat
            </p>

            <Card className="bg-white border-primary/20 mb-8">
              <CardContent className="pt-1">
                <div className="space-y-4">
                  <div>
                    <ul className="grid grid-cols-1 space-y-2 md:grid-cols-2">
                      {[
                        "ADHD",
                        "Anger/mood regulation",
                        "Anxiety",
                        "Autism spectrum disorder (ASD)",
                        "Bipolar disorder",
                        "Borderline personality disorder (BPD)",
                        "Bullying",
                        "Depression",
                        "Family conflict",
                        "Oppositional defiant disorder (ODD)",
                        "Reactive attachment disorder (RAD)",
                        "Self-harm/cutting",
                        "Social isolation",
                        "Suicidal ideation",
                        "Technology addiction",
                        "Other mental health conditions",
                      ].map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OP vs IOP Comparison */}
      <section className="bg-muted px-4 py-20">
        <div className="mx-auto max-w-4xl md:w-full">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            How is Outpatient (OP) Different from IOP?
          </h2>
          <p className="text-muted-foreground mb-12 text-center text-lg">
            While both provide therapeutic support without overnight stays, they
            differ in intensity and time commitment.
          </p>

          <h3 className="mb-8 text-center text-2xl font-semibold">
            Five Key Differences
          </h3>

          <div className="grid grid-cols-1 gap-6 space-y-2 md:grid-cols-2">
            <Card className="bg-primary-foreground border-primary/10 transition-transform duration-600 hover:scale-105">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-lg font-bold">1. Time Commitment</h4>
                <p className="text-muted-foreground">
                  OP involves 1-2 hours per week, while IOP requires 9-20 hours
                  per week, typically 3-5 days per week.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-primary/10 transition-transform duration-600 hover:scale-105">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-lg font-bold">
                  2. Level of Care Intensity
                </h4>
                <p className="text-muted-foreground">
                  IOP provides structured support with multiple therapy
                  sessions, skills training, and clinical monitoring. OP offers
                  less intensive support for maintaining stability or addressing
                  specific concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-primary/10 transition-transform duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-lg font-bold">
                  3. Treatment Structure
                </h4>
                <p className="text-muted-foreground">
                  IOP follows a comprehensive program with scheduled group
                  therapy, individual sessions, and family involvement. OP
                  allows flexible, individualized scheduling focused on specific
                  goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-primary/10 transition-transform duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-lg font-bold">
                  {"4. Who It's Designed For"}
                </h4>
                <p className="text-muted-foreground">
                  IOP serves individuals needing significant support but not
                  24-hour care—those stepping down from higher care levels or
                  requiring intervention to prevent hospitalization. OP is best
                  for manageable symptoms requiring ongoing support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-primary/10 w-109 transition-transform duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <h4 className="mb-3 text-lg font-bold">
                  5. Flexibility and Scheduling
                </h4>
                <p className="text-muted-foreground">
                  OP offers greater scheduling flexibility around school and
                  other commitments. IOP requires structured attendance, though
                  typically scheduled outside school hours.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted mb-4 text-lg">
              <strong>Need help determining the right level of care?</strong>
            </p>
            <Link href={`tel:${phoneNumber}`}>
              <Button size="lg" className="shadow-glow cursor-pointer">
                <Phone className="mr-2 h-5 w-5" />
                Contact Metta Vibes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="mx-auto bg-[linear-gradient(45deg,rgb(0,12,27)_60%,rgb(36,23,69)_100%)] px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-primary-foreground mb-4 text-3xl font-bold md:text-4xl">
            Our Programs
          </h2>
          <p className="text-[#d6d6d6] text-xl font-normal">
            Specialized support for every stage of healing
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="The Kindred Path"
            subtitle="IOP for Adult Women"
            description="Reclaim your story. A safe space for women healing from emotional abuse and narcissistic relationships. 12-20 hours/week."
            link="/kindred-path"
            icon={Heart}
            gradient="from-primary to-primary-light"
            bgImageUrl="/kinder-path-hero.jpg"
            isActive={activeCard === 0}
            onActivate={() => setActiveCard(0)}
          />

          <ProgramCard
            title="The Metta Cove"
            subtitle="IOP for Children & Teens (8-17)"
            description="A safe harbor for young hearts healing from abuse, loss, and family trauma. Small groups, 9-15 hours/week."
            link="/metta-cove"
            icon={Users}
            gradient="from-primary to-primary-light"
            bgImageUrl="/metta-cove.jpg"
            isActive={activeCard === 1}
            onActivate={() => setActiveCard(1)}
          />

          <ProgramCard
            title="What the GRIEF?!"
            subtitle="Grief Support Programming (OP)"
            description="Navigate the complex journey of loss with compassionate guidance. Individual therapy and support groups available."
            link="/grief"
            icon={Heart}
            gradient="from-primary to-primary-light"
            bgImageUrl="/family-playbook-hero.jpg"
            isActive={activeCard === 2}
            onActivate={() => setActiveCard(2)}
          />

          <ProgramCard
            title="Metta Works!"
            subtitle="Transitional Age Youth (TAY) - OP"
            description="Ignite confidence and chart your own course! Hands-on coaching for essential life skills and career readiness."
            link="/metta-works"
            icon={Briefcase}
            gradient="from-primary to-primary-light"
            bgImageUrl="/metta-works.jpg"
            isActive={activeCard === 3}
            onActivate={() => setActiveCard(3)}
          />

          <ProgramCard
            title="Family Playbook"
            subtitle="OP for Children & Teens (8-17)"
            description="A practical guide for building family resilience. Workshops and therapy to navigate challenges together."
            link="/family-playbook"
            icon={BookOpen}
            gradient="from-primary to-primary-light"
            bgImageUrl="/family-playbook-hero.jpg"
            isActive={activeCard === 4}
            onActivate={() => setActiveCard(4)}
          />
          <ProgramCard
            title="Counseling Services"
            subtitle="Counseling Services for You"
            description="Personalized counseling to nurture growth and healing. Therapy and guidance to strengthen every child, teen, and family."
            link="/counseling-services"
            icon={HelpingHand}
            gradient="from-primary to-primary-light"
            bgImageUrl="/family-playbook-hero.jpg"
            isActive={activeCard === 5}
            onActivate={() => setActiveCard(5)}
          />
        </div>
      </section>

      {/* Insurance & Contact */}
      <section className="bg-muted/30 pt-10 pb-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Insurance & How to Enroll
            </h2> */}

            {/* <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-xl font-semibold">
                  We Accept Insurance
                </h3>
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
                    // <div
                    //   key={insurance}
                    //   className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium"
                    // >
                    //   {insurance}
                    // </div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  We handle insurance verification, prior authorization, claims,
                  and billing. Cost should never be a barrier to healing.
                </p>
              </CardContent>
            </Card> */}
            <InsuranceCard />

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">How to Start IOP</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    desc: "Call or complete our form for a free consultation",
                  },
                  {
                    step: "2",
                    title: "Insurance Verification",
                    desc: "We verify coverage and explain benefits",
                  },
                  {
                    step: "3",
                    title: "Assessment",
                    desc: "Meet with our clinical team",
                  },
                  {
                    step: "4",
                    title: "Prior Authorization",
                    desc: "We handle all paperwork",
                  },
                  {
                    step: "5",
                    title: "Welcome",
                    desc: "Begin your healing journey",
                  },
                ].map((item) => (
                  <Card key={item.step}>
                    <CardContent className="pt-6 text-center">
                      <div className="from-primary to-primary-light mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br text-xl font-bold text-white">
                        {item.step}
                      </div>
                      <h4 className="mb-2 font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Link href={`tel:${phoneNumber}`}>
                <Button
                  size="lg"
                  className="shadow-glow cursor-pointer text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now to Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
