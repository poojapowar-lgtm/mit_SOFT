import React, { useState } from "react";
import "./achievements.css";

const facultyData = [
  {
    type: "faculty",
    title:
      "Achievement: Runner-Up Prize at the 2-Day National Symposium on World IP Day Celebration 2026",
    image: "/assets/images/achievements/faculty-achievement.jpg",
    details: {
      name: "Dr. Deepti N. Chaudhari",
      designation: "Asst. Prof. Dept., FSQN",
      department: "SoFT, MITADTU, Pune",
    },
    description: [
      "I am pleased to share that I was awarded the Runner-Up Prize at the 2-Day National Symposium on World IP Day Celebration 2026, organized by the IPR Cell & Technology Transfer Office (TTO), MITADTU, Pune in collaboration with Bhate & Ponkshe and the International Institute of Sports & Management (IISM).",
      "The symposium, held on 23rd and 24th April 2026, was based on the theme IP & Sports: Ready, Set, Innovate. The event focused on promoting innovation in sports and fitness by creating awareness about intellectual property rights, patents, designs, commercialization pathways, and technology transfer.",
      "The symposium provided an excellent platform to interact with intellectual property experts, industry professionals, innovators, and researchers while highlighting the importance of protecting and commercializing innovative ideas.",
      "Receiving the Runner-Up Prize at this national-level symposium is a matter of great honor and motivation. ",
      "I sincerely thank the organizers for providing this valuable opportunity and acknowledge the constant support and encouragement extended by my institution."
    ],
  },
]

const studentData = [
  {
    type: "student",
    title: "Smart India Hackathon SIH 2025",
    image: "/assets/images/achievements/std-achievement1.jpg",
    details: {
      name: "Esha Sharma",
      year: "2025-26",
      event: "Smart India Hackathon SIH 2025",
      activity: "Herbal Probiotic drink",
    },
    description: [
      "The Smart India Hackathon (SIH) problem statement by the Government of India focused on developing innovative solutions to strengthen the primary sector of India, particularly agriculture, by improving the processing, value addition, and management of agricultural produce.",
      "In response, our team proposed HerbaFizz, a functional herbal probiotic beverage made from Indian agricultural crops such as Amla, Tulsi, Jamun, and Ginger. The product incorporates encapsulated probiotics delivered through a smart activation cap, which releases probiotic beads into the drink at the time of consumption to maintain viability and freshness.",
      "This solution helps convert perishable agricultural produce into a high-value functional beverage, supporting farmers and reducing post-harvest losses. Our innovation was recognized at the Smart India Hackathon Hardware Edition, where we were awarded Winner under the given problem statement."
    ],
  },
  {
    type: "student",
    title: "Smart India Hackathon SIH 2025",
    image: "/assets/images/achievements/std-achievement2.jpg",
    details: {
      name: "Esha Sharma",
      year: "2025-26",
      event: " Engineers",
      activity: "Blog writing",
    },
    description: [
      "Winning the Blog Writing Competition on the occasion of Engineer’s Day at our college was a truly rewarding experience. The competition provided a platform to creatively express ideas about innovation, engineering, and the impact of technology on society.",
      "Through my blog, I aimed to highlight the role of engineers in shaping sustainable and future-ready solutions. This recognition encouraged me to continue exploring and sharing thoughtful perspectives through writing. It was an honor to be part of such an inspiring academic initiative.",
    ],
  },
]
const Achievements = () => {
  const [active, setActive] = useState("faculty");

  const data = active === "faculty" ? facultyData : studentData;

  return (
    <div>
       <h2 className="innerpage-title">Achievements</h2>
  

      {/* BUTTONS */}
      <div className="btn-group">
        <button
          className={`facultybutton ${active === "faculty" ? "active" : ""}`}
          onClick={() => setActive("faculty")}
        >
          Faculty Achievement
        </button>

        <button
          className={`studentbutton ${active === "student" ? "active" : ""}`}
          onClick={() => setActive("student")}
        >
          Student Achievement
        </button>
      </div>

      {/* LOOP */}
      {Array.isArray(data) &&
        data.map((item, index) => {
          const fields =
            item.type === "faculty"
              ? [
                { label: "Name", value: item.details?.name },
                { label: "Designation", value: item.details?.designation },
                { label: "Department", value: item.details?.department },
              ]
              : [
                { label: "Name", value: item.details?.name },
                { label: "Academic Year", value: item.details?.year },
                { label: "Event/Category", value: item.details?.event },
                { label: "Competition/Activity", value: item.details?.activity },
              ];

          return (
            <div key={index} className="achievement-card">


              {/* CONTENT */}
              <div className="achievement-content">
                <div className="left">
                  <img src={item.image} alt={item.title} title={item.details?.name || item.title} />
                </div>

                <div className="right">
                  <div className="details">
                    {fields.map(
                      (f, i) =>
                        f.value && (
                          <p key={i}>
                            <strong>{f.label}:</strong> {f.value}
                          </p>
                        )
                    )}
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="description">
                {item.description
                  ?.filter((d) => d.trim() !== "")
                  .map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Achievements;