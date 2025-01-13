import BeamCard from "./BeamCard";

const ProductInnovation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-28 relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left md:mb-10">
      <h1 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-[#B3D0F2] text-center">
        Your best call for B2B/B2C product innovation
      </h1>
      <div className="flex md:flex-row flex-col gap-x-12 gap-y-5">
        <BeamCard
          title="Experience"
          desc="Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
        />
        <BeamCard
          title="Quick Support"
          desc="We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."
        />
        <BeamCard
          title="Cost Savings"
          desc="Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."
        />
      </div>
    </div>
  );
};

export default ProductInnovation;
