import CTAButtons from "@components/CTAButtons";
import { Card, CardContent } from "@components/ui/card";
import { BookOpen, Users, Heart, Home } from "lucide-react";

const FamilyPlaybook = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden text-white">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
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
                  "Children ages 5-17",
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
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              What Family Playbook Includes
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Home className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 1: Family Therapy
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Work with clinical staff as a family to:
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                        <li>• Improve communication patterns</li>
                        <li>• Resolve conflicts constructively</li>
                        <li>• Strengthen parent-child relationships</li>
                        <li>
                          • Navigate transitions (divorce, blended families,
                          moves)
                        </li>
                      </ul>
                      <p className="text-muted-foreground mt-3 text-sm">
                        <strong>Format:</strong> 60-minute family sessions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 2: Family Skills Workshops
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Attend group workshops with other families to learn:
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
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
                      <p className="text-muted-foreground mt-3 text-sm">
                        <strong>Format:</strong> 90-minute workshops, 6-session
                        series
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="text-secondary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 3: Integrated Family Support
                      </h3>
                      <p className="text-muted-foreground">
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
            Insurance & Cost
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Family Therapy</h3>
                <p className="text-muted-foreground mb-3">
                  {
                    "Typically covered by insurance (we bill under the child's policy for children under 18)."
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Medicaid",
                    "Blue Cross Blue Shield",
                    "Aetna",
                    "AIHP",
                    "Cigna",
                  ].map((ins) => (
                    <span
                      key={ins}
                      className="bg-secondary/10 text-secondary rounded-full px-2 py-1 text-xs"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
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
          </div>
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
