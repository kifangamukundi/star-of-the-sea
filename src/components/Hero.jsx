import styles from "../style";
import { discount } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col bg-white ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-blue-500 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Star</span> Of {" "}
            <span className="text-white">The</span> Sea {" "}
            <span className="text-white">High</span> School {" "}
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;
