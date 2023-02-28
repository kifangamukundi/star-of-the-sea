import React from 'react'
import { Helmet } from 'react-helmet-async';
import styles from "../../style";
import {SITE_NAME} from "../../utils";
import { english, 
        kiswahili, 
        mathematics, 
        biology, 
        physics, 
        chemistry, 
        history,
        geography,
        cre,
        agriculture,
        business,
        computer,
        french,
        german } from '../../constants/staff';
import { ValuesCard } from '../../components';

export const TeachingStaff = () => {
  return (
    <div className="container w-full md:max-w-4xl mx-auto pt-20">
      <Helmet>
          <title>{ `List of Teaching Staff - ${SITE_NAME}` }</title>
          <meta name="description" content={`List of Teaching Staff`}></meta>
      </Helmet>
      <div className="flex flex-wrap">
        <h1 className={styles.heading2}>The Teaching Staff Listed as per 2023 Academic Departments</h1>
        <p className={`${styles.paragraph} mt-5`}>
          At Star of the sea girls we strongly value the following ideas that can drive us forward to 
          achieve education at higher levels. This helps us to deliver the best and most quality education
          to our students at all times.  
        </p>
      </div>

        {/* English Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          English
        </h2>
        <div className="flex flex-wrap">
          
          {english?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Kiswahili Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Kiswahili
        </h2>
        <div className="flex flex-wrap">
          
          {kiswahili?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Mathematics Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Mathematics
        </h2>
        <div className="flex flex-wrap">
          
          {mathematics?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Biology Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Biology
        </h2>
        <div className="flex flex-wrap">
          
          {biology?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Physics Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Physics
        </h2>
        <div className="flex flex-wrap">
          
          {physics?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Chemistry Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Chemistry
        </h2>
        <div className="flex flex-wrap">
          
          {chemistry?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* History Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          History & Government
        </h2>
        <div className="flex flex-wrap">
          
          {history?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Geography Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Geography
        </h2>
        <div className="flex flex-wrap">
          
          {geography?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* CRE Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          C.R.E
        </h2>
        <div className="flex flex-wrap">
          
          {cre?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Agriculture Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Agriculture
        </h2>
        <div className="flex flex-wrap">
          
          {agriculture?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Business Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Business
        </h2>
        <div className="flex flex-wrap">
          
          {business?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* Computer Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          Computer Studies
        </h2>
        <div className="flex flex-wrap">
          
          {computer?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* French Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          French
        </h2>
        <div className="flex flex-wrap">
          
          {french?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        {/* German Teachers */}
        <h2 className={`${styles.paragraph} mt-5 block uppercase tracking-wide`}>
          German
        </h2>
        <div className="flex flex-wrap">
          
          {german?.map((value) => (
              <div key={value.id} className="w-full md:w-1/3 lg:w-1/4 mb-4 md:pr-2 bg-green-100 p-2 rounded-md shadow-md m-1">
                  <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <span className="w-[25%] h-[25%] object-contain">{value.number}</span>
                  </div>
                  <p className={`${styles.paragraph} mt-5`}>{value.name}</p>
              </div>
          ))}
          
        </div>

        <ValuesCard/>

    </div>
  )
}
