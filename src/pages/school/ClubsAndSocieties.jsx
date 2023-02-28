import React from 'react'
import { Helmet } from 'react-helmet-async';
import styles from "../../style";
import { TeachersCard, ValuesCard } from '../../components';
import {SITE_NAME} from "../../utils";

export const ClubsAndSocieties = () => {
  return (
    <div>
    <Helmet>
        <title>{ `Clubs and Societies - ${SITE_NAME}` }</title>
        <meta name="description" content={`Clubs and Societies`}></meta>
    </Helmet>
    
    {/* About */}
    <div className="container w-full md:max-w-4xl mx-auto pt-20 prose prose-slate">
        <h1 className={styles.heading2}>
            Clubs and Societies
        </h1>
        <p className={`${styles.paragraph} mt-5`}>
          The department is headed by the Head of Clubs and Societies. Currently the department is 
          comprised of 16 clubs and societies.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          Each student is required to be a member of at least one club. The HOD works closely with all 
          club patrons.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          Clubs meet every Tuesday between 4.00 p.m and 5.00 p.m. The club officials are elected by club 
          members. The students also have a Talent Day once in a year. This way the students get a chance 
          to explore their talents through clubs, movements, societies, games and sports.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          These organizations arrange educational trips, tours and outings where the students also interact
          with other students.
        </p>
        <ValuesCard/>
        <h2>
            Sports Department
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          The games department is headed by a Games master. A variety of games are offered in the school 
          including soccer, volleyball, handball, rugby, basketball, hockey, athletics, lawn tennis, table 
          tennis and badminton.
        </p>
        <p className={`${styles.paragraph} mt-5`}>
          We also have recreational games like Chess and Scrabble. Through the Games Master, the school 
          tries to make sure that every student is involved in at least one game.
        </p>
        
        <TeachersCard/>
    </div>

  </div>
  )
}
