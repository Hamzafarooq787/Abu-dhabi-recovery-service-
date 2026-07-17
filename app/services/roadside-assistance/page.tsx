import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="24/7 Support"
      title="Roadside Assistance in Abu Dhabi"
      subtitle="If it's not safe to continue driving, we come to you. Quick coordination, professional service, and a focus on getting you mobile again."
      heroBackground="linear-gradient(150deg, #0b0d10 0%, #2a1200 60%, #FF7A29 150%)"
      highlights={[
        "Fast response for urgent breakdowns",
        "Support across Abu Dhabi",
        "Roadside-friendly process",
        "Clear ETA and next steps",
      ]}
      bullets={[
        {
          title: "Rapid Call Handling",
          text: "We take the essentials quickly: location, vehicle, and the situation—then confirm the plan.",
        },
        {
          title: "On-Site Resolution",
          text: "Whether it's a quick fix or immediate support, we arrive equipped to handle common breakdown scenarios.",
        },
        {
          title: "Safe Finish",
          text: "We complete checks before you drive off and advise on anything you should monitor afterwards.",
        },
      ]}
      ctaTitle="Stuck right now?"
      ctaText="Call or WhatsApp your location. We'll confirm the quickest option and support you immediately."
      brandColor={siteConfig.brandColor}
      phoneHref={siteConfig.links.telLink}
      whatsappHref={siteConfig.links.whatsappLink}
    />
    <Footer/>
    </>
  );
}
