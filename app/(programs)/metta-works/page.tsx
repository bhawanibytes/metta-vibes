import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import {
  Phone,
  Briefcase,
  TrendingUp,
  Home,
  DollarSign,
  Heart,
  Users,
} from "lucide-react";

const MettaWorks = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="from-primary-light to-secondary relative overflow-hidden bg-linear-to-br text-white">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Metta Works!
            </h1>
            <p className="text-xl opacity-95 md:text-2xl">
              Life Skills Program for Transitional Age Youth (Ages 13-25)
            </p>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Ignite confidence and chart your own course!
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Who Metta Works! Serves
          </h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                <strong>Metta Works!</strong> is hands-on coaching and skills
                training for teens and young adults (ages 13-25) who need
                support building:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Independent living skills (budgeting, cooking, housing)",
                  "Emotional resilience (managing stress, relationships)",
                  "Career and education readiness (job skills, resume)",
                  "Life navigation (healthcare, legal systems)",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <TrendingUp className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                This program is perfect for:
              </h3>
              <ul className="space-y-3">
                {[
                  "Youth aging out of foster care or other systems",
                  "Teens and young adults with trauma histories who need extra support launching into adulthood",
                  "Transitional age youth with mental health challenges navigating independence",
                  "Anyone 13-25 who wants practical life skills coaching",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <Heart className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              What Metta Works! Includes
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        One-on-One Life Coaching
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Work with a coach to:
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                        <li>
                          • Set personal goals (housing, employment, education,
                          relationships)
                        </li>
                        <li>• Build a roadmap for independence</li>
                        <li>• Problem-solve challenges as they arise</li>
                        <li>• Hold accountability for progress</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Briefcase className="text-primary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Group Skills Training
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Learn essential life skills with peers:
                      </p>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <DollarSign className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">
                              Financial Literacy
                            </p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Budgeting, saving, credit, avoiding debt
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <Home className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">Housing</p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Finding apartments, leases, tenant rights
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <Briefcase className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">Employment</p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Job searching, resumes, interviews
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <Heart className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">
                              Health & Wellness
                            </p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Navigating healthcare, mental health
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <Users className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">Relationships</p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Communication, boundaries, conflict
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center space-x-2">
                            <TrendingUp className="text-secondary h-5 w-5" />
                            <p className="text-sm font-medium">
                              Adulting Basics
                            </p>
                          </div>
                          <p className="text-muted-foreground ml-7 text-xs">
                            Cooking, laundry, time management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="text-primary mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Community Resources & Support
                      </h3>
                      <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                        <li>
                          • Connection to housing assistance, job placement
                          programs, educational opportunities
                        </li>
                        <li>
                          • Help navigating public benefits (Medicaid, SNAP,
                          housing vouchers)
                        </li>
                        <li>• Peer mentorship and community building</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Format & Cost */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Format & Cost
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Format</h3>
                <p className="text-muted-foreground">
                  Combination of individual coaching + group workshops
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Length</h3>
                <p className="text-muted-foreground">
                  Flexible—some participants stay 3 months, others a year or
                  more depending on needs
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">Cost</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sliding scale fees available</li>
                  <li>
                    • Scholarships available for youth aging out of foster care
                  </li>
                </ul>
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
              Independence is Possible
            </h2>
            <p className="text-muted-foreground text-xl">
              {`We'll help you get there. Set up an initial meeting to discuss
              your goals.`}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="shadow-glow text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (Your Number)
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MettaWorks;
