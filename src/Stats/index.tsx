import NumberTicker from "../components/ui/number-ticker";

const Stats = () => {
  return (
    <div className="max-w-[52rem] mx-auto bg-[url('https://forcythe.com/images/arc.svg')] lg:bg-[url('https://forcythe.com/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
      <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
        <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            We build solutions that help{" "}
            <span className="text-[#60a6e7]">businesses</span> of all sizes to{" "}
            <span className="text-[#60a6e7]">scale</span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly sm:justify-between items-center gap-3">
          <div className="">
            <h3 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
              <NumberTicker value={50} className="text-[#60a6e7]" />+
            </h3>
            <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Clients
            </p>
          </div>
          <div>
            <h3 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
              <NumberTicker value={120} className="text-[#60a6e7]" />+
            </h3>
            <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Projects
            </p>
          </div>
          <div>
            <h3 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
              <NumberTicker value={10} className="text-[#60a6e7]" />+
            </h3>
            <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Team Leads
            </p>
          </div>
          <div>
            <h3 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
              <NumberTicker value={10} className="text-[#60a6e7]" />+
            </h3>
            <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
              Glorious Years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
