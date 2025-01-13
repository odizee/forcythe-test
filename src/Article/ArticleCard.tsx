interface ArticleCardProps {
  image: string;
  title: string;
  alt: string;
}
const ArticleCard = ({ image, title, alt }: ArticleCardProps) => {
  return (
    <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm  hover:shadow-[#B3D0F2] transition-all duration-300">
      <img
        className="w-fit h-60 sm:h-56 relative mb-6 bg-opacity-60 rounded-3xl duration-300 group-hover:scale-105"
        src={image}
        alt={alt}
      />
      <div className="group-hover:pl-3 transition-all duration-300">
        <div className="border-l-2 pl-3">
          <h3 className="text-lg font-semibold mb-1">Blog</h3>
          <p className="text-base text-darkGrey flex items-center mb-6">
            The Reformist . May 29th, 2024
          </p>
          <p className="text-2xl font-medium mb-5 text-white text-left">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
