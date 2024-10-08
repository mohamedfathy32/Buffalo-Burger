import { useState } from "react";
import Careers from "./Careers";
import FindUs from "./FindUs";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import QualityControl from "./QualityControl";


export default function AboutUs() {

    const pages = [<OurStory />, <OurValues />, <QualityControl />, <Careers />, <FindUs />];
    const [index, setIndex] = useState(0);
    const changeIndex = (i) => {
        setIndex(i);
    };

    return (
        <>
            <div className="bg-orange-500 p-4 d-inline-block flex justify-center text-white">
                <div className={`nav-item d-inline-block mx-2 ${index !== 0 ? 'opacity-50' : ''}`} onClick={() => { changeIndex(0) }}>
                    OUR STORY
                </div>
                <div className={`nav-item d-inline-block mx-2 ${index !== 1 ? 'opacity-50' : ''}`} onClick={() => { changeIndex(1) }}>
                    OUR VALUES
                </div>
                <div className={`nav-item d-inline-block mx-2 ${index !== 2 ? 'opacity-50' : ''}`} onClick={() => { changeIndex(2) }}>
                    QUALITY CONTROL
                </div>
                <div className={`nav-item d-inline-block mx-2 ${index !== 3 ? 'opacity-50' : ''}`} onClick={() => { changeIndex(3) }}>
                    CAREERS
                </div>
                <div className={`nav-item d-inline-block mx-2 ${index !== 4 ? 'opacity-50' : ''}`} onClick={() => { changeIndex(4) }}>
                    FIND US
                </div>
            </div>

            {pages[index]}

        </>
    )
}