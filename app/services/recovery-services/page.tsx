import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Recovery Near Me"
      title="Vehicle Recovery Services in Abu Dhabi"
      subtitle="On-site vehicle recovery at your home, workplace, or roadside location. We arrive with the right equipment, recover safely, and confirm everything is ready before you set off."
      heroImage="/images/recovery-services.webp"
      heroImageAlt="Tow truck loading a recovered vehicle at night"
      highlights={[
        "Recovery at your location across Abu Dhabi",
        "Safe loading and secure transport",
        "Suitable for cars, vans & light commercial",
        "Convenient booking and quick turnaround",
      ]}
      bullets={[
        {
          title: "Arrival & Assessment",
          text: "We confirm your location, vehicle details, and the situation, then inspect the vehicle to plan the safest recovery method.",
        },
        {
          title: "Professional Recovery",
          text: "Your vehicle is recovered using specialist equipment with correct loading and secure fastening.",
        },
        {
          title: "Final Checks",
          text: "We complete safety checks before transport so your vehicle arrives at its destination without further damage.",
        },
      ]}
      ctaTitle="Need recovery today?"
      ctaText="Call or WhatsApp with your location and vehicle details. We'll confirm availability and get you booked in quickly."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
