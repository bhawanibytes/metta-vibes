import CTAButtons from "@components/CTAButtons";
import InsuranceCard from "@components/InsuranceCard";
import { Card, CardContent } from "@components/ui/card";
import {
  CheckCircle,
  Shield,
  Heart,
  ArrowRightIcon,
  Users,
  Clock,
} from "lucide-react";

const KindredPath = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-black/30 bg-[url('/kinder-path-hero.jpg')] bg-size-[220%] bg-center text-white bg-blend-darken md:bg-black/20 md:bg-cover`}
      >
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              The Kindred Path
            </h1>
            <p className="text-xl opacity-95 md:text-2xl">
              Intensive Outpatient Program for Adult Women
            </p>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Reclaim your story. A safe space for women healing from emotional
              abuse and narcissistic relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Who The Kindred Path Serves
          </h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                The Kindred Path is our{" "}
                <strong>Intensive Outpatient Program (IOP)</strong> designed
                specifically for adult women who have experienced:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Emotional, verbal, or psychological abuse",
                  "Narcissistic abuse and manipulation",
                  "Domestic violence (current or past)",
                  "Coercive control",
                  "Gaslighting and reality distortion",
                  "Betrayal trauma",
                  "Traumatic loss or abandonment",
                  "Complex trauma from multiple relationships",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                The Kindred Path is for you if:
              </h3>
              <ul className="space-y-3">
                {[
                  "You're finally free (or working toward freedom) from an abusive relationship",
                  "You struggle with anxiety, depression, PTSD, or complex trauma symptoms",
                  "You feel stuck in patterns of attracting emotionally unavailable or harmful partners",
                  "You need more support than weekly therapy provides",
                  "You're ready to heal with other women who truly understand",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <ArrowRightIcon className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              What Makes The Kindred Path Different
            </h2>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="text-primary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">Small Cohorts</h3>
                  <p className="text-muted-foreground text-sm">
                    Maximum 5 women per cohort. No getting lost in a crowd.
                    Every voice matters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="text-primary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">Evidence-Based</h3>
                  <p className="text-muted-foreground text-sm">
                    EMDR, DBT, CPT, trauma-focused therapy led by licensed
                    clinicians.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="text-primary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    12-20 Hours/Week
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Intensive daily support with comprehensive programming.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Programming Details */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Process Groups (Daily, 3 hours)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {`
                    Share your story, break isolation, and realize: you're not
                    alone, and you're not crazy.
                  `}
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    Topics: Understanding narcissistic abuse, trauma bonding,
                    identifying patterns, rebuilding self-worth, co-parenting
                    with an abusive ex, setting boundaries
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Individual Sessions (2-3x per week)
                  </h3>
                  <p className="text-muted-foreground">
                    One-on-one work with clinical staff to process your specific
                    trauma privately, work on personal goals, and address issues
                    unique to your situation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Skills Training Groups
                  </h3>
                  <p className="text-muted-foreground">
                    Learn practical, life-changing skills: emotional regulation,
                    distress tolerance, boundary setting, self-compassion,
                    communication, and mindfulness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Approach</h2>

          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                {`
                We understand that healing from emotional abuse and narcissistic
                relationships isn't linear. `}
                <strong>
                  {`
                  You didn't "just" experience heartbreak—you experienced
                  psychological warfare.
                  `}
                </strong>
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold">We believe:</h3>
                <ul className="space-y-2">
                  {[
                    "You are not to blame for what happened to you. Abuse is a choice the abuser made.",
                    "Your reactions are normal responses to abnormal treatment. You're not broken.",
                    "You deserve to be believed. We see you. We believe you. Even if others didn't.",
                    "Healing happens in community. Isolation kept you trapped; connection will set you free.",
                    "You can reclaim your story. What happened is part of your past, but it doesn't define your future.",
                    "You are stronger than you know. The fact that you're here is proof.",
                  ].map((belief) => (
                    <li key={belief} className="flex items-start space-x-2">
                      <Heart className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground">{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              We accept Insurance
            </h2>

            {/* <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Program Hours: 12-20 hours per week
                </h3>
                <p className="text-muted-foreground mb-4">
                  Typically 3 hours/day, 4-5 days/week
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Monday:</strong> 6:00-9:00pm – Process Group +
                    Skills Training
                  </p>
                  <p>
                    <strong>Tuesday:</strong> 10:00am – Individual Session
                  </p>
                  <p>
                    <strong>Wednesday:</strong> 6:00-9:00pm – Psychoeducation +
                    DBT Skills
                  </p>
                  <p>
                    <strong>Thursday:</strong> 2:00pm – Individual Session
                  </p>
                  <p>
                    <strong>Friday:</strong> 6:00-9:00pm – Wellness Practices +
                    Community Building
                  </p>
                </div>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  Exact schedule determined during intake. Daytime, evening, and
                  weekend options available. Virtual and hybrid options
                  available.
                </p>
              </CardContent>
            </Card> */}

            <InsuranceCard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Begin Healing?
          </h2>
          <p className="text-muted-foreground text-xl">
            {`
            You deserve to feel safe. You deserve to be free. We're here to
            help.
          `}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default KindredPath;
