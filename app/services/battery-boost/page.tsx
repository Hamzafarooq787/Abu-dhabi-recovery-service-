import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Battery Near Me"
      title="Battery Boost in Abu Dhabi"
      subtitle="Flat battery? We jump-start it on the spot, or fit a replacement, so you can get back on the road quickly and safely."
      heroImage="/services/service-6.jpg"
      highlights={[
        "Jump-starts and battery replacement",
        "Correct handling for all vehicle types",
        "Safety checks included",
        "Ideal for modern vehicles",
      ]}
      bullets={[
        {
          title: "Battery Diagnosis",
          text: "We test the battery to confirm whether a jump-start or full replacement is needed.",
        },
        {
          title: "Safe Boost or Swap",
          text: "The battery is boosted or replaced with the right approach to avoid damage to your vehicle's electronics.",
        },
        {
          title: "Post-Service Verification",
          text: "We confirm the vehicle starts reliably so you leave with confidence.",
        },
      ]}
      ctaTitle="Need a battery boost?"
      ctaText="Share your location and vehicle details. We'll confirm the setup and get you booked in."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
