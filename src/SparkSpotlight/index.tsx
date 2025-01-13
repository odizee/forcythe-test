import Button from "../components/Button";
import { TextEffect } from "../components/TextEffect";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const SparkSpotlight = () => {
  const stages = [
    {
      id: "Idea",
      title: "Your vision is unique.",
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's us shape it.",
      image: "https://forcythe.com/images/camera-man.svg",
      imageAlt: "Illustration of ideation and vision planning process",
    },
    {
      id: "Design",
      title: "Crafting the blueprint for success",
      description:
        "Design is more than aesthetics, it's about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      image: "https://forcythe.com/images/plan-design.svg",
      imageAlt: "Illustration of design planning and user experience process",
    },
    {
      id: "Develop",
      title: "Turning blueprints into reality.",
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
      image: "https://forcythe.com/images/plan-develop.svg",
      imageAlt: "Illustration of development and implementation process",
    },
    {
      id: "Launch",
      title: "Your launchpad to the market.",
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
      image: "https://forcythe.com/images/plan-launch.svg",
      imageAlt: "Illustration of product launch and market entry process",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4"
      aria-labelledby="spotlight-heading"
    >
      <Tabs
        defaultValue="Idea"
        className=""
        orientation="horizontal"
        aria-label="Development process stages"
      >
        <div className="grid md:grid-cols-2 items-center gap-x-2">
          <div>
            <div className="mb-12 xl:mb-0 max-w-[45rem]">
              <h2
                id="spotlight-heading"
                className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12"
              >
                From <span className="text-blue-400">Spark </span> to{" "}
                <span className="text-blue-400">Spotlight:</span> we take you
                every step of the way to success.
              </h2>
            </div>

            <div>
              <TabsList
                className="grid h-max border-2 border-[#B3DDF2] mb-12 rounded-full gap-1 grid-cols-4 p-3 bg-transparent"
                aria-label="Select development stage"
              >
                {stages.map((stage) => (
                  <TabsTrigger
                    key={stage.id}
                    value={stage.id}
                    className="overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#B3DDF2] text-white data-[state=active]:text-black"
                    aria-label={`View ${stage.id} stage details`}
                  >
                    {stage.id}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div>
                {stages.map((stage) => (
                  <TabsContent
                    key={stage.id}
                    value={stage.id}
                    role="tabpanel"
                    aria-labelledby={`${stage.id}-tab`}
                  >
                    <h3
                      className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12 text-white"
                      aria-live="polite"
                    >
                      <TextEffect
                        per="char"
                        preset="fade"
                        delay={0}
                        speedSegment={0.5}
                      >
                        {stage.title}
                      </TextEffect>
                    </h3>

                    <p
                      className="text-gray-400 text-base md:text-lg mb-8 leading-7"
                      aria-live="polite"
                    >
                      <TextEffect
                        per="char"
                        preset="fade"
                        delay={1}
                        className="max-w-3xl text-gray-400 text-base md:text-lg mb-8 leading-7"
                      >
                        {stage.description}
                      </TextEffect>
                    </p>

                    <Button
                      showIcon
                      aria-label={`Learn more about our ${stage.id.toLowerCase()} stage`}
                    />
                  </TabsContent>
                ))}
              </div>
            </div>
          </div>

          <div>
            {stages.map((stage) => (
              <TabsContent
                key={stage.id}
                value={stage.id}
                role="tabpanel"
                aria-labelledby={`${stage.id}-image-tab`}
              >
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                  loading="lazy"
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SparkSpotlight;
