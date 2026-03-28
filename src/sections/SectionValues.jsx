
import ValuesIllustration from "../components/ValuesIllustration";
const values = [
  {
    title: "Innovation",
    desc: "We always look for better ways to build",
    active: true,
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest work",
    active: false,
  },
  {
    title: "Quality",
    desc: "Every pixel and every line of code matters",
    active: false,
  },
];

export default function SectionValues() {
  return (
    <section className="bg-white py-[90px]">
      <div className="max-w-[1440px] mx-auto px-[48px]">
        <div className="grid md:grid-cols-2 items-center gap-[80px]">
          {/* LEFT IMAGE */}
         
           <div className="flex justify-center md:justify-start">
  <ValuesIllustration />
</div>
      

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-primary text-[36px] font-bold mb-10">
              Our Values
            </h2>

            <div className="space-y-7">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className={
                    v.active
                      ? "bg-white rounded-xl px-7 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100"
                      : "px-1"
                  }
                >
                  <h4 className="text-[15px] font-bold text-[#1F2A44] mb-1">
                    {v.title}
                  </h4>
                  <p className="text-[13px] text-muted leading-[22px]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}