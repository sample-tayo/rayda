import Hero from "./components/home/hero";
import Services from "./components/home/services";
import Location from "./components/home/Location";
import Steps from "./components/home/steps";
import TestimonialCard from "./components/testimonialCard";
import SliderCarousel from "./components/home/Slider";
import NewsLetter from "./components/home/newsletter";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Services />
      <Location />
      <Steps />

      <div className="grid grid-cols-1 lg:gap-10 px-6  lg:grid-cols-2 lg:px-32">
        <div>
          <p className="text-lg font-semibold text-accent3">Testimonials</p>
          <p className=" text-4xl text-darkText font-bold mt-8 lg:pr-28">
            What people say about Us.
          </p>
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>

      <SliderCarousel />
      <NewsLetter />
    </PageWrapper>
  );
}
