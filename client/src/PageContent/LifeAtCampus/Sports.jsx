import React from "react";
import "./facilities.css";

const Sports = () => {
    // sportsData
    const sportsData = {
        images: [
            "/assets/images/facilites/Badminton.jpg",
            "/assets/images/facilites/Basketball.jpg",
            "/assets/images/facilites/Boxing.jpg",
            "/assets/images/facilites/Football.jpg",
            "/assets/images/facilites/Kabbadi.jpg",
            "/assets/images/facilites/KhoKho.jpg",
            "/assets/images/facilites/Swimming.jpg",
            "/assets/images/facilites/Tenis.jpg",
            "/assets/images/facilites/Vollyball.jpg",
        ],
        paragraphs: [
            "MIT Art, Design and Technology University provides a vibrant campus environment where sports and fitness play a vital role in overall student development. The university offers a wide range of modern sports facilities that cater to both recreational and competitive needs, encouraging students to maintain an active and healthy lifestyle.",
            "The campus features excellent indoor sports facilities, including well-equipped courts for badminton and table tennis, allowing students to refine their skills in a professional setting. Dedicated spaces are also available for boxing and fitness training, along with a fully equipped gymnasium that supports strength and conditioning programs. Additionally, indoor areas accommodate practice sessions for basketball and volleyball, ensuring year-round training regardless of weather conditions.",
            "Beyond indoor sports, the university also offers extensive facilities for a variety of outdoor games. Students can actively participate in cricket, football, kho-kho, and kabaddi, which are played on spacious and well-maintained grounds. The campus also includes courts for lawn tennis and basketball, designed to meet competitive standards. A well-maintained swimming facility further enhances the sports infrastructure, providing opportunities for both training and recreation.",
            "The university regularly organizes inter-college tournaments, coaching camps, and sports events to nurture talent and promote team spirit. With a strong emphasis on discipline, leadership, and physical well-being, MIT ADT University ensures that students receive a balanced educational experience that goes beyond academics.",
            "These comprehensive sports facilities reflect the university’s commitment to fostering holistic development, making it an ideal choice for students who aspire to excel both academically and athletically."
        ],
    };



    return (
        <div className="facilities-container">
            <h2 className="innerpage-title">Sports Facilities</h2>
            {/* sportsData */}
            <div>
                <div className="facility-images">
                    {sportsData.images.map((img, i) => (
                        <img key={i} src={img} alt="sports" />
                    ))}
                </div>
                
                {sportsData.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}

            </div>

        </div>
    );
};

export default Sports;