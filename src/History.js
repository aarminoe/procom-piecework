import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function History({jobList}) {

    console.log(jobList)
    const [dateFilter, setDateFilter] = useState('')


    return(
        <div>
            <div>
                <input onChange={(e) => setDateFilter(e.target.value)} type="date" />
            </div>
            {jobList.map((job) => {
                if (job.date == dateFilter) {
                    return <div>{job.date}</div>
                }
            })}
        </div>
    )
}

export default History