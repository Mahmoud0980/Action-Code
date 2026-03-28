import globe from "../assets/Mask Group.png";          // الكرة الأرضية
import curve from "../assets/Mask Group (1).png";      // المنحنى الأزرق
import character from "../assets/Illustration 1.png";  // الشخص واللابتوب

export default function ValuesIllustration() {
  return (
    <div className="relative w-[560px] h-[460px] max-w-full">
      {/* Globe (خلف) */}
      <img
        src={globe}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[520px] opacity-90 z-0"
      />

      {/* Curve (فوق الكرة أو تحت حسب فيغما) */}
     <img
  src={curve}
  alt=""
  className="absolute left-1/2 -translate-x-[40%] bottom-[-8px] w-[430px] z-10"
/>

      {/* Character (أمام) */}
      <img
        src={character}
        alt="Illustration"
        className="absolute left-1/2 bottom-0 -translate-x-1/2
                   w-[520px] z-20"
      />
    </div>
  );
}