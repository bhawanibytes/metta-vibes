import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Users, Heart, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { googleFormLink } from "@app/constants";

export default function page() {
  return (
    <>
      <section className="from-primary to-primary relative overflow-hidden bg-linear-to-br text-white">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Counseling Services at Metta Vibes
            </h1>
            {/* <p className="text-xl opacity-95 md:text-2xl">
              Family Skills Training
            </p> */}
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Compassionate, Evidence-Based Therapy for Children, Teens, and
              Families
            </p>
            {/* <p className="text-primary-foreground/80 mx-auto max-w-3xl text-lg leading-relaxed">
                At Metta Vibes, we provide individualized counseling services
                tailored to meet the unique needs of each child, adolescent, and
                family. Our trauma-informed approach integrates proven
                therapeutic modalities to help clients build resilience, develop
                healthy coping skills, and create lasting positive change.
              </p> */}
          </div>
        </div>
      </section>
      <div className="bg-background flex min-h-screen flex-col">
        {/* <Helmet>
        <title>Counseling Services - Evidence-Based Therapy | Metta Vibes</title>
        <meta name="description" content="Compassionate, evidence-based counseling for children, teens, and families. Trauma-informed therapy using CBT, DBT, TF-CBT, and ACT approaches." />
      </Helmet> */}

        {/* <Navigation /> */}

        <main className="grow">
          {/* Hero Section */}
          {/* <section className="from-primary/5 to-background bg-linear-to-b px-4 py-20">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="from-primary to-primary-light mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
                Counseling Services at Metta Vibes
              </h1>
              <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
                Compassionate, Evidence-Based Therapy for Children, Teens, and
                Families
              </p>
              <p className="text-foreground/80 mx-auto max-w-3xl text-lg leading-relaxed">
                At Metta Vibes, we provide individualized counseling services
                tailored to meet the unique needs of each child, adolescent, and
                family. Our trauma-informed approach integrates proven
                therapeutic modalities to help clients build resilience, develop
                healthy coping skills, and create lasting positive change.
              </p>
            </div>
          </section> */}

          {/* Our Approach Section */}
          <section className="px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                Our Approach
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <div className="from-primary to-primary-light mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Individualized Treatment Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {`
                      Every client's journey is unique. We begin with a
                      comprehensive assessment to understand your specific
                      challenges, strengths, and goals. From there, we develop a
                      personalized treatment plan that may incorporate multiple
                      `}
                      therapeutic approaches to best support your needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <div className="from-primary to-primary-light mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Family-Centered Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We recognize that healing happens within the context of
                      relationships. Our counseling services include family
                      therapy sessions to strengthen communication, resolve
                      conflicts, and build supportive family dynamics. We work
                      collaboratively with parents and caregivers to ensure
                      consistency and support between sessions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Treatment Modalities Section */}
          <section className="bg-muted/30 px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Evidence-Based Treatment Modalities
              </h2>

              <div className="mt-12 space-y-8">
                {/* CBT */}
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Cognitive Behavioral Therapy (CBT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      CBT helps clients identify and change unhelpful thought
                      patterns and behaviors that contribute to emotional
                      distress. Through structured, goal-oriented sessions,
                      clients learn to:
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Recognize the connection between thoughts, feelings,
                          and behaviors
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Challenge and reframe negative thinking patterns
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Develop practical coping strategies for managing
                          anxiety, depression, and stress
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Build problem-solving skills for real-world challenges
                        </span>
                      </li>
                    </ul>
                    <p className="text-primary pt-2 text-sm font-medium">
                      <strong>Best for:</strong> Anxiety, depression, phobias,
                      obsessive-compulsive symptoms, behavioral issues, and
                      stress management.
                    </p>
                  </CardContent>
                </Card>

                {/* DBT */}
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Dialectical Behavior Therapy (DBT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      DBT combines cognitive-behavioral techniques with
                      mindfulness practices to help clients regulate intense
                      emotions and improve relationships. Our DBT-informed
                      counseling focuses on four core skill areas:
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          <strong>Mindfulness:</strong> Staying present and
                          aware without judgment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          <strong>Distress Tolerance:</strong> Managing crises
                          without making things worse
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          <strong>Emotion Regulation:</strong> Understanding and
                          managing intense feelings
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          <strong>Interpersonal Effectiveness:</strong>{" "}
                          Communicating needs and setting healthy boundaries
                        </span>
                      </li>
                    </ul>
                    <p className="text-primary pt-2 text-sm font-medium">
                      <strong>Best for:</strong> Emotional dysregulation,
                      self-harm behaviors, impulsivity, relationship
                      difficulties, and intense mood swings.
                    </p>
                  </CardContent>
                </Card>

                {/* TF-CBT */}
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Trauma-Focused Therapy (TF-CBT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Trauma-Focused Cognitive Behavioral Therapy is an
                      evidence-based treatment specifically designed for
                      children and adolescents who have experienced trauma. This
                      approach helps clients:
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Process traumatic experiences in a safe, supportive
                          environment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Reduce trauma-related symptoms such as nightmares,
                          flashbacks, and avoidance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Develop healthy coping skills for managing trauma
                          triggers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Rebuild a sense of safety and trust
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Strengthen family communication around difficult
                          experiences
                        </span>
                      </li>
                    </ul>
                    <p className="text-primary pt-2 text-sm font-medium">
                      <strong>Best for:</strong> Post-traumatic stress, abuse or
                      neglect history, grief and loss, witnessed violence, and
                      complex trauma.
                    </p>
                  </CardContent>
                </Card>

                {/* ACT */}
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Acceptance and Commitment Therapy (ACT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      ACT helps clients develop psychological flexibility by
                      accepting what is outside their control while committing
                      to actions that align with their values. Through ACT,
                      clients learn to:
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Accept difficult thoughts and feelings without being
                          controlled by them
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Stay present and engaged in the moment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Clarify personal values and what truly matters
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Take committed action toward meaningful goals
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground/80">
                          Build resilience through values-based living
                        </span>
                      </li>
                    </ul>
                    <p className="text-primary pt-2 text-sm font-medium">
                      <strong>Best for:</strong> Chronic stress, anxiety,
                      depression, perfectionism, avoidance behaviors, and life
                      transitions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Who We Serve Section */}
          <section className="px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                Who We Serve
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle>Children (Ages 8-12)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Individual and family counseling for behavioral concerns,
                      anxiety, depression, trauma, grief, social difficulties,
                      and emotional regulation challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle>Adolescents (Ages 13-17)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Teen-focused therapy addressing identity development, peer
                      relationships, family conflict, school stress, trauma,
                      mood disorders, and life transitions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle>Young Adults (Ages 18-25)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Support for launching into independence, managing mental
                      health, navigating relationships, academic or career
                      challenges, and building life skills.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle>Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Family therapy to improve communication, resolve
                      conflicts, strengthen relationships, and support healing
                      from shared challenges or trauma.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="bg-muted/30 px-4 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                What to Expect
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Initial Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Your first session involves a comprehensive evaluation
                      where we learn about your concerns, history, strengths,
                      and goals. This collaborative process helps us develop the
                      right treatment approach for you.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Individualized Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Sessions typically occur weekly and last 45-60 minutes.
                      Your therapist will work with you to set specific,
                      measurable goals and track progress over time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Family Involvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We encourage family participation through regular family
                      sessions, parent consultations, and skills coaching to
                      ensure everyone is working together toward positive
                      change.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Ongoing Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      As you progress, we adjust your treatment plan to reflect
                      your growth and evolving needs. Our goal is to equip you
                      with the tools and confidence to maintain wellness long
                      after therapy ends.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 py-20">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="from-primary/10 to-primary-light/10 border-primary/20 rounded-2xl border bg-linear-to-br p-12">
                <Heart className="text-primary mx-auto mb-6 h-16 w-16" />
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Getting Started
                </h2>
                <p className="text-foreground/80 mb-4 text-lg leading-relaxed">
                  Taking the first step toward healing requires courage. Our
                  compassionate team is here to support you and your family
                  through every stage of your journey.
                </p>
                <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                  Contact Metta Vibes today to schedule an initial consultation
                  and learn more about how our counseling services can help you
                  build the life you want to live.
                </p>
                <Link href={`${googleFormLink}`}>
                  <Button size="lg" className="shadow-soft">
                    Schedule a Consultation
                  </Button>
                </Link>
                {/* <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer shadow-soft text-lg"
                  >
                    Request Consultation
                  </Button> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
