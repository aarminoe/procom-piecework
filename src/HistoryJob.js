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
                <div class='nested'>
                    DESCRIPTION
                    <div class='nested'>ClareOne TechConnect Package</div>
                    <div class='nested'>-</div>
                    <div class='nested'>ClareOne Safe and Secure Package (2)DC, (1GB), (1) Water, (1) PIR</div>
                    <div class='nested'>ClareOne Auxiliary TouchPanel</div>
                    <div class='nested'>ClareOne Mini Door/Window Contact</div>
                    <div class='nested'>ClareOne Glass Break Sensor</div>
                    <div class='nested'>ClareOne PIR Motion Detector (Pet Immune to 55 lbs.)</div>
                    <div class='nested'>ClareOne Smoke/Heat Detectors</div>
                    <div class='nested'>ClareOne Sump Pump Water Sensor</div>
                    <div class='nested'>ClareOne Pendant Panic Button</div>
                    <div class='nested'>ClareOne Carbon Monoxide Detector</div>
                    <div class='nested'>Basic Interactive (No Security)</div>
                    <div class='nested'>Interactive (Self Monitoring)</div>
                    <div class='nested'>Interactive Plus IP only</div>
                    <div class='nested'>Interactive Plus LTE + IP Backup</div>
                    <div class='nested'>Video Doorbell</div>
                    <div class='nested'>Sonos Single Zone Music System w/ In-Ceiling Speakers</div>
                    <div class='nested'>Sonos SoundBar Music System (No Subwoofer)</div>
                    <div class='nested'>Sonos Soundbar Music System w/ Subwoofer</div>
                    <div class='nested'>Sonos Surround Sound Music System w/ Klipsch Speakers (No Subwoofer)</div>
                    <div class='nested'>Sonos Surround Music System w/ Klipsch Speakers, Subwoofer and Sonos Amp</div>
                    <div class='nested'>ClareOne Smart Lighting Package 2+2+2</div>
                    <div class='nested'>Pulte Smart Home Option 1 (Single WAP)</div>
                    <div class='nested'>Pulte Smart Home Option 1 (Two WAPs)</div>
                    <div class='nested'>Del Webb Smart Home Option 1 (Single WAP)</div>
                    <div class='nested'>Del Webb Smart Home Option 1 (Two WAPs)</div>
                    <div class='nested'>Home Away - (3 DC, 1 Motion Detector, Garage Opener and Smart Lock By Others)</div>
                    <div class='nested'>House WiFi Package: (2) WAP UniFi, (1) Power Conditioner, (1) 8-Port Switch with 4 PoE Ports</div>
                    <div class='nested'>Wireless Access Point (No Wiring Included)</div>
                    <div class='nested'>OutDoor Wireless Access Point - UniFi</div>
                    <div class='nested'>Central Vacuum Solution #1B - 4 Inlets, Kit With Power Head and Hose</div>
                    <div class='nested'>Central Vacuum Solution #2B - 6 Inlets, kit with Power Head and Hose</div>
                    <div class='nested'>Camera For CCTV Zuum Media System (Including Wiring, PoE Injector, No NVR)</div>
                    <div class='nested'>CCTV Zuum Media System - (NVR with 4 TB HDD + 4 CCTV 4.0 MP IP Cameras)</div>
                    <div class='nested'>Clare Camera 2MP For CCTV System (Including Wiring, PoE Injector, 16GB Storage, No NVR)</div>
                    <div class='nested'>Clare Camera 4MP For CCTV System (Including Wiring PoE Injector, 32GB Storage, No NVR)</div>
                    <div class='nested'>Clare CCTV System - (NVR 4-ch with 1TB HDD + 4CCTV 2.0 MP IP Cameras)</div>
                    <div class='nested'>Clare CCTV System - (NVR 8-ch with 2TB HDD + 4CCTV 4.0 MP IP Cameras)</div>
                    <div class='nested'>Up To 65" TV Wallmount Installation</div>
                    <div class='nested'>Soundbar Wallmount Installation</div>
                </div>
                <div class='nested'>
                    ACTIVATION
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$75.00</div>
                    <div class='nested'>$25.00</div>
                    <div class='nested'>$10.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$10.00</div>
                    <div class='nested'>$15.00</div>
                    <div class='nested'>$ -</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$80.00</div>
                    <div class='nested'>$80.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$75.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$80.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$30.00</div>
                    <div class='nested'>$80.00</div>
                    <div class='nested'>$80.00</div>
                    <div class='nested'>$55.00</div>
                    <div class='nested'>$25.00</div>
                </div>
                <div class='nested'>
                    ALONE ACTIVATION
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>$20.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$50.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>$100.00</div>
                    <div class='nested'>-</div>
                    <div class='nested'>-</div>
                </div>
                <div class='nested'>
                    TOTAL
                    <div class='nested'>{job.n100502}</div>
                    <div class='nested'>{job.n102501}</div>
                    <div class='nested'>{job.n102520}</div>
                    <div class='nested'>{job.n102523}</div>
                    <div class='nested'>{job.n102526}</div>
                    <div class='nested'>{job.n102528}</div>
                    <div class='nested'>{job.n102532}</div>
                    <div class='nested'>{job.n102534}</div>
                    <div class='nested'>{job.n102542}</div>
                    <div class='nested'>{job.n102543}</div>
                    <div class='nested'>{job.n102590}</div>
                    <div class='nested'>{job.n102592}</div>
                    <div class='nested'>{job.n102593}</div>
                    <div class='nested'>{job.n102595}</div>
                    <div class='nested'>{job.n103101}</div>
                    <div class='nested'>{job.n104461}</div>
                    <div class='nested'>{job.n104462}</div>
                    <div class='nested'>{job.n104463}</div>
                    <div class='nested'>{job.n104464}</div>
                    <div class='nested'>{job.n104465}</div>
                    <div class='nested'>{job.n107101}</div>
                    <div class='nested'>{job.n108201}</div>
                    <div class='nested'>{job.n108806}</div>
                    <div class='nested'>{job.n108806Two}</div>
                    <div class='nested'>{job.n108807}</div>
                    <div class='nested'>{job.n108807Two}</div>
                    <div class='nested'>{job.n109905}</div>
                    <div class='nested'>{job.n109917}</div>
                    <div class='nested'>{job.n109918}</div>
                    <div class='nested'>{job.n110011}</div>
                    <div class='nested'>{job.n110021}</div>
                    <div class='nested'>{job.n111115}</div>
                    <div class='nested'>{job.n111123}</div>
                    <div class='nested'>{job.n111101}</div>
                    <div class='nested'>{job.n111102}</div>
                    <div class='nested'>{job.n111105}</div>
                    <div class='nested'>{job.n111106}</div>
                    <div class='nested'>{job.tvWallmount}</div>
                    <div class='nested'>{job.soundbarWallmount}</div>
                </div>
            </div>
                :null}
            </div>
            :null}
        </div>

    )
}

export default HistoryJob