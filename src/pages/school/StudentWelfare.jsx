import React from 'react'
import { Helmet } from 'react-helmet-async';
import { TeachersCard, ValuesCard } from '../../components';
import styles from "../../style";
import {SITE_NAME} from "../../utils";

export const StudentWelfare = () => {
  return (
    <div>
    <Helmet>
        <title>{ `Welfare and Boarding - ${SITE_NAME}` }</title>
        <meta name="description" content={`Welfare and Boarding`}></meta>
    </Helmet>
    
    {/* About */}
    <div className="container w-full md:max-w-4xl mx-auto pt-20 prose prose-slate" >
        <h1 className={styles.heading2}>
            Welfare and Boarding
        </h1>
        <h2>
            Boarding Facilities
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Students sleep in spacious dormitories within the school compound. Each dormitory is assigned 
          a dormitory prefect or captain, who is in charge of maintaining order within the dormitory.
          Students' dormitories are named accordingly.
        </p>
        <h2>
            Boarding Support Staff
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          The boarding support staff, led by the Deputy Principal in charge of boarding; ensure that all 
          students are able to acquire all the necessary facilities to enable them feel protected. All 
          meals are prepared by nutrition professionals.
        </p>
        <TeachersCard/>
        <h2>
            Students' Medical Care
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          The medical professionals within the school's dispensary offer medical attention to the students 
          at any time of need.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          In case of more medical attention, the school liaises with leading medical facilities within the larger 
          Mombasa County.
        </p>
        <h2>
            Nurturing of Talents
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          We realize the need to nurture talents and attain individual abilities amongst all students. 
          The sports and talents department gives the students the opportunity to express their God-given 
          talents through various avenues within the school.
        </p>  
        
        <ValuesCard/>
    </div>

  </div>
  )
}
