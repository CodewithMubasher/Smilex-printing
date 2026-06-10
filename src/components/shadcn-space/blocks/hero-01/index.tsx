import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";

export default function AgencyHeroSection() {
  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#home",
      isActive: true,
    },
    {
      title: "About us",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },    
    {
      title: "FAQ",
      href: "#faq",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection />
        <div className="mt-33">
          <BrandSlider />
        </div>
      </main>
    </div>
  );
}
