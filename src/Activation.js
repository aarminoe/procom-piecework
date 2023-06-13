import React, { useState } from "react";
import { useActivationState } from "./activationState";

function Activation() {
    

    const {
        tech, setTech,
        date, setDate,
        timeIn, setTimeIn,
        timeOut, setTimeOut,
        job, setJob,
        n100502, setN100502,
        n102501, setN102501,
        n102520, setN102520,
        n102523, setN102523,
        n102526, setN102526,
        n102528, setN102528,
        n102532, setN102532,
        n102534, setN102534,
        n102542, setN102542,
        n102543, setN102543,
        n102590, setN102590,
        n102592, setN102592,
        n102593, setN102593,
        n102595, setN102595,
        n103101, setN103101,
        n104461, setN104461,
        n104462, setN104462,
        n104463, setN104463,
        n104464, setN104464,
        n104465, setN104465,
        n107101, setN107101,
        n108806, setN108806,
        n108806Two, setN108806Two,
        n108807, setN108807,
        n108807Two, setN108807Two,
        n108201, setN108201,
        n109905, setN109905,
        n109917, setN109917,
        n109918, setN109918,
        n110011, setN110011,
        n110021, setN110021,
        n111115, setN111115,
        n111123, setN111123,
        n111101, setN111101,
        n111102, setN111102,
        n111105, setN111105,
        n111106, setN111106,
        tvWallmount, setTvWallmount,
        soundbarWallmount, setSoundbarWallmount
    } = useActivationState()

    function handleActivationTicket(e) {
        e.preventDefault()
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
                n100502: n100502 != '' ? n100502 : null,
                n102501: n102501 != '' ? n102501 : null,

            })
          })
          .then(res => res.json())
          .then(data => console.log(data))
    }

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
            <div class='grid-container-activ'>
                <div >
                    <div class='nested'>
                        CODE
                    </div>
                    <div class='nested'>
                        100502
                    </div>
                    <div class='nested'>
                    -
                    </div>
                    <div class='nested'>
                        102501
                    </div>
                    <div class='nested'>
                        102520
                    </div>
                    <div class='nested'>
                        102523
                    </div>
                    <div class='nested'>
                        102526
                    </div>
                    <div class='nested'>
                        102528
                    </div>
                    <div class='nested'>
                        102532
                    </div>
                    <div class='nested'>
                        102534
                    </div>
                    <div class='nested'>
                        102542
                    </div>
                    <div class='nested'>
                        102543
                    </div>
                    <div class='nested'>
                        102590
                    </div>
                    <div class='nested'>
                        102592
                    </div>
                    <div class='nested'>
                        102593
                    </div>
                    <div class='nested'>
                        102595
                    </div>
                    <div class='nested'>
                        103101
                    </div>
                    <div class='nested'>
                        104461
                    </div>
                    <div class='nested'>
                        104462
                    </div>
                    <div class='nested'>
                        104463
                    </div>
                    <div class='nested'>
                        104464
                    </div>
                    <div class='nested'>
                        104465
                    </div>
                    <div class='nested'>
                        107101
                    </div>
                    <div class='nested'>
                        108806
                    </div>
                    <div class='nested'>
                        108806
                    </div>
                    <div class='nested'>
                        108807
                    </div>
                    <div class='nested'>
                        108807
                    </div>
                    <div class='nested'>
                        108201
                    </div>
                    <div class='nested'>
                        109905
                    </div>
                    <div class='nested'>
                        109917
                    </div>
                    <div class='nested'>
                        109918
                    </div>
                    <div class='nested'>
                        110011
                    </div>
                    <div class='nested'>
                        110021
                    </div>
                    <div class='nested'>
                        111115
                    </div>
                    <div class='nested'>
                        111123
                    </div>
                    <div class='nested'>
                        111101
                    </div>
                    <div class='nested'>
                        111102
                    </div>
                    <div class='nested'>
                        111105
                    </div>
                    <div class='nested'>
                        111106
                    </div>
                    <div class='nested'>
                        -
                    </div>
                    <div class='nested'>
                        -
                    </div>
                </div>
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
                <form onSubmit={handleActivationTicket} class='nested'>
                    <button>Submit</button>
                    TOTAL
                    <div class='nested' onChange={(e) => setN100502(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN100502(e.target.value)}>-<input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102501(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102520(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102523(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102526(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102528(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102532(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102534(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102542(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102543(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102590(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102592(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102593(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN102595(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN103101(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN104461(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN104462(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN104463(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN104464(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN104465(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN107101(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN108201(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN108806(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN108806Two(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN108807(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN108807Two(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN109905(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN109917(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN109918(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN110011(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN110021(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111115(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111123(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111101(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111102(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111105(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setN111106(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setTvWallmount(e.target.value)}><input class='nested-input'/></div>
                    <div class='nested' onChange={(e) => setSoundbarWallmount(e.target.value)}><input class='nested-input'/></div>
                    
                </form>
            </div>
        </div>
    )
}

export default Activation