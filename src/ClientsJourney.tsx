import { InfiniteSlider } from "./components/InfiniteSlider";

const ClientsJourney = () => {
  const clientLogos = [
    {
      src: "https://forcythe.com/images/Project%20Images/stac.svg",
      name: "Stac",
    },
    {
      src: "https://forcythe.com/images/Project%20Images/activity.svg",
      name: "Activity",
    },
    {
      src: "https://forcythe.com/images/Project%20Images/africaFund.svg",
      name: "Africa Fund",
    },
    {
      src: "https://forcythe.com/images/Project%20Images/starks.svg",
      name: "Starks",
    },
    {
      src: "https://forcythe.com/images/Project%20Images/exec-pro.svg",
      name: "Exec Pro",
    },
    {
      src: "https://forcythe.com/images/Project%20Images/phone.svg",
      name: "Phone",
    },
  ];

  return (
    <section className="mt-10" aria-labelledby="clients-journey-title">
      <div className="mx-auto px-4">
        <h2
          id="clients-journey-title"
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-8 max-w-[90%] mx-auto text-center"
        >
          Success in <span className="text-blue-400">Motion</span> - Our
          clients' journey
        </h2>

        {/* First Slider */}
        <div
          role="region"
          aria-label="Client logos slider - top row"
          className="relative"
        >
          <InfiniteSlider
            gap={24}
            reverse
            aria-live="off"
            className="focus-within:outline focus-within:outline-2 focus-within:outline-blue-400"
          >
            {clientLogos.map((logo, index) => (
              <img
                key={`top-${index}`}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="client-logo"
                loading="lazy"
                width="150"
                height="50"
              />
            ))}
          </InfiniteSlider>

          <div className="sr-only">
            This is an auto-scrolling carousel of client logos moving from right
            to left. Press Tab to focus on individual logos.
          </div>
        </div>

        {/* Second Slider */}
        <div
          role="region"
          aria-label="Client logos slider - bottom row"
          className="relative"
        >
          <InfiniteSlider
            gap={24}
            aria-live="off"
            className="focus-within:outline focus-within:outline-2 focus-within:outline-blue-400"
          >
            {clientLogos.map((logo, index) => (
              <img
                key={`bottom-${index}`}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="client-logo"
                loading="lazy"
                width="150"
                height="50"
              />
            ))}
          </InfiniteSlider>

          <div className="sr-only">
            This is an auto-scrolling carousel of client logos moving from left
            to right. Press Tab to focus on individual logos.
          </div>
        </div>
      </div>

      {/* Add pause/resume functionality for users who prefer reduced motion */}
      <div className="sr-only">
        Press Space to pause or resume the auto-scrolling animation.
      </div>
    </section>
  );
};

export default ClientsJourney;
