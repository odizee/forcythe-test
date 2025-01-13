import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import StoryCard from "./StoryCard";

const TransformativeStories = () => {
  return (
    <section className="py-20 bg-[#0A0A2A]/50 mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
          Discover the{" "}
          <span className="text-blue-400">transformative stories</span> of
          <br />
          startups that scaled new heights with us
        </h2>
        <Tabs defaultValue="starks" className="">
          <div className="grid">
            <div>
              <div className="">
                <div>
                  <TabsList className="grid h-max mb-6 gap-1 bg-transparent w-full border-[1px] border-[#06438C] rounded-full grid-cols-5 lg:min-w-[750px] overflow-hidden p-0">
                    <TabsTrigger
                      value="starks"
                      className="overflow-hidden rounded-none text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#0c2645] h-full w-full"
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <img
                          src="https://forcythe.com/images/starks.svg"
                          alt=""
                        />
                        Starks
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="pro"
                      className="overflow-hidden rounded-none text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#0c2645] h-full w-full"
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <img
                          src="https://forcythe.com/images/ExecutivePros Logo.svg"
                          alt=""
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="stac"
                      className="overflow-hidden rounded-none text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#0c2645] w-full h-full"
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <img
                          src="https://forcythe.com/images/stacai.svg"
                          alt=""
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="iwaria"
                      className="overflow-hidden rounded-none text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#0c2645] h-full w-full"
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <img
                          src="https://forcythe.com/images/iwaria.svg"
                          alt=""
                          className="w-20"
                        />
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="Beaupreneur"
                      className="overflow-hidden rounded-none text-center text-base font-medium cursor-pointer transition-all duration-300 data-[state=active]:bg-[#0c2645] w-full p-[1.1rem] h-full"
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <img
                          src="https://forcythe.com/images/Beaupreneur.svg"
                          alt=""
                        />
                      </div>
                    </TabsTrigger>
                  </TabsList>
                  <div>
                    <TabsContent value="starks">
                      <StoryCard
                        title="Starks"
                        desc="Partnering with Forcythe was like finding a hidden gem. Their genuine
        interest in our success was palpable, and the continuous support
        post-launch has been a testament to their commitment. They’ve become
        more than a service provider; they’re a trusted ally."
                        name="John, Management"
                        image="https://forcythe.com/images/john.svg"
                      />
                    </TabsContent>
                    <TabsContent value="pro" className="relative lg:left-24">
                      <StoryCard
                        title="ExecutivePros"
                        desc="The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!"
                        name="Testimony, Co-founder"
                        image="https://forcythe.com/images/executive-pro-ceo.svg"
                      />
                    </TabsContent>
                    <TabsContent value="stac" className="relative lg:left-52">
                      <StoryCard
                        title="Stac AI"
                        desc="Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."
                        name="Edwin, Former CTO"
                        image="https://forcythe.com/images/edwin.svg"
                      />
                    </TabsContent>
                    <TabsContent value="iwaria" className="relative lg:left-96">
                      <StoryCard
                        title="Iwaria"
                        desc="The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before."
                        name="Iwaria, Founder"
                        image="https://forcythe.com/images/iwaria-founder.svg"
                      />
                    </TabsContent>
                    <TabsContent
                      value="Beaupreneur"
                      className="relative lg:left-[32rem]"
                    >
                      <StoryCard
                        title="Beaupreneur"
                        desc="I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts."
                        name="Christiana, Founder"
                        image="https://forcythe.com/images/christina.svg"
                      />
                    </TabsContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TransformativeStories;
