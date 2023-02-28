import React from 'react'
import { Helmet } from 'react-helmet-async';
import styles from "../../style";
import {SITE_NAME} from "../../utils";
import { compulsory, 
  sciences, 
  humanities, 
  group4, 
  group5 } from '../../constants/curriculum';
import { TeachersCard } from '../../components';

export const Curriculum = () => {
  return (
    <div className="container w-full md:max-w-4xl mx-auto pt-20">
      <Helmet>
          <title>{ `Curriculum - ${SITE_NAME}` }</title>
          <meta name="description" content={`Curriculum`}></meta>
      </Helmet>
      <div className="flex flex-wrap">
        <h1 className={styles.heading2}>Curriculum</h1>
        <p className={`${styles.paragraph} mt-5`}>
          Through the guidance of the school's motto;
          "Elimu ni ushidi", the students are able to cope
          a broad Curriculum. This is also meant to ensure a smooth and harmonious
          pursuit of our goals. Star of the sea girls high school offers a broad Curriculum 
          comprising of the following subject cluster:
        </p>
      </div>

        {/* Compulsory subjects */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Compulsory
        </h2>
        <div className="flex flex-wrap">
          
          {compulsory?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-blue-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Sciences */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Sciences
        </h2>
        <div className="flex flex-wrap">
          
          {sciences?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-blue-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Humanities */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Humanities
        </h2>
        <div className="flex flex-wrap">
          
          {humanities?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-blue-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Group 4 */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Group IV
        </h2>
        <div className="flex flex-wrap">
          
          {group4?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-blue-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Group V */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Group V
        </h2>
        <div className="flex flex-wrap">
          
          {group5?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-blue-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        <TeachersCard/>

    </div>
  )
}
