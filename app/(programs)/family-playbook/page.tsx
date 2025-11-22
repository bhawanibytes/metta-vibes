import CTAButtons from "@components/CTAButtons";
import { Card, CardContent } from "@components/ui/card";
import { BookOpen, Users, Heart, Home } from "lucide-react";
import Image from "next/image";

const FamilyPlaybook = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black/20 bg-[url('/family-playbook-hero.jpg')] bg-size-[200%] bg-position-[left_15%_top_30%] text-white bg-blend-color-burn md:bg-cover md:bg-position-[center_top_35%]">
        {/* <div className="absolute inset-0 bg-primary/50"></div> */}
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Family Playbook: Resilience Edition
            </h1>
            <p className="text-xl opacity-95 md:text-2xl">
              Family Skills Training
            </p>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              A practical, proactive guide for building family resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            The Family Playbook: Resilience Edition
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-justify text-lg leading-relaxed">
            {`Your 6-Week Blueprint for Bouncing Forward.`}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-justify text-lg leading-relaxed">
            {`The Family Playbook: Resilience Edition is an intensive, 6-week program that teaches families how to transform crisis into growth—a process we call “bouncing forward”.`}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-justify text-lg leading-relaxed">
            {`We provide actionable, clinical skills to ensure your family can face stress and adversity not just as survivors, but as a stronger, more connected unit.`}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-justify text-lg leading-relaxed">
            {`Core Pillars of Strength:`}
          </p>
          <ul className="text-muted-foreground ml-10 max-w-3xl text-justify text-lg leading-relaxed md:ml-20">
            <li>
              • Resilience Mindset: Learn to control your narrative by reframing
              challenges, setting optimistic goals, and shifting the family from
              distress to empowerment.
            </li>
            <li>
              • Security & Structure: Establish stability using flexible,
              non-negotiable routines and rituals. We secure the whole system by
              building Parental Resilience and connecting to community supports.
            </li>
            <li>
              • Teamwork & Skills: Solve problems together using essential
              conflict resolution tools: Active Listening and “I-Statements.”
              Implement effective Family Meetings to tackle any issue as a
              unified front.
            </li>
          </ul>
          <p className="text-muted-foreground mx-auto max-w-3xl text-justify text-lg leading-relaxed">
            {`Enroll today to stop just surviving and start building a legacy of strength.`}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-5 w-full bg-linear-to-b from-white to-gray-200" />

      {/* Who We Serve */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Who This Program Serves
          </h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                <strong>Family Playbook: Resilience Edition</strong> is for
                families who want to:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Strengthen family bonds and improve communication",
                  "Navigate challenges together (divorce, grief, transitions)",
                  "Interrupt unhealthy patterns (yelling, avoidance, conflict)",
                  "Build lasting emotional resilience in all family members",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <Heart className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                This program is for families with:
              </h3>
              <ul className="space-y-3">
                {[
                  "Children ages 8-17",
                  "Parents/caregivers committed to learning together",
                  "A desire to be proactive (not just reactive) about family wellness",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <Users className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Options */}
      <section className="bg-[linear-gradient(45deg,rgb(0,12,27)_60%,rgb(36,23,69)_100%)] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              What Family Playbook Includes
            </h2>

            <div className="space-y-6">
              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Home className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 1: Family Therapy In Home or Clinical Sitting
                      </h3>
                      <p className="mb-3 text-[#e4e3e3]">
                        Work with clinical staff as a family to:
                      </p>
                      <ul className="ml-4 space-y-1 text-sm text-[#e4e3e3]">
                        <li>• Improve communication patterns</li>
                        <li>• Resolve conflicts constructively</li>
                        <li>• Strengthen parent-child relationships</li>
                        <li>
                          • Navigate transitions (divorce, blended families,
                          moves)
                        </li>
                        <li>{`• Individualized plan that is specific to your family's needs`}</li>
                      </ul>
                      {/* <p className="text-[#e4e3e3] mt-3 text-sm">
                        <strong>Format:</strong> 60-minute family sessions
                      </p> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 2: Family Skills Workshops
                      </h3>
                      <p className="mb-3 text-[#e4e3e3]">
                        Attend group workshops with other families to learn:
                      </p>
                      <ul className="ml-4 space-y-1 text-sm text-[#e4e3e3]">
                        <li>• Emotional regulation for kids and parents</li>
                        <li>
                          • Stress management strategies for the whole family
                        </li>
                        <li>
                          • Communication skills (active listening,
                          I-statements, repair after conflict)
                        </li>
                        <li>
                          • Family rituals and routines that build connection
                        </li>
                        <li>• Screen time and technology boundaries</li>
                        <li>• Navigating big emotions together</li>
                      </ul>
                      {/* <p className="text-[#e4e3e3] mt-3 text-sm">
                        <strong>Format:</strong> 90-minute workshops, 6-session
                        series
                      </p> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 3: Integrated Family Support
                      </h3>
                      <p className="text-[#e4e3e3]">
                        For families enrolled in The Metta Cove (child IOP),
                        family sessions are built into programming to help the
                        whole family heal together.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Cost */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            {/* Insurance & Cost */}
            We accept Insurance
          </h2>
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

          {/* <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Family Therapy</h3>
                <p className="text-muted-foreground mb-3">
                  {
                    "Typically covered by insurance (we bill under the child's policy for children under 18)."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Workshops</h3>
                <p className="text-muted-foreground">
                  Low-cost ($25-50/family per workshop) to ensure accessibility.
                </p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Build Resilience Together
            </h2>
            <p className="text-muted-foreground text-xl">
              {
                "Strong families aren't perfect—they're resilient. Let's build resilience together."
              }
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyPlaybook;
