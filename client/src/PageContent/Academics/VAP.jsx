import React from "react";
import { useState,useEffect } from "react";
import "./vap.css";

const VAP = () => {
    const [current, setCurrent] = useState(0);

    const images = [
        "/assets/images/vap/vap1.jpg",
        "/assets/images/vap/vap2.jpg",
        "/assets/images/vap/vap3.jpg",
        "/assets/images/vap/vap4.jpg",
        "/assets/images/vap/vap5.jpg",
        "/assets/images/vap/vap6.jpg",
        "/assets/images/vap/vap7.jpg",
        "/assets/images/vap/vap5.jpg",
    ];

    const getSlidesToShow = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

    useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (


        <div>
            <h2 className="innerpage-title">Village Adoption Program (VAP) 2022</h2>
            {/* <h3 className="innerpage-subtitle">PREAMBLE</h3> */}
            <p>The Village Adoption Program (VAP), an initiative by MIT School of Food Technology, is a constituent credit course of B.Tech (Food Technology) VIII semester intended to acquaint students regarding village diversified ecosystem and also to encourage new generation for inherent entrepreneurship development through cutting edge food conservation & processing. The VAP program was organized from 28th Feb to 6th March 2022 for the students and villagers at Wade bolhai, Tal. Haveli, Pune. Ten student’s groups (10 to 14 students in each) of said semester students were allocated with 10 mentors to sensitize them about VAP program and related notified activities.</p>
            <p>The Village Adoption Program 2022 was inaugurated at Wade bolhai village on 28th Feb, 2022 in presence of Mr. Deepak Gawade, Sarpanch, Wade bolhai, Mr. Ganesh Surwase, Agricultural officer, Wagholi, Dr. Anjali Bhoite, I/C Principal, MITSoFT, MIT ADT University, Pune. Mrs. Sujata Ghodke, VAP convenor, Dr. Ganesh Bhavsar, VAP coordinator, Dr. Nilesh Kardile, Dr. Sandip Gaikwad, Dr. Anupama Devkatte, Mrs. K.A. Mane, students, farmers and villagers. Mr. Ganesh Surwase highlighted the importance of primary processing of local produce and necessity of such programs for technology transfer, overall villagers and farmers upliftment and students entrepreneurship motivation. Guest speaker Mr. Balasaheb Khemnar from Biocert company delivered a talk on 2nd March 2022 at Wade bolhai on organic farming to farmers and villagers. A guest lecture was organized for women Self Help Group of Mrs. Manisha Lahoti who is founder of Nutristreak foods, Pune to sensitize and motivate them in respect of food product development and marketing opportunities.</p>
            <p>Dr. Ashok Jadhav, Mycologist, AICRP on Mushroom, School of Agriculture, Pune demonstrated mushroom cultivation to students, farmers and villagers. During 7 days tenure, student groups have undertaken assigned surveys with guidance of their respective mentor at village regarding agricultural cropping pattern, primary food processing, post-harvest losses, small entrepreneurship, literacy status, health facilities, drinking water status, food outlets and household sanitation and food safety, school status, income source and gender-based discrimination. Student groups analyzed the survey data and suggested various strategies to uplift the socio economic, hygienic and agricultural practices to villagers, farmers and small entrepreneurs as per mentor’s guidelines. Students also conducted demonstration of simple food products from local produce such as grapes, pomegranate and tomato to sensitize farmers regarding value addition of fruits or vegetables at primary level. The VAP 2022 program was concluded on 6th March by organizing valedictory function at Wade bolhai in presence of Mr. Deepak Gawade, Sarpanch, Mrs. Surekhatai Bhorade, Upsarpanch, Dr. Anjali Bhoite, I/C Principal, MITSoFT, MITADTU Pune, Mrs. Sujata Ghodke, VAP convenor, Dr. Ganesh Bhavsar, VAP coordinator, Dr. Nilesh Kardile, students, villagers and farmers.</p>

            <div className="vap-gallery">
                <div
                    className="vap-slider"
                    style={{
                        transform: `translateX(-${(current * 100) / slidesToShow}%)`,
                    }}
                >
                    {images.map((img, index) => (
                        <img src={img} key={index} alt="Leader" />
                    ))}
                </div>

                {/* Dots */}
                <div className="vap-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={current === index ? "vap-dot active" : "vap-dot"}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VAP;
