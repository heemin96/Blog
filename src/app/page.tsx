import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Components */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Components */}
      <CarouselPosts />
    </>
  );
}
