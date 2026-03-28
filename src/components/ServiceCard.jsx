import vectorBig from "../assets/Vector 2.png";
import vectorSmall from "../assets/Vector 3.png";
import image from "../assets/service-card.png";

export default function ServiceCard() {
  return (
    <div className="relative w-[260px] h-[260px]">

      {/* الشكل الأزرق الكبير */}
      <img
        src={vectorBig}
        alt=""
        className="absolute bottom-0 right-0 w-[210px] z-0"
      />

      {/* الصورة */}
      <img
        src={image}
        alt="service"
        className="absolute left-0 top-[30px] w-[170px] rounded-[28px] shadow-xl z-10"
      />

      {/* الشكل الأزرق الصغير */}
      <img
        src={vectorSmall}
        alt=""
        className="absolute top-0 left-[45px] w-[70px] z-20"
      />
    </div>
  );
}