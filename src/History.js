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
                    return (
                        <div className="grid-container">
                            <div className="nested">{job.date}</div>
                            <div className="nested">{job.aaTech}</div>
                            <div className="nested">{job.job}</div>
                            <div className="nested">{job.aaToPay}</div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default History