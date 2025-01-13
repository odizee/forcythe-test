import Header from "./Header";
import ClientsJourney from "./ClientsJourney";
import TransformativeStories from "./TransformativeStories";
import ProductInnovation from "./ProductInnovation";
import Article from "./Article";
import Button from "./components/Button";
import SparkSpotlight from "./SparkSpotlight";
import Stats from "./Stats";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Nav />
      <div className="mt-[6.5rem] md:min-h-screen bg-[url('https://forcythe.com/images/header-background.svg')] bg-no-repeat bg-top">
        {/* Hero Section */}
        <Header />

        {/* Success Stories */}
        <ClientsJourney />
      </div>

      {/* Transformative Stories */}
      <TransformativeStories />

      {/* Spark Spotlight */}
      <SparkSpotlight />

      {/* Product Innovation */}
      <ProductInnovation />

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Stats />
        </div>
      </section>

      {/* Article Section */}
      <Article />

      {/* Ready */}
      <div className="max-w-7xl mx-auto px-4 my-20">
        <h2 className="text-center text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
          <span className="text-blue-400">Ready to Scale?</span>
          <br />
          <span> Join successful brands that chose</span> <br />
          us as their <span className="text-blue-400">growth accelerator</span>
        </h2>
        <div className="grid justify-center">
          <Button showIcon={false} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
