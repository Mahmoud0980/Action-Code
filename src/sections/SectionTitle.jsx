import titleImage from "../assets/title-image.png";
export default function SectionTitle() {
  return (
    <section className="section-title">
      <div className="container">
        <h2>
          Empowering Your Digital Vision <br />
          Comprehensive Tech Solutions
        </h2>
         <img
    src={titleImage}
    alt=""
    className="title-image"
  />
        <p>
          We provide scalable, secure and modern technology services tailored to your business growth.
        </p>
      </div>
    </section>
  );
}