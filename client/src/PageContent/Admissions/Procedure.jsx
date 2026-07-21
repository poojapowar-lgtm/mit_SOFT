import React from "react";
import { ImArrowDown } from "react-icons/im";

const Procedure = () => {

  const admissionSteps = [
    {
      title: "Step 1: Registration",
      points: [
        "Register on the official admission portal with email & mobile verification."
      ]
    },
    {
      title: "Step 2: Fill Application Form",
      points: [
        "Complete all sections: Personal Details - Parent/Guardian Details - Correspondence Details - Academic Details - Document Upload"
      ]
    },
    {
      title: "Step 3: Submission & Fee Payment",
      points: [
        "Pay ₹1800 application fee",
        "Upload photo & signature (max 2 MB)"
      ]
    },
    {
      title: "Step 4: Scrutiny",
      points: [
        "Application reviewed by School Admission Committee"
      ]
    },
    {
      title: "Step 5: Evaluation",
      points: [
        "Based on: Entrance exam score - Personal Interview (PI) / GD (if applicable) - Eligibility criteria"
      ]
    },
    {
      title: "Step 6: Offer Letter",
      points: [
        "Provisional admission offer issued to selected candidates"
      ]
    },
    {
      title: "Step 7: Document Verification",
      points: [
        "Physical verification of original documents"
      ]
    },
    {
      title: "Step 8: Fee Payment",
      points: [
        "Admission confirmed after fee payment"
      ]
    }
  ];

  return (
    <div>
      <h2 className="innerpage-title">Admission Procedure</h2>

      <div className="timeline">
        {admissionSteps.map((step, index) => (
          <div key={index} className="timeline-item">

            <div className="internship-card">
              <h4>{step.title}</h4>
              <ul>
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Arrow (not after last item) */}
            {index !== admissionSteps.length - 1 && (
              <div className="arrow">
                <ImArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>


    </div>
  );
};

export default Procedure;
