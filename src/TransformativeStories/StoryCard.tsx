import { TextEffect } from "../components/TextEffect";

interface StoryCardProps {
  title: string;
  desc: string;
  name: string;
  image: string;
}

const StoryCard = ({ title, desc, name, image }: StoryCardProps) => {
  return (
    <div className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] p-5 sm:p-7 bg-[#0c2645] flex md:flex-row flex-col gap-x-3">
      <div>
        <p className="text-base font-bold mb-4 text-left">{title}</p>
        <p className="text-base font-bold mb-4 text-left">
          <TextEffect
            per="char"
            preset="fade"
            className="max-w-3xl text-gray-400 text-base md:text-lg mb-8 leading-7"
          >
            {desc}
          </TextEffect>
          <TextEffect
            per="char"
            preset="fade"
            className="max-w-3xl text-gray-400 text-base md:text-lg mb-8 leading-7"
          >
            {name}
          </TextEffect>
        </p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default StoryCard;
