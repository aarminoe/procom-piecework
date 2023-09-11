import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HistoryJob from "./HistoryJob";

function History({jobList}) {

    const [dateFilter, setDateFilter] = useState('')
    const [techFilter, setTechFilter] = useState('')
    console.log(dateFilter)
    console.log(techFilter)

    function handleClearDate() {
        setDateFilter('')
    }

    return(
        <div>
            <div>
                <div>
                    Date: <input value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} type="date" />
                    <button onClick={handleClearDate}>Clear Date</button>
                </div>
                <div>
                    Technician: <input value={techFilter} onChange={(e) => setTechFilter(e.target.value)}/>
                </div>
            </div>
            {jobList.map((job) => {
                if (job.date == dateFilter && job.aaTech == techFilter) {
                    console.log(job.aaTech)
                    return <HistoryJob job={job}/>
                } else if (job.aaTech == techFilter && dateFilter == '') {
                    return <HistoryJob job={job} />
                } else if (job.date == dateFilter && techFilter == '') {
                    return <HistoryJob job={job} />
                }
            })}
        </div>
    )
}

export default History