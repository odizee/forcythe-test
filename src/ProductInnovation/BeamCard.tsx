interface BeamCardProps {
  title: string;
  desc: string;
}
const BeamCard = ({ title, desc }: BeamCardProps) => {
  return (
    <div className="relative w-full">
      {/* Border beam container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Rotating beam */}
          <div className="w-1/2 h-1/2 absolute -top-1/2 -left-1/2 animate-[spin_3s_linear_infinite]">
            <div className="w-[200%] h-[200%] absolute top-0 left-0">
              <div
                className="w-2 h-2 absolute top-full left-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "white",
                  boxShadow: "0 0 10px 2px #60A6E7, 0 0 4px 1px #60A6E7",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-gray-400">
        <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z" />
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
          </svg>
        </div>

        <h4 className="text-2xl font-medium mb-5 text-white text-left">
          {title}
        </h4>

        <p className="mb-0 text-gray-400 text-[17.5px] text-left leading-6">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BeamCard;
