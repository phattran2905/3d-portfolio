import Service from "../component/Service";
import { styles } from "../styles";
import { BsCodeSlash,BsSearch,BsCheckCircle } from "react-icons/bs";
import { BiMobile } from "react-icons/bi";

type Props = {};
function Services({}: Props) {
  return (
    <section id="services" className={`${styles.sectionWrapper} `}>
      <div className={`${styles.section} ${styles.paddingX}`}>
        <div className="mb-6">
          <h2 className="text-[48px] font-semibold leading-[57.6px] -tracking-[0.025em] text-black">
            What do I help?
          </h2>
          <p className="my-8 text-[18px] font-normal leading-[34px] text-tertiary">
            I will help you with finding a solution and solve your problems. We
            use proccess design to create digital products. besides that i also
            help their business
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <Service
            title="Web development"
            description="Building, creating, and maintaining of websites. It includes
            aspects such as web design, web publishing."
            icon={
              <div className="rounded-full bg-[#FDAD57]/[.65] p-3">
                <BsCodeSlash size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="Mobile App Design"
            description="Designing mobile applications. optimal usability, accessibility,
            engagement, and overall user experience."
            icon={
              <div className="rounded-full bg-[#68CA95]/[.65] p-3">
                <BiMobile size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="UX Research"
            description="learning what end users of a system or product need and want,
            then employing those insights to products"
            icon={
              <div className="rounded-full bg-[#312E81]/[.65] p-3">
                <BsSearch size={30} className="text-white" />
              </div>
            }
          />
          <Service
            title="Brand Identity"
            description="produce designs across a variety of formats, platforms social media, and more."
            icon={
              <div className="rounded-full bg-[#FF5F5F]/[.65] p-3">
                <BsCheckCircle size={30} className="text-white" />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
export default Services;
