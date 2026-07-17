import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Specialist Recovery"
      title="Off-Road Recovery Services in Abu Dhabi"
      subtitle="Stuck in sand, mud, or rough terrain? Our specialist off-road recovery team is equipped to get your vehicle out safely, wherever you are."
      heroImage="/services/service-2.jpg"
      highlights={[
        "Specialist off-road recovery equipment",
        "Desert and rough-terrain experience",
        "Careful handling to avoid vehicle damage",
        "Available day and night",
      ]}
      bullets={[
        {
          title: "Situation Assessment",
          text: "We confirm your exact location and terrain conditions to plan the safest recovery approach.",
        },
        {
          title: "Controlled Recovery",
          text: "Your vehicle is recovered using the right technique and equipment for sand, mud, or rocky terrain.",
        },
        {
          title: "Post-Recovery Checks",
          text: "We check your vehicle before you continue, so you can carry on with confidence.",
        },
      ]}
      ctaTitle="Stuck off-road?"
      ctaText="Call or WhatsApp your location. We'll confirm the quickest option and dispatch a recovery team."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
