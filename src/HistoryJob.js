import React from "react";
import { useState } from "react";

function HistoryJob({job}) {

    const [showMore, setShowMore] = useState(false)
    console.log(showMore)

    return(
        <div className="grid-container">
            <div className="nested">Date: {job.date}</div>
            <div className="nested">Technician: {job.aaTech}</div>
            <div className="nested">Job: {job.job}</div>
            <div className="nested">To Pay: ${job.aaToPay}</div>
            <div className="nested">
                <button onClick={() => setShowMore(!showMore)}>Show More</button>
            </div>
        </div>
    )
}

export default HistoryJob