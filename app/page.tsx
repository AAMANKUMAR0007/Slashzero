import Hero from "../components/hero";
import LearningCategories from "../components/learning-categories";
import ShowcasePrograms from "../components/showcase-programs";
import WhySlashZero from "../components/why-slashzero";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-12">
      <Hero />
      <WhySlashZero />
      <LearningCategories />
      <ShowcasePrograms />
    </div>
  )
}
