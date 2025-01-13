import { motion } from "framer-motion";
import Button from "./components/Button";
import { TextEffect } from "./components/TextEffect";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 pb-6" role="banner">
      <div
        className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]"
        aria-labelledby="main-heading"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="motion-safe:transition-opacity"
            aria-live="polite"
          >
            <h1
              id="main-heading"
              className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7"
            >
              We build{" "}
              <span className="text-blue-400" aria-label="products">
                products
              </span>{" "}
              that
              <br aria-hidden="true" />
              shape a better future
            </h1>

            <TextEffect
              per="char"
              preset="fade"
              className="max-w-3xl text-gray-400 text-base md:text-lg mb-8 leading-7"
              aria-label="Company mission statement"
            >
              We're the architects of digital excellence across industries. We
              redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </TextEffect>

            <div className="relative w-fit group" role="complementary">
              <Button showIcon aria-label="Learn more about our products" />
              <div
                className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"
                aria-hidden="true"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
