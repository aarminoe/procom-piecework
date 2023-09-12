import React from "react";
import { useState } from "react";

function HistoryJob({job}) {

    const [showMore, setShowMore] = useState(false)
    console.log(job)

    return(
        <div className="history-job-box">
        <div className="grid-container">
            <div className="nested">Date: {job.date}</div>
            <div className="nested">Technician: {job.aaTech}</div>
            <div className="nested">Stage: {job.aaStage}</div>
            <div className="nested">Job: {job.job}</div>
            <div className="nested">To Pay: ${job.aaToPay}</div>
        </div>
            <div>
                <button onClick={() => setShowMore(!showMore)}>Show More</button>
            </div>
            {showMore ?
            <div>
                {job.aaStage == 'rough' ?
                <div className="grid-container">
                    <div>
                    <div class='nested'>
                        STRUCTURED WIRING - ROUGH-IN DESCRIPTION
                    </div>
                    <div class='nested'>
                        Cat5/6, RG6 Wire Drop
                    </div>
                    <div class='nested'>
                        Structural Panel Installation
                    </div>
                    <div class='nested'>
                        Distribution Prewire Option 1
                    </div>
                    <div class='nested'>
                        Distribution Prewire Option 2
                    </div>
                    <div class='nested'>
                        Distribution Prewire Option 3
                    </div>
                    <div class='nested'>
                        Alarm Wire Prewire
                    </div>
                    <div class='nested'>
                        Alarm Door Contact Prewire
                    </div>
                    <div class='nested'>
                        Audio Distribution Per Zone (Pair) Prewire
                    </div>
                    <div class='nested'>
                        Local/Global Audio Source
                    </div>
                    <div class='nested'>
                        5.1-2 Surround Prewire
                    </div>
                    <div class='nested'>
                        7.1-2 Surround Prewire
                    </div>
                    <div class='nested'>
                        CCTV Prewire (Cat5/6) Prewire
                    </div>
                    <div class='nested'>
                        FPPW - Same Stud Bay (Up To 10') - HDMI, (1) RG6, (2) CAT5e
                    </div>
                    <div class='nested'>
                        FPPW - Same Wall (up to 35') - HDMI, (1) RG6, (2) CAT5e
                    </div>
                    <div class='nested'>
                        FPPW - Same Room (Up To 50') - HDMI, (1) RG6, (2) CAT5e
                    </div>
                    <div class='nested'>
                        FPPW - Remote (Over 50') - (1) HD Balun Set, (1) RG6, (3) CAT5e
                    </div>
                    <div class='nested'>
                        Additional HDMI (Up To 50")
                    </div>
                    <div class='nested'>
                        Vacuum Rough (Per Outlet) - Rough
                    </div>
                    <div class='nested'>
                        Chase Pipe - Attic
                    </div>
                    <div class='nested'>
                        Chase Pipe - Local
                    </div>
                    </div>
                    <div class='nested'>
                        COST
                        <div class='nested'>$15.00</div>
                        <div class='nested'>$25.00</div>
                        <div class='nested'>$30.00</div>
                        <div class='nested'>$45.00</div>
                        <div class='nested'>$60.00</div>
                        <div class='nested'>$15.00</div>
                        <div class='nested'>$20.00</div>
                        <div class='nested'>$35.00</div>
                        <div class='nested'>$25.00</div>
                        <div class='nested'>$75.00</div>
                        <div class='nested'>$100.00</div>
                        <div class='nested'>$20.00</div>
                        <div class='nested'>$15.00</div>
                        <div class='nested'>$25.00</div>
                        <div class='nested'>$50.00</div>
                        <div class='nested'>$60.00</div>
                        <div class='nested'>$10.00</div>
                        <div class='nested'>$55.00</div>
                        <div class='nested'>$50.00</div>
                        <div class='nested'>$30.00</div>
                    </div>
                    <div class='nested'>
                        TOTAL
                        <div class='nested'>{job.wireDrop ? job.wireDrop : 0}</div>
                        <div class='nested'>{job.panelInstall ? job.panelInstall : 0}</div>
                        <div class='nested'>{job.prewire1 ? job.prewire1 : 0}</div>
                        <div class='nested'>{job.prewire2 ? job.prewire2 : 0}</div>
                        <div class='nested'>{job.prewire3 ? job.prewire3 : 0}</div>
                        <div class='nested'>{job.alarmWire ? job.alarmWire : 0}</div>
                        <div class='nested'>{job.doorContactWire ? job.doorContactWire : 0}</div>
                        <div class='nested'>{job.audioZonePrewire ? job.audioZonePrewire : 0}</div>
                        <div class='nested'>{job.localGlobalAudio ? job.localGlobalAudio : 0}</div>
                        <div class='nested'>{job.surround51 ? job.surround51 : 0}</div>
                        <div class='nested'>{job.surround71 ? job.surround71 : 0}</div>
                        <div class='nested'>{job.CCTVPrewire ? job.CCTVPrewire : 0}</div>
                        <div class='nested'>{job.FPPWSameStud ? job.FPPWSameStud : 0}</div>
                        <div class='nested'>{job.FPPWSameWall ? job.FPPWSameWall : 0}</div>
                        <div class='nested'>{job.FPPWSameRoom ? job.FPPWSameRoom : 0}</div>
                        <div class='nested'>{job.FPPWRemote ? job.FPPWRemote : 0}</div>
                        <div class='nested'>{job.additionalHDMI ? job.additionalHDMI : 0}</div>
                        <div class='nested'>{job.vacuumOutlet ? job.vacuumOutlet : 0}</div>
                        <div class='nested'>{job.pipeAttic ? job.pipeAttic : 0}</div>
                        <div class='nested'>{job.pipeLocal ? job.pipeLocal : 0}</div>
                    </div>
                </div>
                :null}
                {job.aaStage == 'trim' ?
                <div className="grid-container">
                <div>
                <div class='nested'>
                    STRUCTURED WIRING - TRIM DESCRIPTION
                </div>
                <div class='nested'>
                    Termination of Cat5/6, RG6 keystone
                </div>
                <div class='nested'>
                    Blank Plate Installation
                </div>
                <div class='nested'>
                    Terminating LV Enclosure up to 12 wires
                </div>
                <div class='nested'>
                    Terminating LV Enclosure up to 25 wires
                </div>
                <div class='nested'>
                    Terminating LV Enclosure up to 50 wires
                </div>
                <div class='nested'>
                    Terminating door contact
                </div>
                <div class='nested'>
                    Terminating other alarm devices
                </div>
                <div class='nested'>
                    Terminating alarm panel
                </div>
                <div class='nested'>
                    Terminating zone expander (8-zone)
                </div>
                <div class='nested'>
                    Speaker Installation With Brackets (pair)
                </div>
                <div class='nested'>
                    Speaker Installation Without Brackets (pair)
                </div>
                <div class='nested'>
                    Outdoor Speakers Installation (pair)
                </div>
                <div class='nested'>
                    Digital Audio System
                </div>
                <div class='nested'>
                    Terminating 5.1-2 Surround (ceiling/wall)
                </div>
                <div class='nested'>
                    Terminating 7.1-2 Surround (ceiling/wall)
                </div>
                <div class='nested'>
                    Terminating Surround Plate
                </div>
                <div class='nested'>
                    Terminating Audio Keypad/VC/Source/TP
                </div>
                <div class='nested'>
                    Camera Installation & Positioning (per camera)
                </div>
                <div class='nested'>
                    NVR/DVR Trim & Installation
                </div>
                <div class='nested'>
                    Network Device Installation
                </div>
                <div class='nested'>
                    Network Switch Trim up to 8Port
                </div>
                <div class='nested'>
                    Network Switch Trim up to 16Port
                </div>
                <div class='nested'>
                    Network Switch Trim up to 24Port
                </div>
                <div class='nested'>
                    Vacuum Trim (outlets)
                </div>
                <div class='nested'>
                    Vacuum Trim Unit
                </div>
                </div>
                <div class='nested'>
                COST
                <div class='nested'>$3.00</div>
                <div class='nested'>$3.00</div>
                <div class='nested'>$35.00</div>
                <div class='nested'>$70.00</div>
                <div class='nested'>$125.00</div>
                <div class='nested'>$20.00</div>
                <div class='nested'>$15.00</div>
                <div class='nested'>$60.00</div>
                <div class='nested'>$30.00</div>
                <div class='nested'>$25.00</div>
                <div class='nested'>$45.00</div>
                <div class='nested'>$25.00</div>
                <div class='nested'>$40.00</div>
                <div class='nested'>$60.00</div>
                <div class='nested'>$90.00</div>
                <div class='nested'>$20.00</div>
                <div class='nested'>$15.00</div>
                <div class='nested'>$30.00</div>
                <div class='nested'>$45.00</div>
                <div class='nested'>$15.00</div>
                <div class='nested'>$30.00</div>
                <div class='nested'>$55.00</div>
                <div class='nested'>$80.00</div>
                <div class='nested'>$10.00</div>
                <div class='nested'>$55.00</div>
            </div>
            <div class='nested'>
                TOTAL
                <div class='nested'>{job.termWire}</div>
                <div class='nested'>{job.blank}</div>
                <div class='nested'>{job.panelTo12}</div>
                <div class='nested'>{job.panelTo25}</div>
                <div class='nested'>{job.panelTo50}</div>
                <div class='nested'>{job.doorContact}</div>
                <div class='nested'>{job.otherAlarms}</div>
                <div class='nested'>{job.alarmPanel}</div>
                <div class='nested'>{job.zoneExpander}</div>
                <div class='nested'>{job.spkrWBrackets}</div>
                <div class='nested'>{job.spkrNoBracket}</div>
                <div class='nested'>{job.outdoorSpkr}</div>
                <div class='nested'>{job.digitalAudio}</div>
                <div class='nested'>{job.surround51}</div>
                <div class='nested'>{job.surround71}</div>
                <div class='nested'>{job.surroundPlate}</div>
                <div class='nested'>{job.audioKPVC}</div>
                <div class='nested'>{job.camInstall}</div>
                <div class='nested'>{job.nvrDVR}</div>
                <div class='nested'>{job.networkDevice}</div>
                <div class='nested'>{job.switch8}</div>
                <div class='nested'>{job.switch16}</div>
                <div class='nested'>{job.switch24}</div>
                <div class='nested'>{job.vacOutlets}</div>
                <div class='nested'>{job.vacUnit}</div>
            </div>
            </div>
            :null}
                {job.aaStage == 'activation' ?
                <div className="grid-container">
                <div>
                <div class='nested'>
                    STRUCTURED WIRING - ROUGH-IN DESCRIPTION
                </div>
                <div class='nested'>
                    Cat5/6, RG6 Wire Drop
                </div>
                <div class='nested'>
                    Structural Panel Installation
                </div>
                <div class='nested'>
                    Distribution Prewire Option 1
                </div>
                <div class='nested'>
                    Distribution Prewire Option 2
                </div>
                <div class='nested'>
                    Distribution Prewire Option 3
                </div>
                <div class='nested'>
                    Alarm Wire Prewire
                </div>
                <div class='nested'>
                    Alarm Door Contact Prewire
                </div>
                <div class='nested'>
                    Audio Distribution Per Zone (Pair) Prewire
                </div>
                <div class='nested'>
                    Local/Global Audio Source
                </div>
                <div class='nested'>
                    5.1-2 Surround Prewire
                </div>
                <div class='nested'>
                    7.1-2 Surround Prewire
                </div>
                <div class='nested'>
                    CCTV Prewire (Cat5/6) Prewire
                </div>
                <div class='nested'>
                    FPPW - Same Stud Bay (Up To 10') - HDMI, (1) RG6, (2) CAT5e
                </div>
                <div class='nested'>
                    FPPW - Same Wall (up to 35') - HDMI, (1) RG6, (2) CAT5e
                </div>
                <div class='nested'>
                    FPPW - Same Room (Up To 50') - HDMI, (1) RG6, (2) CAT5e
                </div>
                <div class='nested'>
                    FPPW - Remote (Over 50') - (1) HD Balun Set, (1) RG6, (3) CAT5e
                </div>
                <div class='nested'>
                    Additional HDMI (Up To 50")
                </div>
                <div class='nested'>
                    Vacuum Rough (Per Outlet) - Rough
                </div>
                <div class='nested'>
                    Chase Pipe - Attic
                </div>
                <div class='nested'>
                    Chase Pipe - Local
                </div>
                </div>
                <div class='nested'>
                    COST
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$25.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$45.00</div>
                    <div class='nested'>$60.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$20.00</div>
                    <div class='nested'>$35.00</div>
                    <div class='nested'>$25.00</div>
                    <div class='nested'>$75.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$20.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$25.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$60.00</div>
                    <div class='nested'>$10.00</div>
                    <div class='nested'>$55.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$30.00</div>
                </div>
                <div class='nested'>
                    TOTAL
                    <div class='nested'>{job.wireDrop ? job.wireDrop : 0}</div>
                    <div class='nested'>{job.panelInstall ? job.panelInstall : 0}</div>
                    <div class='nested'>{job.prewire1 ? job.prewire1 : 0}</div>
                    <div class='nested'>{job.prewire2 ? job.prewire2 : 0}</div>
                    <div class='nested'>{job.prewire3 ? job.prewire3 : 0}</div>
                    <div class='nested'>{job.alarmWire ? job.alarmWire : 0}</div>
                    <div class='nested'>{job.doorContactWire ? job.doorContactWire : 0}</div>
                    <div class='nested'>{job.audioZonePrewire ? job.audioZonePrewire : 0}</div>
                    <div class='nested'>{job.localGlobalAudio ? job.localGlobalAudio : 0}</div>
                    <div class='nested'>{job.surround51 ? job.surround51 : 0}</div>
                    <div class='nested'>{job.surround71 ? job.surround71 : 0}</div>
                    <div class='nested'>{job.CCTVPrewire ? job.CCTVPrewire : 0}</div>
                    <div class='nested'>{job.FPPWSameStud ? job.FPPWSameStud : 0}</div>
                    <div class='nested'>{job.FPPWSameWall ? job.FPPWSameWall : 0}</div>
                    <div class='nested'>{job.FPPWSameRoom ? job.FPPWSameRoom : 0}</div>
                    <div class='nested'>{job.FPPWRemote ? job.FPPWRemote : 0}</div>
                    <div class='nested'>{job.additionalHDMI ? job.additionalHDMI : 0}</div>
                    <div class='nested'>{job.vacuumOutlet ? job.vacuumOutlet : 0}</div>
                    <div class='nested'>{job.pipeAttic ? job.pipeAttic : 0}</div>
                    <div class='nested'>{job.pipeLocal ? job.pipeLocal : 0}</div>
                </div>
            </div>
                :null}
            </div>
            :null}
        </div>

    )
}

export default HistoryJob