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
    const [totalTermWire, setTotalTermWire] = useState(3)
    const [totalBlank, setTotalBlank] = useState(3)
    const [totalPanelTo12, setTotalPanelTo12] = useState(35)
    const [totalPanelTo25, setTotalPanelTo25] = useState(70)
    const [totalPanelTo50, setTotalPanelTo50] = useState(125)
    const [totalDoorContact, setTotalDoorContact] = useState(20)
    const [totalOtherAlarms, setTotalOtherAlarms] = useState(15)
    const [totalAlarmPanel, setTotalAlarmPanel] = useState(60)
    const [totalZoneExpander, setTotalZoneExpander] = useState(30)
    const [totalSpkrWBrackets, setTotalSpkrWBrackets] = useState(25)
    const [totalSpkrNoBracket, setTotalSpkrNoBracket] = useState(45)
    const [totalOutdoorSpkr, setTotalOutdoorSpkr] = useState(25)
    const [totalDigitalAudio, setTotalDigitalAudio] = useState(40)
    const [totalSurround51, setTotalSurround51] = useState(60)
    const [totalSurround71, setTotalSurround71] = useState(90)
    const [totalSurroundPlate, setTotalSurroundPlate] = useState(20)
    const [totalAudioKPVC, setTotalAudioKPVC] = useState(15)
    const [totalCamInstall, setTotalCamInstall] = useState(30)
    const [totalNVRDVR, setTotalNVRDVR] = useState(45)
    const [totalNetworkDevice, setTotalNetworkDevice] = useState(15)
    const [totalSwitch8, setTotalSwitch8] = useState(30)
    const [totalSwitch16, setTotalSwitch16] = useState(55)
    const [totalSwitch24, setTotalSwitch24] = useState(80)
    const [totalVacOutlets, setTotalVacOutlets] = useState(10)
    const [totalVacUnit, setTotalVacUnit] = useState(55)

    const toPay = (
            (termWire * totalTermWire) +
            (blank * totalBlank) +
            (panelTo12 * totalPanelTo12) +
            (panelTo25 * totalPanelTo25) +
            (panelTo50 * totalPanelTo50) +
            (doorContact * totalDoorContact) +
            (otherAlarms * totalOtherAlarms) +
            (alarmPanel * totalAlarmPanel) +
            (zoneExpander * totalZoneExpander) +
            (spkrWBrackets * totalSpkrWBrackets) +
            (spkrNoBracket * totalSpkrNoBracket) +
            (outdoorSpkr * totalOutdoorSpkr) +
            (digitalAudio * totalDigitalAudio) +
            (surround51 * totalSurround51) +
            (surround71 * totalSurround71) +
            (surroundPlate * totalSurroundPlate) +
            (audioKPVC * totalAudioKPVC) +
            (camInstall * totalCamInstall) +
            (nvrDVR * totalNVRDVR) +
            (networkDevice * totalNetworkDevice) +
            (switch8 * totalSwitch8) +
            (switch16 * totalSwitch16) +
            (switch24 * totalSwitch24) +
            (vacOutlets * totalVacOutlets) +
            (vacUnit * totalVacUnit)
    )

    function handleTrimTicket(e) {
        e.preventDefault()
        if (tech == '') return "No Tech Found"
        fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/jobs', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: uuidv4(),
            aaTech: tech,
            date: date,
            time_in: timeIn,
            time_out: timeOut,
            job: job,
            termWire: termWire !== '' ? termWire : null,
            blank: blank !== '' ? blank : null,
            panelTo12: panelTo12 !== '' ? panelTo12 : null,
            panelTo25: panelTo25 !== '' ? panelTo25 : null,
            panelTo50: panelTo50 !== '' ? panelTo50 : null,
            doorContact: doorContact !== '' ? doorContact : null,
            otherAlarms: otherAlarms !== '' ? otherAlarms : null,
            alarmPanel: alarmPanel !== '' ? alarmPanel : null,
            zoneExpander: zoneExpander !== '' ? zoneExpander : null,
            surround51: surround51 !== '' ? surround51 : null,
            surround71: surround71 !== '' ? surround71 : null,
            spkrNoBracket: spkrNoBracket !== '' ? spkrNoBracket : null,
            spkrWBrackets: spkrWBrackets !== '' ? spkrWBrackets : null,
            outdoorSpkr: outdoorSpkr !== '' ? outdoorSpkr : null,
            digitalAudio: digitalAudio !== '' ? digitalAudio : null,
            surroundPlate: surroundPlate !== '' ? surroundPlate : null,
            audioKPVC: audioKPVC !== '' ? audioKPVC : null,
            camInstall: camInstall !== '' ? camInstall : null,
            nvrDVR: nvrDVR !== '' ? nvrDVR : null,
            networkDevice: networkDevice !== '' ? networkDevice : null,
            switch8: switch8 !== '' ? switch8 : null,
            switch16: switch16 !== '' ? switch16 : null,
            switch24: switch24 !== '' ? switch24 : null,
            vacOutlets: vacOutlets !== '' ? vacOutlets : null,
            vacUnit: vacUnit !== '' ? vacUnit : null,
          })
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
      

    return(
        <form onSubmit={handleTrimTicket}>
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
                <div class='nested'>${termWire * totalTermWire}</div>
                <div class='nested'>${blank * totalBlank}</div>
                <div class='nested'>${panelTo12 * totalPanelTo12}</div>
                <div class='nested'>${panelTo25 * totalPanelTo25}</div>
                <div class='nested'>${panelTo50 * totalPanelTo50}</div>
                <div class='nested'>${doorContact * totalDoorContact}</div>
                <div class='nested'>${otherAlarms * totalOtherAlarms}</div>
                <div class='nested'>${alarmPanel * totalAlarmPanel}</div>
                <div class='nested'>${zoneExpander * totalZoneExpander}</div>
                <div class='nested'>${spkrWBrackets * totalSpkrWBrackets}</div>
                <div class='nested'>${spkrNoBracket * totalSpkrNoBracket}</div>
                <div class='nested'>${outdoorSpkr * totalOutdoorSpkr}</div>
                <div class='nested'>${digitalAudio * totalDigitalAudio}</div>
                <div class='nested'>${surround51 * totalSurround51}</div>
                <div class='nested'>${surround71 * totalSurround71}</div>
                <div class='nested'>${surroundPlate * totalSurroundPlate}</div>
                <div class='nested'>${audioKPVC * totalAudioKPVC}</div>
                <div class='nested'>${camInstall * totalCamInstall}</div>
                <div class='nested'>${nvrDVR * totalNVRDVR}</div>
                <div class='nested'>${networkDevice * totalNetworkDevice}</div>
                <div class='nested'>${switch8 * totalSwitch8}</div>
                <div class='nested'>${switch16 * totalSwitch16}</div>
                <div class='nested'>${switch24 * totalSwitch24}</div>
                <div class='nested'>${vacOutlets * totalVacOutlets}</div>
                <div class='nested'>${vacUnit * totalVacUnit}</div>
                <div class='nested'>${toPay}</div>
            </div>
        </div>
        </div>
        <button>Submit</button>
        </form>
    )
}

export default Trim