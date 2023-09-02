import React from "react";
import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

function Rough() {

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [tech, setTech] = useState('')
    const [timeIn, setTimeIn] = useState('')
    const [date, setDate] = useState('')
    const [timeOut, setTimeOut] = useState('')
    const [job, setJob] = useState('')
    const [wireDrop, setWireDrop] = useState('')
    const [panelInstall, setPanelInstall] = useState('')
    const [prewire1, setPrewire1] = useState('')
    const [prewire2, setPrewire2] = useState('')
    const [prewire3, setPrewire3] = useState('')
    const [alarmWire, setAlarmWire] = useState('')
    const [doorContactWire, setDoorContactWire] = useState('')
    const [audioZonePrewire, setAudioZonePrewire] = useState('')
    const [localGlobalAudio, setLocalGlobalAudio] = useState('')
    const [surround51Rough, setSurround51Rough] = useState('')
    const [surround71Rough, setSurround71Rough] = useState('')
    const [CCTVPrewire, setCCTVPrewire] = useState('')
    const [FPPWSameStud , setFPPWSameStud] = useState('')
    const [FPPWSameWall, setFPPWSameWall] = useState('')
    const [FPPWSameRoom, setFPPWSameRoom] = useState('')
    const [FPPWRemote, setFPPWRemote] = useState('')
    const [additionalHDMI, setAdditionalHDMI] = useState('')
    const [vacuumOutlet, setVacuumOutlet] = useState('')
    const [pipeAttic, setPipeAttic] = useState('')
    const [pipeLocal, setPipeLocal] = useState('')
    const totalWireDrop = 15
    const totalPanelInstall = 25
    const totalPrewire1 = 30
    const totalPrewire2 = 45
    const totalPrewire3 = 60
    const totalAlarmWire = 15
    const totalDoorContactWire = 20
    const totalAudioZonePrewire = 35
    const totalLocalGlobalAudio = 25
    const totalSurround51Rough = 75
    const totalSurround71Rough = 100
    const totalCCTVPrewire = 20
    const totalFPPWSameStud = 15
    const totalFPPWSameWall = 25
    const totalFPPWSameRoom = 50
    const totalFPPWRemote = 60
    const totalAdditionalHDMI = 10 
    const totalVacuumOutlet = 55
    const totalPipeAttic = 50
    const totalPipeLocal = 30
    const toPayRough = (
        (wireDrop * totalWireDrop) + (totalPanelInstall * panelInstall) + (totalPrewire1 * prewire1) + (totalPrewire2 * prewire2) + (totalPrewire3 * prewire3) + (totalAlarmWire * alarmWire) + (totalDoorContactWire * doorContactWire) + (totalAudioZonePrewire * audioZonePrewire) + (totalLocalGlobalAudio * localGlobalAudio) + (totalSurround51Rough * surround51Rough) + (totalSurround71Rough * surround71Rough) + (totalCCTVPrewire * CCTVPrewire) + (totalFPPWSameRoom * FPPWSameRoom) + (totalFPPWSameStud * FPPWSameStud) + (totalFPPWSameWall * FPPWSameWall) + (totalFPPWRemote * FPPWRemote) + (totalAdditionalHDMI * additionalHDMI) + (totalVacuumOutlet * vacuumOutlet) + (totalPipeAttic * pipeAttic) + (totalPipeLocal * pipeLocal)
    )

    function handleRoughTicket(e) {
        e.preventDefault()
        if (tech == '' || job == '' || date == '') {
            setError(true)
            setSuccess(false)
            return
        }
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
            wireDrop: wireDrop !== '' ? wireDrop : null,
            panelInstall: panelInstall !== '' ? panelInstall : null,
            prewire1: prewire1 !== '' ? prewire1 : null,
            prewire2: prewire2 !== '' ? prewire2 : null,
            prewire3: prewire3 !== '' ? prewire3 : null,
            alarmWire: alarmWire !== '' ? alarmWire : null,
            doorContactWire: doorContactWire !== '' ? doorContactWire : null,
            audioZonePrewire: audioZonePrewire !== '' ? audioZonePrewire : null,
            localGlobalAudio: localGlobalAudio !== '' ? localGlobalAudio : null,
            surround51: surround51Rough !== '' ? surround51Rough : null,
            surround71: surround71Rough !== '' ? surround71Rough : null,
            CCTVPrewire: CCTVPrewire !== '' ? CCTVPrewire : null,
            FPPWSameStud: FPPWSameStud !== '' ? FPPWSameStud : null,
            FPPWSameWall: FPPWSameWall !== '' ? FPPWSameWall : null,
            FPPWSameRoom: FPPWSameRoom !== '' ? FPPWSameRoom : null,
            FPPWRemote: FPPWRemote !== '' ? FPPWRemote : null,
            additionalHDMI: additionalHDMI !== '' ? additionalHDMI : null,
            vacuumOutlet: vacuumOutlet !== '' ? vacuumOutlet : null,
            pipeAttic: pipeAttic !== '' ? pipeAttic : null,
            pipeLocal: pipeLocal !== '' ? pipeLocal : null,
            aaToPay: toPayRough
          })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSuccess(true)
            setError(false)
            setJob('')
            setDate('')
            setTech('')
            setWireDrop('')
            setPanelInstall('')
            setPrewire1('')
            setPrewire2('')
            setPrewire3('')
            setAlarmWire('')
            setDoorContactWire('')
            setAudioZonePrewire('')
            setLocalGlobalAudio('')
            setSurround51Rough('')
            setSurround71Rough('')
            setCCTVPrewire('')
            setFPPWSameStud('')
            setFPPWSameWall('')
            setFPPWSameRoom('')
            setFPPWRemote('')
            setAdditionalHDMI('')
            setVacuumOutlet('')
            setPipeAttic('')
            setPipeLocal('')
        });
    }
      
    
    return(
        <form onSubmit={handleRoughTicket}>
            <div>
                Job
                <input value={job} onChange={(e) => setJob(e.target.value)}></input>
                Date
                <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
                Technician
                <input value={tech} onChange={(e) => setTech(e.target.value)}/>
                Time In
                <input value={timeIn} onChange={(e) => setTimeIn(e.target.value)}/>
                Time Out
                <input value={timeOut} onChange={(e) => setTimeOut(e.target.value)}/>
            </div>

            <div class="grid-container">
                <div >
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
                </div>
                <div class='nested'>
                    INSTALLED
                    <div class='nested'  onChange={(e) => setWireDrop(e.target.value)}><input value={wireDrop}class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setPanelInstall(e.target.value)}><input value={panelInstall} class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setPrewire1(e.target.value)}><input value={prewire1}  class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setPrewire2(e.target.value)}><input value={prewire2}class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setPrewire3(e.target.value)}><input value={prewire3}class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setAlarmWire(e.target.value)}><input value={alarmWire}class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setDoorContactWire(e.target.value)}><input value={doorContactWire} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setAudioZonePrewire(e.target.value)}><input value={audioZonePrewire} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setLocalGlobalAudio(e.target.value)}><input value={localGlobalAudio} class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setSurround51Rough(e.target.value)}><input value={surround51Rough} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setSurround71Rough(e.target.value)}><input value={surround71Rough} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setCCTVPrewire(e.target.value)}><input value={CCTVPrewire} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setFPPWSameStud(e.target.value)}><input value={FPPWSameStud}class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setFPPWSameWall(e.target.value)}><input value={FPPWSameWall} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setFPPWSameRoom(e.target.value)}><input value={FPPWSameRoom}class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setFPPWRemote(e.target.value)}><input value={FPPWRemote}class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setAdditionalHDMI(e.target.value)}><input value={additionalHDMI}class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setVacuumOutlet(e.target.value)}><input value={vacuumOutlet} class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setPipeAttic(e.target.value)}><input value={pipeAttic} class='nested-input'/></div>
                    <div class='nested'  onChange={(e) => setPipeLocal(e.target.value)}><input value={pipeLocal}class='nested-input'/></div>
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
                    <div class='nested'>${wireDrop * 15}</div>
                    <div class='nested'>${panelInstall * 25}</div>
                    <div class='nested'>${prewire1 * 30}</div>
                    <div class='nested'>${prewire2 * 45}</div>
                    <div class='nested'>${prewire3 * 60}</div>
                    <div class='nested'>${alarmWire * 15}</div>
                    <div class='nested'>${doorContactWire * 20}</div>
                    <div class='nested'>${audioZonePrewire * 35}</div>
                    <div class='nested'>${localGlobalAudio * 25}</div>
                    <div class='nested'>${surround51Rough * 75}</div>
                    <div class='nested'>${surround71Rough * 100}</div>
                    <div class='nested'>${CCTVPrewire * 20}</div>
                    <div class='nested'>${FPPWSameStud * 15}</div>
                    <div class='nested'>${FPPWSameWall * 25}</div>
                    <div class='nested'>${FPPWSameRoom * 50}</div>
                    <div class='nested'>${FPPWRemote * 60}</div>
                    <div class='nested'>${additionalHDMI * 10}</div>
                    <div class='nested'>${vacuumOutlet * 55}</div>
                    <div class='nested'>${pipeAttic * 50}</div>
                    <div class='nested'>${pipeLocal * 30}</div>
                    <div class='nested'>${toPayRough}</div>
                </div>
            </div>
            <div>
                <button>Submit</button>
                {error ? <div className="error">Job, Date, or Technician Input Missing</div> : null}
                {success ? <div className="success">Job Successfully Sent!</div> : null}
            </div>
        </form>
    )
}

export default Rough