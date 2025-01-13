const Footer = () => {
  return (
    <footer
      className="py-20 border-t border-gray-800"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid md:grid-cols-3 justify-between gap-12">
          <div className="mb-10 lg:mb-0">
            <form
              aria-label="Subscribe to our newsletter"
              className="w-full grid grid-cols-4"
            >
              <label htmlFor="email" className="sr-only">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
                placeholder="Your Email Address"
                aria-required="true"
              />
              <button
                type="submit"
                className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-3 mt-5 items-center">
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                name="agreement"
                aria-required="true"
              />
              <label
                htmlFor="agreement"
                className="text-sm cursor-pointer"
                data-ninja-font="lexend_regular_normal_tgv4z"
              >
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div>
            <img
              src="https://forcythe.com/images/forcythe%20logo.svg"
              alt="Forcythe logo"
              className="mb-5 md:mb-8"
            />
            <p className="text-base text-gray-400 leading font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {[
                { href: "#", src: "facebook.svg", label: "Facebook" },
                { href: "#", src: "instagram.svg", label: "Instagram" },
                { href: "#", src: "x.svg", label: "Twitter" },
                { href: "#", src: "linkedin.svg", label: "LinkedIn" },
                { href: "#", src: "youtube.svg", label: "YouTube" },
                { href: "#", src: "Icon.svg", label: "Other platform" },
              ].map(({ href, src, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-blue-400 flex justify-center items-center"
                  aria-label={label}
                >
                  <img
                    src={`https://forcythe.com/images/${src}`}
                    alt={label}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-[#B3D0F2]">
              {["About", "Services", "Portfolio", "Careers", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-blue-400 flex justify-between items-center">
          <p className="text-[#B3D0F2]">
            © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
