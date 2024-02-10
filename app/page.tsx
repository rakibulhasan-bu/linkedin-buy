import Blog from "./components/homePage/Blog";
import Hero from "./components/homePage/Hero";
import Pricing from "./components/homePage/Pricing";
import Statistics from "./components/homePage/Statistics";
import Step from "./components/homePage/Step";
import Team from "./components/homePage/Team";
import Testimonial from "./components/homePage/Testimonial";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      {/* <Step />
      <Statistics />
      <Pricing />
      <Blog />
      <Testimonial />
      <Team /> */}
    </main>
  );
}
