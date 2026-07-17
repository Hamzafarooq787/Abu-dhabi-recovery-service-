import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Always Available"
      title="Fuel Delivery in Abu Dhabi"
      subtitle="Run out of fuel? We deliver directly to your location so you can get back on the road without waiting for a tow."
      heroBackground="radial-gradient(circle at 75% 25%, rgba(255,106,26,0.45) 0%, transparent 55%), linear-gradient(170deg, #0b0d10 0%, #1f1400 100%)"
      highlights={[
        "Fuel delivered directly to your location",
        "Simple contact and quick coordination",
        "Coverage across Abu Dhabi areas",
        "Safety-first approach",
      ]}
      bullets={[
        {
          title: "Immediate Response",
          text: "We gather the key details and confirm the best route forward without dragging the process.",
        },
        {
          title: "Prepared Arrival",
          text: "We arrive with the right fuel type and equipment to get you moving quickly.",
        },
        {
          title: "Confidence to Continue",
          text: "Before you move, we do the checks that matter so you can drive away safely.",
        },
      ]}
      ctaTitle="Need fuel right now?"
      ctaText="Call or WhatsApp your location and fuel type. We'll guide you and arrange delivery quickly."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
