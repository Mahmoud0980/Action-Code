import serviceIcon from "../assets/service-icon.png";
import Footer from "../sections/Footer";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Web Design",
    desc: "Beautiful, modern, and user-centered designs that reflect your brand and attract the right audience.",
  },
  {
    title: "Frontend Development",
    desc: "Interactive and responsive interfaces built for performance and usability.",
  },
  {
    title: "Backend Development",
    desc: "Secure, scalable, and reliable systems that power your website behind the scenes.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Online stores designed to convert visitors into buyers.",
  },
  {
    title: "SEO Optimization",
    desc: "We help your website rank higher and get discovered on Google.",
  },
  {
    title: "Website Maintenance",
    desc: "Continuous support, updates, and improvements for long-term success.",
  },
];

function TimelineItem({ title, desc, isLast }) {
  return (
    <div className="relative pl-10 pb-11">
      {!isLast && (
        <span className="absolute left-[12px] top-[28px] w-[2px] h-[120px] bg-[#6ED4FF]" />
      )}

      <span className="absolute left-0 top-[4px] w-[22px] h-[22px] rounded-[6px] bg-gradient-to-br from-[#7ED5FB] to-[#4A8BF6] rotate-[45deg]" />

      <h3 className="text-[#223B72] text-[22px] leading-[1.2] font-semibold tracking-[1.5px] mb-4">
        {title}
      </h3>

      <p className="text-[#333333] text-[16px] leading-[1.8] max-w-[520px]">
        {desc}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[48px] pt-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[40px]">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src={serviceIcon}
                alt=""
                className="w-[42px] h-[42px] object-contain"
              />
              <h2 className="text-[56px] leading-none font-medium text-[#2E2E2E]">
                Services
              </h2>
            </div>

            <div className="pt-4">
              {services.map((service, index) => (
                <TimelineItem
                  key={service.title}
                  title={service.title}
                  desc={service.desc}
                  isLast={index === services.length - 1}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-[72px] pt-[70px]">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>

      <div className="pt-[40px]">
        <Footer />
      </div>
    </section>
  );
}