import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../style";

export const ValuesCard = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-gray-200`}>
        <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Climate of High Expectations</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Star of the Sea Girls' High School is an effective school
            that expects high levels of achievements from each
            member of their learning community; all students can and will
            learn, and teachers, staff, administrators, and parents are 
            expected to hold that belief.
        </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to={`/core-values`}>
          <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-800 rounded-[10px] outline-none`}>
            What we believe in
          </button>
        </Link>
        </div>
    </section>
  )
}
