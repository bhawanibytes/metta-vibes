import Image from "next/image";
import MettaHelpImage from "@/public/metta-vibes-is-here-to-help.jpg";

export default function page() {
  return (
    <div className="flex overflow-x-hidden flex-col">
      <main className="flex-1">
        {/* <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <h1 className="from-primary to-primary-light mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              About Us
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6 text-lg">
                Welcome to Metta Vibes - your partner in mental health and
                wellness.
              </p>
              <p className="text-foreground/70 mb-4">Content coming soon...</p>
            </div>
          </div>
        </section> */}
        <section className="font-jakarta mx-5 mt-10 flex flex-col-reverse gap-10 text-base text-black/85 md:flex-row">
          <div className="h-full text-justify md:ml-15 md:w-[50%]">
            <h1 className="hidden pb-10 text-5xl font-bold text-black md:block">
              Our Story & Commitment
            </h1>
            <div className="my-5">
              <h6 className="font-bold">
                Building Resilient Children and Families{" "}
              </h6>
              <p>
                <span className="font-bold">Metta Vibes</span> is Arizona’s
                dedicated Behavioral Health and Wellness program, specializing
                in{" "}
                <span className="font-bold">
                  building resilient children and families{" "}
                </span>{" "}
                by focusing on emotional strength and well-being for children,
                teens, and their entire{" "}
                <span className="font-bold">support system</span>.
              </p>
            </div>
            <div className="my-5 font-bold">
              <h6 className="font-bold">Our Mission</h6>
              <p>
                Mission: “Metta Vibes provides compassionate care rooted in
                loving- kindness—healing hearts, inspiring healthy habits, and
                uplifting children and families toward greater wellness and
                joy.”
              </p>
            </div>
            <div className="my-5">
              <h6 className="font-bold">
                How We Started: A Commitment Forged in Resilience
              </h6>
              <p className="mb-4">
                The story of <span className="font-bold">Metta Vibes</span> is
                not just a business origin—it is a deeply personal testament to{" "}
                <span className="font-bold">resilience</span>. Our foundation
                was birthed from our founder’s own heartbreaking,{" "}
                <span className="font-bold">traumatic loss of a child</span>.
                This shattering event defined the meaning of resilience,
                revealing that the path forward requires more than just
                survival—it demands
                <span className="font-bold"> transformation</span>.
              </p>
              <p>
                In the depths of grief, the founder made a powerful commitment:
                to turn that profound pain into a force for good.{" "}
                <span className="font-bold">Metta Vibes</span> is a living
                expression of{" "}
                <span className="font-bold">“bouncing forward”</span>, proving
                that even the most profound adversity can be the catalyst for a
                mission rooted in compassion and dedicated service.
              </p>
            </div>
            <div className="my-5">
              <h6 className="font-bold">Our Foundation</h6>
              <p>
                With{" "}
                <span className="font-bold">over 20 years of experience</span>,
                we firmly believe that behavioral health is the foundation for a
                healthy life. We embrace a{" "}
                <span className="font-bold">
                  holistic approach to wellness, focusing on the essential
                  connection between mind, body, and spirituality
                </span>
                .
              </p>
            </div>
            <div className="my-5">
              <h6 className="font-bold">Our Expert Team and Environment</h6>
              <p className="mb-5">
                Our commitment to your family’s growth is upheld by our expert
                staff, composed of l
                <span className="font-bold">
                  licensed behavioral health professionals
                </span>
                , including medical professionals, certified peer support
                specialists, and behavioral health technicians. This
                comprehensive structure ensures you receive integrated,
                high-quality care.
              </p>
              <p className="my-5">
                Above all else, we cultivate an environment that is{" "}
                <span className="font-bold">warm, safe, and relaxed</span>. We
                are dedicated to making every session{" "}
                <span className="font-bold">
                  inviting, engaging, and highly interactive
                </span>
                , ensuring that all children, teens, and{" "}
                <span className="font-bold">caregivers</span> feel comfortable
                opening up and participating fully.
              </p>
              <p>
                We aim for you to not just survive a crisis, but emerge from it
                stronger, a concept often referred to as{" "}
                <span className="font-bold">“bouncing forward.”</span>
              </p>
            </div>
          </div>
          <div className="flex h-full md:h-270 md:w-[48%]">
            <Image
              src={MettaHelpImage}
              // width={1200}
              // height={1200}
              // layout=""
              // layout="fill"
              // objectFit="cover"
              className="h-full md:pb-5 w-full flex-1 rounded-t-full"
              alt="Metta Vibes is here to help"
              // fill
            />
          </div>
          <h1 className="pb-10 w-full text-wrap text-5xl font-bold text-black md:hidden ">
            Our Story & Commitment
          </h1>
        </section>
      </main>
    </div>
  );
}
