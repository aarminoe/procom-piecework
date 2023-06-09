import React from "react";
import { useState } from "react";

function Rough() {

    const [wireDrop, setWireDrop] = useState('')
    const [panelInstall, setPanelInstall] = useState('')
    const [prewire1, setPrewire1] = useState('')
    const [prewire2, setPrewire2] = useState('')
    const [prewire3, setPrewire3] = useState('')
    const [alarmWire, setAlarmWire] = useState('')
    const [doorContactWire, setDoorContactWire] = useState('')
    const [audioZonePrewire, setAudioZonePrewire] = useState('')
    const [localGlobalAudio, setLocalGlobalAudio] = useState('')
    const [surround51, setSurround51] = useState('')
    const [surround71, setSurround71] = useState('')
    const [CCTVPrewire, setCCTVPrewire] = useState('')
    const [FPPWSameStud , setFPPWSameStud] = useState('')
    const [FPPWSameWall, setFPPWSameWall] = useState('')
    const [FPPWSameRoom, setFPPWSameRoom] = useState('')
    const [FPPWRemote, setFPPWRemote] = useState('')
    const [additionalHDMI, setAdditionalHDMI] = useState('')
    const [vacuumOutlet, setVacuumOutlet] = useState('')
    const [pipeAttic, setPipeAttic] = useState('')
    const [pipeLocal, setPipeLocal] = useState('')

    function handleActivationTicket(e) {
        e.preventDefault();
        fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/jobs', {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tech: tech,
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
            surround51: surround51 !== '' ? surround51 : null,
            surround71: surround71 !== '' ? surround71 : null,
            CCTVPrewire: CCTVPrewire !== '' ? CCTVPrewire : null,
            FPPWSameStud: FPPWSameStud !== '' ? FPPWSameStud : null,
            FPPWSameWall: FPPWSameWall !== '' ? FPPWSameWall : null,
            FPPWSameRoom: FPPWSameRoom !== '' ? FPPWSameRoom : null,
            FPPWRemote: FPPWRemote !== '' ? FPPWRemote : null,
            additionalHDMI: additionalHDMI !== '' ? additionalHDMI : null,
            vacuumOutlet: vacuumOutlet !== '' ? vacuumOutlet : null,
            pipeAttic: pipeAttic !== '' ? pipeAttic : null,
            pipeLocal: pipeLocal !== '' ? pipeLocal : null,
          })
        })
        .then(res => res.json())
        .then(data => console.log(data));
      }
      
    
    return(
        <div>

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
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Rough