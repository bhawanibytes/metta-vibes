import CTAButtons from "@components/CTAButtons";
import InsuranceCard from "@components/InsuranceCard";
import { Card, CardContent } from "@components/ui/card";
import { CheckCircle, Heart, Users, Palette, BookOpen } from "lucide-react";

const MettaCove = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black/25 bg-[url('/metta-cove.jpg')] bg-size-[350%] bg-position-[left_48%_top_58%] text-white bg-blend-overlay md:bg-cover md:bg-center">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              The Metta Cove
            </h1>
            <p className="text-xl opacity-95 md:text-2xl">
              Intensive Outpatient Program for Children & Teens (Ages 8-17)
            </p>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              A safe harbor for young hearts healing from abuse, loss, and
              family trauma.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Who The Metta Cove Serves
          </h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                The Metta Cove is our{" "}
                <strong>Intensive Outpatient Program (IOP)</strong> designed
                specifically for children and adolescents (ages 8-17) who have
                experienced:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Emotional, physical, or verbal abuse",
                  "Witnessing domestic violence",
                  "Parental narcissistic abuse or manipulation",
                  "Traumatic loss (death of parent/sibling)",
                  "Abandonment or neglect",
                  "Complex family trauma",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <CheckCircle className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                Designed for children and teens who:
              </h3>
              <ul className="space-y-3">
                {[
                  "Have experienced or witnessed abuse in their home",
                  "Are struggling with anxiety, depression, behavioral issues, or trauma symptoms",
                  "Need more support than traditional weekly therapy can provide",
                  "Are in stable housing (IOP is outpatient—families return home each day)",
                  "Are ready to begin healing with peers who understand their experiences",
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

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              How does Metta Cove does look like
            </h2> */}
            <div className="h-100 rounded-2xl bg-black/25 bg-[url('/metta-cove.jpg')] bg-cover bg-position-[left_48%_top_58%] md:bg-center"></div>

            {/* <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Small, Safe Groups
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Maximum 6 children per group
                  </p>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <p>Ages 8-11: Elementary/middle</p>
                    <p>Ages 12-14: Middle school</p>
                    <p>Ages 15-17: High school/teen</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Evidence-Based Care
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    TF-CBT, Play Therapy, Art Therapy, DBT Skills,
                    Attachment-Based Therapy
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Palette className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    9-15 Hours/Week
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive programming with expressive arts and play
                    therapy
                  </p>
                </CardContent>
              </Card>
            </div> */}

            {/* Programming Details */}
            {/* <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Group Therapy Sessions (Daily)
                  </h3>
                  <p className="text-muted-foreground">
                    {`
                    Process complex emotions in a supportive peer environment,
                    learn they're not alone, build connection with others who
                    "get it."
                  `}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Individual Counseling (2-3x/week)
                  </h3>
                  <p className="text-muted-foreground">
                    One-on-one sessions with clinical staff, address specific
                    trauma experiences privately, work on personal goals at
                    their own pace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Expressive Arts & Play Therapy
                  </h3>
                  <p className="text-muted-foreground">
                    {`
                    Art, music, movement, and play as healing tools. Safe ways
                    to express what words can't capture.
                  `}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Family Integration Sessions (Weekly)
                  </h3>
                  <p className="text-muted-foreground">
                    Joint sessions with parents/caregivers when appropriate.
                    Help families heal together, teach trauma-informed parenting
                    strategies.
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[linear-gradient(45deg,rgb(0,12,27)_60%,rgb(36,23,69)_100%)] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-primary-foreground mb-12 text-center text-3xl font-bold md:text-4xl">
              What Makes The Metta Cove Different
            </h2>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6 text-center">
                  <Users className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Small, Safe Groups
                  </h3>
                  <p className="text-[#e4e3e3] mb-3 text-sm">
                    Maximum 6 children per group
                  </p>
                  <div className="text-[#e4e3e3] space-y-1 text-xs">
                    <p>Ages 8-11: Elementary/middle</p>
                    <p>Ages 12-14: Middle school</p>
                    <p>Ages 15-17: High school/teen</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Evidence-Based Care
                  </h3>
                  <p className="text-[#e4e3e3] text-sm">
                    TF-CBT, Play Therapy, Art Therapy, DBT Skills,
                    Attachment-Based Therapy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6 text-center">
                  <Palette className="text-secondary mx-auto mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">
                    9-15 Hours/Week
                  </h3>
                  <p className="text-[#e4e3e3] text-sm">
                    Comprehensive programming with expressive arts and play
                    therapy
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Programming Details */}
            <div className="space-y-6">
              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Group Therapy Sessions (Daily)
                  </h3>
                  <p className="text-[#e4e3e3]">
                    {`
                    Process complex emotions in a supportive peer environment,
                    learn they're not alone, build connection with others who
                    "get it."
                  `}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Individual Counseling (2-3x/week)
                  </h3>
                  <p className="text-[#e4e3e3]">
                    One-on-one sessions with clinical staff, address specific
                    trauma experiences privately, work on personal goals at
                    their own pace.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Expressive Arts & Play Therapy
                  </h3>
                  <p className="text-[#e4e3e3]">
                    {`
                    Art, music, movement, and play as healing tools. Safe ways
                    to express what words can't capture.
                  `}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#1f548d] bg-[#112b47] text-white">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">
                    Family Integration Sessions (Weekly)
                  </h3>
                  <p className="text-[#e4e3e3]">
                    Joint sessions with parents/caregivers when appropriate.
                    Help families heal together, teach trauma-informed parenting
                    strategies.
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

          <Card className="bg-secondary/5 border-secondary/20 mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                {`
                We understand that children who've experienced abuse or
                witnessed harm to loved ones need more than traditional
                once-a-week therapy.
              `}
                <strong>
                  Trauma impacts kids daily—so healing support should be daily
                  too.
                </strong>
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold">We believe:</h3>
                <ul className="space-y-2">
                  {[
                    "Kids are never to blame for what happened to them",
                    "Healing happens in relationship with safe, trustworthy adults and peers",
                    "Every child deserves to feel safe, seen, and valued",
                    "Trauma symptoms are normal responses to abnormal experiences",
                    "Children are resilient when given the right support",
                  ].map((belief) => (
                    <li key={belief} className="flex items-start space-x-2">
                      <Heart className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground">{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule & Insurance */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              We accept Insurance
            </h2>

            {/* <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Program Hours: 9-15 hours per week
                </h3>
                <p className="text-muted-foreground mb-4">
                  Typically 3 hours/day, 3-5 days/week (after school)
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Monday:</strong> 3:30-6:30pm (after school)
                  </p>
                  <p>
                    <strong>Tuesday:</strong> 3:30-6:30pm
                  </p>
                  <p>
                    <strong>Wednesday:</strong> 3:30-6:30pm
                  </p>
                  <p>
                    <strong>Thursday:</strong> Individual session (scheduled
                    separately)
                  </p>
                  <p>
                    <strong>Friday:</strong> Family session (scheduled
                    separately)
                  </p>
                </div>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  Exact schedule determined during intake. Hybrid programming
                  available (some groups in-person, some virtual).
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
            Ready to Learn More?
          </h2>
          <p className="text-muted-foreground text-xl">
            {`Your child deserves to feel safe. We're here to help.`}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MettaCove;
