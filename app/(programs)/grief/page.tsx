import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import { Phone, Heart, Users, User } from "lucide-react";

const Grief = () => {
  return (
    <div className="bg-gradient-calm min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="from-accent to-primary relative overflow-hidden bg-linear-to-br text-white">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              What the GRIEF?!
            </h1>
            <p className="text-xl opacity-95 md:text-2xl">
              Grief Support Programming
            </p>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Navigate the complex journey of loss with compassionate guidance.
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

          <Card>
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                <strong>What the GRIEF?!</strong> is specialized support for
                individuals and families processing:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Death of a loved one (sudden or expected)",
                  "Complicated grief (feeling 'stuck')",
                  "Traumatic loss (suicide, homicide, accident)",
                  "Anticipatory grief (terminal illness)",
                  "Ambiguous loss (missing persons, estrangement)",
                  "Disenfranchised grief (miscarriage, pet loss)",
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <Heart className="text-accent mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Options */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Program Options
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <User className="text-accent mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 1: Individual Grief Therapy
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        One-on-one sessions with clinical staff trained in grief
                        and bereavement, under licensed clinical supervision.
                      </p>
                      <p className="text-muted-foreground mb-2 text-sm">
                        <strong>Best for:</strong>
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                        <li>• Private processing of loss</li>
                        <li>• Complicated grief requiring intensive support</li>
                        <li>• Those not ready for group settings</li>
                      </ul>
                      <p className="text-muted-foreground mt-3 text-sm">
                        <strong>Format:</strong> 50-minute sessions (frequency
                        based on individual needs)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Users className="text-accent mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 2: Grief Support Groups
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Facilitated peer support groups for adults or
                        children/teens processing loss.
                      </p>

                      <div className="mb-4">
                        <p className="mb-2 font-medium">Adult Grief Groups:</p>
                        <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                          <li>• General Bereavement Group</li>
                          <li>• Loss of Spouse/Partner Group</li>
                          <li>• Loss of Child Group</li>
                          <li>• Suicide Loss Survivors Group</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="mb-2 font-medium">Youth Grief Groups:</p>
                        <ul className="text-muted-foreground ml-4 space-y-1 text-sm">
                          <li>
                            • Ages 8-12: Loss of parent, sibling, or caregiver
                          </li>
                          <li>• Ages 13-17: Teen grief support</li>
                        </ul>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        <strong>Format:</strong> 90-minute groups, 8-12 week
                        cycles (rolling enrollment available)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="text-accent mt-1 h-8 w-8 shrink-0" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Option 3: Grief Integrated into IOP
                      </h3>
                      <p className="text-muted-foreground">
                        For clients in The Kindred Path or The Metta Cove who
                        are also processing significant loss, grief work is
                        woven into IOP treatment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            What We Provide
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Compassionate Care
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>{`• Validate all types of grief (no loss is "too small")`}</li>
                  <li>• Honor your unique grieving process</li>
                  <li>• Create safety to feel all emotions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Evidence-Based Therapy
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Complicated Grief Treatment (CGT)</li>
                  <li>• Meaning Reconstruction</li>
                  <li>• Narrative Therapy</li>
                  <li>• EMDR for Traumatic Grief</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <h3 className="mb-3 text-lg font-semibold">
                  Practical Support
                </h3>
                <ul className="text-muted-foreground grid gap-2 text-sm sm:grid-cols-2">
                  <li>• Navigating holidays and anniversaries</li>
                  <li>• Managing grief while parenting/working</li>
                  <li>• Understanding physical symptoms</li>
                  <li>• Knowing when professional support is needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Insurance Accepted
                </h3>
                <div className="mb-4 flex flex-wrap gap-3">
                  {[
                    "Medicaid",
                    "Blue Cross Blue Shield",
                    "Aetna",
                    "AIHP",
                    "Cigna",
                  ].map((ins) => (
                    <span
                      key={ins}
                      className="bg-accent/10 text-accent rounded-full px-3 py-1 text-sm"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Individual therapy and groups typically covered by insurance.
                  We handle all billing and claims.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {"You Don't Have to Grieve Alone"}
          </h2>
          <p className="text-muted-foreground text-xl">
            {
              " We'll discuss your loss, your needs, and which grief support option is the best fit."
            }
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
      </section>

      <Footer />
    </div>
  );
};

export default Grief;
