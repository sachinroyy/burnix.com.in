import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import DocumentsSection from "@/components/DocumentsSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Private from "@/components/Private";
import Whattokeep from "@/components/Whattokeep";
import FAQSection from "@/components/faq";
import ServicesSection from "@/components/ServicePage";
import BlogsSection from "@/app/blogs/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Private /> 
      <BenefitsSection />
      <Whattokeep />
      <BlogsSection />
      <DocumentsSection />
      <ReviewsSection />
      <FAQSection />
      <WhyChooseSection />
      <ServicesSection />
    </>
  );
}
