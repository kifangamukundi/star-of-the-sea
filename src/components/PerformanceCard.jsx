import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../style";

export const PerformanceCard = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-gray-200`}>
        <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Our Performance</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            At Star of the Sea Girls' High School we have regularly posted exemplary grades
            that have resulted into our students having a chance at the top universities in the country.
        </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to={`/performance`}>
          <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-800 rounded-[10px] outline-none`}>
            Performance
          </button>
        </Link>
        </div>
    </section>
  )
}
