import Button from "../components/Button";
import ArticleCard from "./ArticleCard";

const Article = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4"
      role="main"
      aria-labelledby="article-heading"
    >
      <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between mb-10">
        <h1
          id="article-heading"
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] text-white text-center"
        >
          Read our articles, news and product blog
        </h1>
        <Button showIcon aria-label="Read more articles" />
      </div>
      <div
        className="flex flex-col gap-x-12 md:flex-row gap-y-3"
        role="region"
        aria-labelledby="articles-list"
      >
        <h2 id="articles-list" className="sr-only">
          Article List
        </h2>
        <ArticleCard
          image={
            "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75"
          }
          title={"Will AI take over Art?"}
          alt="A conceptual artwork depicting artificial intelligence in art"
        />
        <ArticleCard
          image={
            "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1920&q=75"
          }
          title={"Cryptocurrency vs Tokens"}
          alt="Representation of cryptocurrency and tokens with digital assets icons"
        />
        <ArticleCard
          image={
            "https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1920&q=75"
          }
          title={"Cryptocurrency and Crypto asset"}
          alt="Visual representation of cryptocurrency and crypto assets"
        />
      </div>
    </div>
  );
};

export default Article;
