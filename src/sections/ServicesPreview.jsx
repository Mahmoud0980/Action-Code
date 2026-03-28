export default function ServicesPreview() {
  return (
    <section className="mt-[120px] mb-[160px]">
      
      {/* Title */}
      <h2 className="text-center text-[36px] font-semibold text-[#1E3A8A] mb-[60px]">
        Services Preview
      </h2>

      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="
          bg-[#ffffff]
          rounded-[40px]
          shadow-[0px_20px_60px_rgba(0,0,0,0.08)]
          px-[80px]
          py-[60px]
          grid
          md:grid-cols-3
          gap-[80px]
          items-start
        ">
          
          {/* Item 1 */}
          <div>
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="10" width="30" height="20" rx="4"/>
                <line x1="14" y1="34" x2="28" y2="34"/>
              </svg>
            </div>

            <h3 className="text-[22px] font-semibold text-[#333333] mb-3">
              Web Design
            </h3>

            <p className="text-[16px] text-[#666666]">
              Modern, clean and user-focused designs
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="6" width="22" height="22" rx="6"/>
                <polyline points="16 18 20 22 26 16"/>
              </svg>
            </div>

            <h3 className="text-[22px] font-semibold text-[#333333] mb-3">
              Web Development
            </h3>

            <p className="text-[16px] text-[#666666]">
              Fast, secure and scalable websites
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="text-[#4F46E5] mb-6">
              <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="8" y="8" width="26" height="10" rx="3"/>
                <rect x="8" y="22" width="26" height="10" rx="3"/>
              </svg>
            </div>

            <h3 className="text-[22px] font-semibold text-[#333333] mb-3">
              E-Commerce
            </h3>

            <p className="text-[16px] text-[#666666]">
              Online stores that sell
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}