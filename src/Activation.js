import React, { useState } from "react";
import { useActivationState } from "./activationState";
const { v4: uuidv4 } = require('uuid');


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
        soundbarWallmount, setSoundbarWallmount,
        totalN100502,
        setTotalN100502,
        totalN102501,
        setTotalN102501,
        totalN102520,
        setTotalN102520,
        totalN102523,
        setTotalN102523,
        totalN102526,
        setTotalN102526,
        totalN102528,
        setTotalN102528,
        totalN102532,
        setTotalN102532,
        totalN102534,
        setTotalN102534,
        totalN102542,
        setTotalN102542,
        totalN102543,
        setTotalN102543,
        totalN102590,
        setTotalN102590,
        totalN102592,
        setTotalN102592,
        totalN102593,
        setTotalN102593,
        totalN102595,
        setTotalN102595,
        totalN103101,
        setTotalN103101,
        totalN104461,
        setTotalN104461,
        totalN104462,
        setTotalN104462,
        totalN104463,
        setTotalN104463,
        totalN104464,
        setTotalN104464,
        totalN104465,
        setTotalN104465,
        totalN107101,
        setTotalN107101,
        totalN108806,
        setTotalN108806,
        totalN108806Two,
        setTotalN108806Two,
        totalN108807,
        setTotalN108807,
        totalN108807Two,
        setTotalN108807Two,
        totalN108201,
        setTotalN108201,
        totalN109905,
        setTotalN109905,
        totalN109917,
        setTotalN109917,
        totalN109918,
        setTotalN109918,
        totalN110011,
        setTotalN110011,
        totalN110021,
        setTotalN110021,
        totalN111115,
        setTotalN111115,
        totalN111123,
        setTotalN111123,
        totalN111101,
        setTotalN111101,
        totalN111102,
        setTotalN111102,
        totalN111105,
        setTotalN111105,
        totalN111106,
        setTotalN111106,
        totalTvWallmount,
        setTotalTvWallmount,
        totalSoundbarWallmount,
        setTotalSoundbarWallmount
    } = useActivationState()

    const toPayActivation = (
        (n100502 * totalN100502) + (n102501 * totalN102501) + (n102520 * totalN102520) + (n102523 * totalN102523) + (n102526 * totalN102526) + (n102528 * totalN102528) + (n102532 * totalN102532) + (n102534 * totalN102534) + (n102542 * totalN102542) + (n102543 * totalN102543) + (n102590 * totalN102590) + (n102592 * totalN102592) + (n102593 * totalN102593) + (n102595 * totalN102595) + (n103101 * totalN103101) + (n104461 * totalN104461) + (n104462 * totalN104462) + (n104463 * totalN104463) + (n104464 * totalN104464) + (n104465 * totalN104465) + (n107101 * totalN107101) + (n108201 * totalN108201) + (n108806 * totalN108806) + (n108806Two * totalN108806Two) + (n108807 * totalN108807) + (n108807Two * totalN108807Two) + (n109905 * totalN109905) + (n109917 * totalN109917) + (n109918 * totalN109918) + (n110011 * totalN110011) + (n110021 * totalN110021) + (n111101 * totalN111101) + (n111102 * totalN111102) + (n111105 * totalN111105) + (n111106 * totalN111106) + (n111115 * totalN111115) + (n111123 * totalN111123) + (tvWallmount * totalTvWallmount) + (soundbarWallmount * totalSoundbarWallmount)
    )

    function handleActivationTicket(e) {
        e.preventDefault()
        if (tech == '') return null
        fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/jobs', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                aaTech: tech,
                id: uuidv4(),
                date: date,
                time_in: timeIn,
                time_out: timeOut,
                job: job,
                n100502: n100502 != '' ? n100502 : null,
                n102501: n102501 != '' ? n102501 : null,
                n102520: n102520 != '' ? n102520 : null,
                n102523: n102523 != '' ? n102523 : null,
                n102526: n102526 != '' ? n102526 : null,
                n102528: n102528 != '' ? n102528 : null,
                n102532: n102532 != '' ? n102532 : null,
                n102534: n102534 != '' ? n102534 : null,
                n102542: n102542 != '' ? n102542 : null,
                n102543: n102543 != '' ? n102543 : null,
                n102590: n102590 != '' ? n102590 : null,
                n102592: n102592 != '' ? n102592 : null,
                n102593: n102593 != '' ? n102593 : null,
                n102595: n102595 != '' ? n102595 : null,
                n103101: n103101 != '' ? n103101 : null,
                n104461: n104461 != '' ? n104461 : null,
                n104462: n104462 != '' ? n104462 : null,
                n104463: n104463 != '' ? n104463 : null,
                n104464: n104464 != '' ? n104464 : null,
                n104465: n104465 != '' ? n104465 : null,
                n107101: n107101 != '' ? n107101 : null,
                n108806: n108806 != '' ? n108806 : null,
                n108806Two: n108806Two != '' ? n108806Two : null,
                n108807: n108807 != '' ? n108807 : null,
                n108807Two: n108807Two != '' ? n108807Two : null,
                n108201: n108201 != '' ? n108201 : null,
                n109905: n109905 != '' ? n109905 : null,
                n109917: n109917 != '' ? n109917 : null,
                n109918: n109918 != '' ? n109918 : null,
                n110011: n110011 != '' ? n110011 : null,
                n110021: n110021 != '' ? n110021 : null,
                n111115: n111115 != '' ? n111115 : null,
                n111123: n111123 != '' ? n111123 : null,
                n111101: n111101 != '' ? n111101 : null,
                n111102: n111102 != '' ? n111102 : null,
                n111105: n111105 != '' ? n111105 : null,
                n111106: n111106 != '' ? n111106 : null,
                tvWallmount: tvWallmount != '' ? tvWallmount : null,
                soundbarWallmount: soundbarWallmount != '' ? soundbarWallmount : null,
                aaToPay: toPayActivation
            })
          })
          .then(res => res.json())
          .then(data => console.log(data))
    }

    return(
        <form onSubmit={handleActivationTicket}>
            <div>
                Job
                <input onChange={(e) => setJob(e.target.value)}></input>
                Date
                <input type="date" onChange={(e) => setDate(e.target.value)} />
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
                <div class='nested'>
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
                    <div>${toPayActivation}</div>
                </div>
            </div>
        </form>
    )
}

export default Activation