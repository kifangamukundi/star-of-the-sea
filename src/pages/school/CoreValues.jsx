import React from 'react'
import { Helmet } from 'react-helmet-async';
import styles from "../../style";
import { values } from '../../constants/values';
import { TeachersCard } from '../../components';
import {SITE_NAME} from "../../utils";

export const CoreValues = () => {
  return (
    <div className="container w-full md:max-w-4xl mx-auto pt-20">
      <Helmet>
          <title>{ `Our Core Values - ${SITE_NAME}` }</title>
          <meta name="description" content={`Our Core Values`}></meta>
      </Helmet>
      <div className="flex flex-wrap">
        <h1 className={styles.heading2}>Our Core Values</h1>
        <p className={`${styles.paragraph} mt-5`}>
          At Star of the sea girls we strongly value the following ideas that can drive us forward to 
          achieve education at higher levels. This helps us to deliver the best and most quality education
          to our students at all times.  
        </p>
      </div>

    
        <div className="flex flex-wrap">

          {values?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-slate-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[32px] h-[32px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <img src={value.icon} alt="star" className="w-[25%] h-[25%] object-contain" />
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.content}</p>
              </div>
          ))}
          
        </div>
        <TeachersCard/>

    </div>
  )
}
