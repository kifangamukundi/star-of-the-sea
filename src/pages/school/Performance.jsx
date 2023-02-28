import React from 'react'
import { Helmet } from 'react-helmet-async';
import { ValuesCard } from '../../components';
import styles from "../../style";
import {SITE_NAME} from "../../utils";
import { performance } from '../../constants/performance';

export const Performance = () => {
  return (
    <div>
    <Helmet>
        <title>{ `Performance - ${SITE_NAME}` }</title>
        <meta name="description" content={`Performance`}></meta>
    </Helmet>
    
    {/* About */}
    <div className="container w-full md:max-w-4xl mx-auto pt-20 prose prose-slate" >
        <h1 className={styles.heading2}>
            Performance
        </h1>
        <h2>
            KCSE Performance 2010 - 2022
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Here is a table of our performances in the past years; 
        </p>

        <table className="table-fixed">
            <thead>
              <tr>
                <th>Year</th>
                <th>A</th>
                <th>A-</th>
                <th>B+</th>
                <th>B</th>
                <th>B-</th>
                <th>C+</th>
                <th>C</th>
                <th>C-</th>
                <th>D+</th>
                <th>D</th>
                <th>D-</th>
                <th>Entry</th>
                <th>Mean Score</th>
                <th>Mean Grade</th>
              </tr>
            </thead>

            <tbody>

            {performance.map((value) => (
              <tr key={value.year}>
                <td>{value.year}</td>
                <td>{value.APlain}</td>
                <td>{value.AMinus}</td>
                <td>{value.BPlus}</td>
                <td>{value.BPlain}</td>
                <td>{value.BMinus}</td>
                <td>{value.CPlus}</td>
                <td>{value.CPlain}</td>
                <td>{value.CMinus}</td>
                <td>{value.DPlus}</td>
                <td>{value.DPlain}</td>
                <td>{value.DMinus}</td>
                <td>{value.Entry}</td>
                <td>{value.MeanScore}</td>
                <td>{value.MeanGrade}</td>
              </tr>
            ))}

            </tbody>
        </table>
         
        
        <ValuesCard/>
    </div>

  </div>
  )
}
