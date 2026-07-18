import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Towing Near Me"
      title="Towing Services in Abu Dhabi"
      subtitle="Safe, careful towing for cars, vans, and light commercial vehicles to your chosen destination anywhere in Abu Dhabi."
      heroImage="/images/towing-services.webp"
      heroImageAlt="Tow truck transporting a car at sunset"
      highlights={[
        "Towing across Abu Dhabi and surrounding areas",
        "Suitable for cars, vans & light commercial",
        "Careful loading with no extra damage",
        "Clear guidance on the next steps",
      ]}
      bullets={[
        {
          title: "Vehicle Assessment",
          text: "We check the vehicle condition and confirm the correct towing method for your situation.",
        },
        {
          title: "Safe Loading & Transport",
          text: "Your vehicle is loaded and secured properly before being transported to the destination.",
        },
        {
          title: "Safe Drop-Off",
          text: "We confirm safe unloading and hand-over at your chosen destination.",
        },
      ]}
      ctaTitle="Need a tow?"
      ctaText="Share your location and destination. We'll confirm options and arrange a time that works for you."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
