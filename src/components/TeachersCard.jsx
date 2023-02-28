import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../style";


export const TeachersCard = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-gray-200`}>
        <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Opportunity to learn</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            The school allocates and protects instruction time
            , and instruction is part of an integrated, 
            interdisciplinary curriculum, focusing on the curriculum
            content that is most essential and the skills that are most valued.
        </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to={`/teaching-staff`}>
          <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-800 rounded-[10px] outline-none`}>
            Teaching Staff
          </button>
        </Link>
        </div>
    </section>
  )
}
