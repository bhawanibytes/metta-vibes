import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import {
  Heart,
  HeartPulse,
  ArrowRightIcon,
  Users,
  MessageCircle,
  Shield,
  Lightbulb,
  TrendingUp,
  Smile,
  AlertCircle,
  Brain,
  Activity,
  BookOpen,
  UserCheck,
} from "lucide-react";
import CTAButtons from "@components/CTAButtons";
import InsuranceCard from "@components/InsuranceCard";

const Grief = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <main className="grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              What the GRIEF?!
            </h1>
            <p className="text-primary-foreground/90 mb-4 text-xl md:text-2xl">
              Supporting Children Through Loss with Compassionate Care
            </p>
            <p className="text-primary-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed">
              {`Grief is not something to "get over"—it's something we learn to carry with support, understanding, and connection.`}
            </p>
          </div>
        </section>

        {/* Power of Peer Support Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                The Power of Peer Support: Benefits of Group Participation
              </h2>
              <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
                {/* When children experience loss, they often feel isolated and
                alone in their grief. The What the GRIEF?! program brings
                together young people who share the common experience of loss,
                creating a supportive community where healing can begin. */}
                {`When children experience loss, they often feel isolated. Our program brings together young people who share the experience of loss, creating a supportive community where healing can begin.`}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Connection & Understanding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* {`Children attending our grief support groups discover they are not alone in their experience. Being surrounded by peers who truly understand what they're going through helps break through the isolation that grief often brings. This connection with others who "get it" provides validation that their feelings are normal and shared by others their age.`} */}
                    {`Children discover they're not alone. Being surrounded by peers who understand helps break through isolation.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    A Safe Space for Expression
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Our groups provide a judgment-free environment where
                    children can openly express difficult emotions like sadness,
                    anger, confusion, or even guilt. Many grieving children
                    worry about upsetting their surviving family members, making
                    it hard to share their true feelings at home. In group, they
                    find a safe place to be honest about their grief without
                    fear of burdening others. */}
                    {`A judgment-free environment to openly express difficult emotions without fear of burdening others.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Developing Language for Grief
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Children often lack the vocabulary to describe their complex
                    grief experiences. Through facilitated discussions and
                    activities, participants learn age-appropriate ways to name
                    and express their feelings. This emotional literacy becomes
                    a lifelong tool for processing difficult experiences and
                    communicating their needs. */}
                    {`Learn age-appropriate ways to name and express feelings—a lifelong tool for processing difficult experiences.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Learning Healthy Coping Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Group members share coping techniques and learn new
                    strategies from both facilitators and peers. Seeing how
                    other children manage their grief provides practical
                    examples and normalizes the variety of ways people grieve.
                    Children discover healthy outlets for their emotions and
                    build a toolkit of coping skills they can use long after the
                    program ends. */}
                    {`Share techniques and learn strategies from facilitators and peers for managing grief effectively.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    {" "}
                    Normalizing the Grief Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* {`
                     Every child grieves differently, and there's no "right way" to feel. In group, children witness the many faces of grief and learn that their unique experience is valid. Whether they feel sad one moment and happy the next, or experience grief in waves rather than constantly, they see that all of these responses are normal parts of the healing process.
                    `} */}
                    {`Witness the many faces of grief and learn that every unique experience is valid—there's no "right way" to feel.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Building Resilience and Hope
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Connecting with peers at different stages of their grief
                    journey allows children to see that healing is possible.
                    Those further along in their process serve as living proof
                    that life can feel better over time, providing hope to those
                    more recently bereaved. This peer modeling builds resilience
                    and confidence in their ability to navigate their loss. */}
                    {`See peers further along their journey, providing living proof that healing is possible and life can feel better.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Reducing Behavioral and Emotional Difficulties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Research shows that children who receive grief support,
                    particularly in peer group settings, experience fewer
                    behavioral problems, improved emotional regulation, and
                    better overall adjustment following loss. Early intervention
                    through group support can prevent more serious mental health
                    challenges down the road. */}
                    {`Research shows peer group support leads to fewer behavioral problems and better emotional regulation.`}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 shadow-soft border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="from-primary to-primary-light mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                    <Smile className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    Creating Lasting Bonds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* The friendships formed in grief groups often extend beyond
                    the program itself. Children develop meaningful connections
                    with others who understand their experience in a unique way,
                    creating a support network they can turn to long after group
                    sessions end. */}
                    {`Friendships formed often extend beyond the program, creating a support network for years to come.`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="bg-[linear-gradient(45deg,rgb(0,12,27)_60%,rgb(36,23,69)_100%)] px-4 py-16">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              {/* <AlertCircle className="text-primary mx-auto mb-4 h-12 w-12" /> */}
              <h2 className="mb-4 text-3xl text-white font-bold md:text-4xl">
                Recognizing When a Child Needs Support: Warning Signs of
                Grief-Related Struggles
              </h2>
              <p className="text-[#e4e3e3] mx-auto max-w-3xl text-lg">
                Children express grief differently than adults, and their grief
                often comes in waves rather than following a linear path. While
                grief itself is a natural response to loss, certain signs may
                indicate a child is struggling and would benefit from additional
                support.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="emotional"
                className="text-white bg-[#112b47] border-[#1f548d]  shadow-soft rounded-lg border px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Brain className="text-primary h-5 w-5" />
                    <span className="text-lg font-semibold">
                      Emotional & Behavioral Changes
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 pb-6 md:grid md:grid-cols-2">
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Persistent or Intense Sadness
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>{`• Frequent crying or expressions of hopelessness`}</li>
                      <li>{`• Verbalizing "I'll never be happy again" or "nothing matters anymore"`}</li>
                      <li>{`• Inability to find joy in previously enjoyed activities`}</li>
                      <li>{`• Flat affect or appearing emotionally "shut down"`}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Heightened Anxiety or Fear
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Excessive worry about the safety of other loved ones
                      </li>
                      <li>• Clinging behaviors or separation anxiety</li>
                      <li>• Fear of being alone or sleeping alone</li>
                      <li>
                        • Panic attacks or intense physical reactions to
                        reminders of loss
                      </li>
                      <li>
                        • Excessive worry about their own health or mortality
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Anger and Irritability
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Frequent outbursts toward family members, peers, or
                        teachers
                      </li>
                      <li>• Difficulty controlling temper</li>
                      <li>• Destroying property or acting out physically</li>
                      <li>• Blaming themselves or others for the death</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Withdrawal and Isolation
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Pulling away from friends, family, or social
                        activities
                      </li>
                      <li>• Spending excessive time alone</li>
                      <li>
                        • Refusing to participate in once-enjoyed activities
                      </li>
                      <li>
                        • Avoiding places or people that remind them of their
                        loss
                      </li>
                      <li>• Loss of interest in hobbies or interests</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="physical"
                className="bg-[#112b47] border-[#1f548d] text-white shadow-soft rounded-lg border px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Activity className="text-primary h-5 w-5" />
                    <span className="text-lg font-semibold">
                      Physical Manifestations
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 pb-6 md:grid md:grid-cols-2">
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Sleep Disturbances
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Difficulty falling or staying asleep</li>
                      <li>• Nightmares or night terrors</li>
                      <li>• Sleeping significantly more or less than usual</li>
                      <li>• Resistance to bedtime routines</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Changes in Eating Patterns
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Significant increase or decrease in appetite</li>
                      <li>• Rapid weight loss or gain</li>
                      <li>• Complaints of nausea or stomach problems</li>
                      <li>• Using food for emotional comfort or control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Physical Complaints
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Frequent headaches or stomachaches without medical
                        cause
                      </li>
                      <li>• Fatigue or low energy</li>
                      <li>• General aches and pains</li>
                      <li>
                        • Regression to bedwetting or other younger behaviors
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="cognitive"
                className="bg-[#112b47] border-[#1f548d] text-white shadow-soft rounded-lg border px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-primary h-5 w-5" />
                    <span className="text-lg font-semibold">
                      Cognitive & Academic Indicators
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 pb-6 md:grid md:grid-cols-2">
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Difficulty Concentrating
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Inability to focus on schoolwork or conversations
                      </li>
                      <li>{`• Appearing distracted or "spaced out"`}</li>
                      <li>• Decline in grades or academic performance</li>
                      <li>• Trouble remembering things or completing tasks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Confusion About the Loss
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Asking repetitive questions about the death</li>
                      <li>
                        • Difficulty understanding the permanence of death
                      </li>
                      <li>• Magical thinking about bringing the person back</li>
                      <li>• Confusion about what caused the death</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="social"
                className="bg-[#112b47] border-[#1f548d] text-white shadow-soft rounded-lg border px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <UserCheck className="text-primary h-5 w-5" />
                    <span className="text-lg font-semibold">
                      Social & Developmental Concerns
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 pb-6 md:grid md:grid-cols-2">
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Regression to Earlier Stages
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Baby talk or clingy behavior in older children</li>
                      <li>
                        • Return to outgrown behaviors (thumb-sucking, security
                        objects)
                      </li>
                      <li>• Loss of previously acquired skills</li>
                      <li>• Increased dependence on caregivers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Risk-Taking Behaviors
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Reckless behavior or disregard for safety</li>
                      <li>• Substance experimentation or use</li>
                      <li>• Self-harm or talking about self-harm</li>
                      <li>• Running away or making threats to run away</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-medium">
                      Changes in Peer Relationships
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Conflict with friends or difficulty maintaining
                        friendships
                      </li>
                      <li>• Bullying others or being bullied</li>
                      <li>• Seeking out peers engaged in risky behaviors</li>
                      <li>{`• Difficulty relating to peers who haven't experienced loss`}</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="critical"
                className="bg-destructive/30 border-[#1f548d] rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-destructive h-5 w-5" />
                    <span className="text-destructive text-lg font-semibold">
                      Critical Signs Requiring Immediate Attention
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 pb-6 md:grid md:grid-cols-2">
                  <div>
                    <h4 className="text-destructive mb-2 font-medium">
                      Thoughts of Death or Suicide
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>
                        • Expressing wishes to die or be with the deceased
                      </li>
                      <li>• Talking about suicide or making a plan</li>
                      <li>• Giving away prized possessions</li>
                      <li>
                        • Saying goodbye to people or expressing feelings of
                        being a burden
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-destructive mb-2 font-medium">
                      Prolonged or Complicated Grief
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>{`• Intense grief that doesn't diminish over time (6+ months)`}</li>
                      <li>• Inability to accept the reality of the loss</li>
                      <li>• Persistent feelings of numbness or detachment</li>
                      <li>
                        • Intense preoccupation with circumstances of the death
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-destructive mb-2 font-medium">
                      Significant Decline in Functioning
                    </h4>
                    <ul className="text-[#e4e3e3] ml-4 space-y-1 text-sm">
                      <li>• Unable to perform daily activities or self-care</li>
                      <li>• Complete withdrawal from all social connections</li>
                      <li>
                        • Failing multiple classes or refusing to attend school
                      </li>
                      <li>
                        • Inability to experience positive emotions for extended
                        periods
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* When to Seek Support Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-4xl">
            <Card className="shadow-glow border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl md:text-3xl">
                  When to Seek Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 mb-6 text-center leading-relaxed">
                  While grief is a natural response to loss, children benefit
                  greatly from structured support, especially when:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      The loss was sudden, traumatic, or violent
                    </span>
                  </div>
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      Multiple losses have occurred in a short time
                    </span>
                  </div>
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      The child has limited support at home or school
                    </span>
                  </div>
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      Warning signs persist for several weeks without
                      improvement
                    </span>
                  </div>
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      The child expresses interest in talking to someone outside
                      the family
                    </span>
                  </div>
                  <div className="bg-primary/5 flex items-start gap-3 rounded-lg p-4">
                    <ArrowRightIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-foreground/80 text-sm">{`Family members are concerned about the child's wellbeing`}</span>
                  </div>
                </div>

                <div className="from-primary/10 to-primary-light/10 border-primary/20 mt-8 rounded-xl border bg-linear-to-br p-6">
                  <p className="text-foreground/90 text-center leading-relaxed font-medium">
                    The What the GRIEF?! program provides compassionate,
                    developmentally appropriate support to help children
                    navigate their grief journey with understanding, connection,
                    and hope.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Insurance & Contact */}
        <section className="bg-muted/30 pt-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Insurance & How to Enroll
              </h2>
              <InsuranceCard />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="from-background to-primary/5 bg-linear-to-b px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-8">
              <HeartPulse className="text-primary mx-auto h-16 w-16" />
              <h2 className="text-3xl font-bold md:text-4xl">
                Contact Metta Vibes
              </h2>
              <p className="text-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed">
                For more information about the What the GRIEF?! program or to
                discuss whether group support would benefit your child, please
                reach out to our compassionate team.
              </p>
              <p className="text-primary text-xl font-medium">
                {`
                Remember: Grief is not something to "get over"—it's something we learn to carry with support, understanding, and connection.
              `}
              </p>
              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                <CTAButtons />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Grief;
