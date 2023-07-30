import React from "react";
import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

function Trim() {

    const [tech, setTech] = useState('')
    const [date, setDate] = useState('')
    const [timeIn, setTimeIn] = useState('')
    const [timeOut, setTimeOut] = useState('')
    const [job, setJob] = useState('')
    const [termWire, setTermWire] = useState('')
    const [blank, setBlank] = useState('')
    const [panelTo12, setPanelTo12] = useState('')
    const [panelTo25, setPanelTo25] = useState('')
    const [panelTo50, setPanelTo50] = useState('')
    const [doorContact, setDoorContact] = useState('')
    const [otherAlarms, setOtherAlarms] = useState('')
    const [alarmPanel, setAlarmPanel] = useState('')
    const [zoneExpander, setZoneExpander] = useState('')
    const [spkrWBrackets, setSpkrWBrackets] = useState('')
    const [spkrNoBracket, setSpkrNoBracket] = useState('')
    const [outdoorSpkr, setOutdoorSpkr] = useState('')
    const [digitalAudio, setDigitalAudio] = useState('')
    const [surround51, setSurround51] = useState('')
    const [surround71, setSurround71] = useState('')
    const [surroundPlate, setSurroundPlate] = useState('')
    const [audioKPVC, setAudioKPVC] = useState('')
    const [camInstall, setCamInstall] = useState('')
    const [nvrDVR, SetNVRDVR] = useState('')
    const [networkDevice, setNetworkDevice] = useState('')
    const [switch8, setSwitch8] = useState('')
    const [switch16, setSwitch16] = useState('')
    const [switch24, setSwitch24] = useState('')
    const [vacOutlets, setVacOutlets] = useState('')
    const [vacUnit, setVacUnit] = useState('')

    return(
        <div>
            <div>
                Job
                <input onChange={(e) => setJob(e.target.value)}></input>
                Date
                <input onChange={(e) => setDate(e.target.value)} />
                Technician
                <input onChange={(e) => setTech(e.target.value)}/>
                Time In
                <input onChange={(e) => setTimeIn(e.target.value)}/>
                Time Out
                <input onChange={(e) => setTimeOut(e.target.value)}/>
            </div>

        <div class='grid-container'>
            
            <div >
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
                SOLD
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
            </div>
            <div class='nested'>
                INSTALLED
                <div class='nested' onChange={(e) => setTermWire(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setBlank(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setPanelTo12(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setPanelTo25(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setPanelTo50(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setDoorContact(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setOtherAlarms(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setAlarmPanel(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setZoneExpander(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSpkrWBrackets(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSpkrNoBracket(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setOutdoorSpkr(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setDigitalAudio(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSurround51(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSurround71(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSurroundPlate(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setAudioKPVC(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setCamInstall(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => SetNVRDVR(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setNetworkDevice(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSwitch8(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSwitch16(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setSwitch24(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setVacOutlets(e.target.value)}><input class='nested-input'/></div>
                <div class='nested' onChange={(e) => setVacUnit(e.target.value)}><input class='nested-input'/></div>
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
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
                <div class='nested'><input class='nested-input'/></div>
            </div>
        </div>
        </div>
    )
}

export default Trim