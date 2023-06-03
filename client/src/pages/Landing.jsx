import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";

const Landing = () => {
  return (
    <>
      <main className="flex-grow">
        <HeroHome />
        <FeaturesBlocks />
        <Testimonials />
      </main>
    </>
  );
};

export default Landing;
