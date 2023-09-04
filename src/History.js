import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HistoryJob from "./HistoryJob";

function History({jobList}) {

    const [dateFilter, setDateFilter] = useState('')

    return(
        <div>
            <div>
                <input onChange={(e) => setDateFilter(e.target.value)} type="date" />
            </div>
            {jobList.map((job) => {
                if (job.date == dateFilter) {
                    return (
                        <HistoryJob job={job}/>
                    )
                }
            })}
        </div>
    )
}

export default History