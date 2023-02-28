import React from 'react'
import { Helmet } from 'react-helmet-async';
import { TeachersCard, ValuesCard, PerformanceCard, ImageCarousel } from '../../components';
import styles, {layout} from "../../style";
import { academics, departments, academicDepartments, otherdepartments } from '../../constants/academics';
import {SITE_NAME} from "../../utils";
import { academicsImages } from '../../constants/images';

export const Academics = () => {
  return (
    <div>
    <Helmet>
        <title>{ `Academics and Departments - ${SITE_NAME}` }</title>
        <meta name="description" content={`Academics`}></meta>
    </Helmet>
    
    {/* About */}
    <div className="container w-full max-w-4xl mx-auto pt-20 prose prose-slate" >
        <h1 className={styles.heading2}>
            Academics
        </h1>
        {/* Image slider */}
        <ImageCarousel images={academicsImages} />
        
        {/* Academics */}
        <div>
          {academics.map((academic) => (
            <section key={academic.id} className={`${layout.section}`}>
              <div className={layout.sectionInfo}>
                <h2>
                  {academic.title}
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                {academic.content}
                </p>
              </div>
          
              <div className={`${layout.sectionImg}`}>
              <img src={academic.image} alt={academic.title}  className="w-[100%] h-[100%]" />
              </div>
            </section>
          ))}
        </div>

        <TeachersCard/>

        {/* Intro to departments */}
        {academicDepartments.map((department) => (
        <div key={department.id} className="container w-full md:max-w-4xl mx-auto pt-20 prose prose-slate">
          <h2>
              {department.title}
          </h2>
          <p className={`${styles.paragraph} mt-5`}>
            {department.content}
          </p>
        </div>
        ))}

        {/* Departments */}
        <h2 className={styles.heading3}>
            Departments
        </h2>
        <div>
          {departments.map((department) => (
            <section key={department.id} className={`${layout.sectionReverseWithoutPadding}`}>
              <div className={`${layout.sectionImgReverse} flex-col`}>
                <img src={department.image} alt={department.title}  />
              </div>
              <div className={layout.sectionInfo}>
                <h2>
                  {department.title}
                </h2>
                <p className={`${styles.paragraph}`}>
                {department.content}
                </p>
              </div>
            </section>
          ))}
        </div>

        <ValuesCard/>

        {/* Other Departments */}
        <h2 className={styles.heading3}>
            Other Departments
        </h2>
        {otherdepartments.map((department) => (
        <div key={department.id} className="container w-full md:max-w-4xl mx-auto pt-20 prose prose-slate">
          <h2>
              {department.title}
          </h2>
          <p className={`${styles.paragraph} mt-5`}>
            {department.content}
          </p>
          {/* Points */}
          <div className="flex flex-wrap">

          {department.points?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-gray-200 p-2 rounded-md shadow-md m-1 hover:bg-gray-300 hover:text-white hover:border-gray-400">
                  <div className={`w-[32px] h-[32px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <img src={value.icon} alt="star" className="w-[25%] h-[25%] object-contain" />
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.content}</p>
              </div>
          ))}
        </div>

        </div>
        ))}

        <PerformanceCard/>

    </div>

  </div>
  )
}
