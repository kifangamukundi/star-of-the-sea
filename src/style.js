const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-sans text-3xl font-medium text-gray-800 sm:text-4xl uppercase",
  heading3: "font-sans text-2xl font-medium text-gray-800 sm:text-4xl uppercase",
  paragraph: "font-sans text-base leading-relaxed text-gray-800 sm:text-lg",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-3",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionWithoutPadding: `flex md:flex-row flex-col}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionReverseWithoutPadding: `flex md:flex-row flex-col-reverse`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
