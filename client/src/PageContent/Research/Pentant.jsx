import React, { useState } from "react";

const Pentant = () => {
    const [activeTab, setActiveTab] = useState("Pentant");

    const PentantDataFirst = [
        {
            faculty: "Dr. Gauri Athawale",
            date: "04/07/2025",
            title: "A ready to fry gluten free pellet product and a process of preparation thereof",
            number: "202521046067 A",
            status: "Published"
        },
        {
            faculty: "Dr. Prerna Shere",
            date: "26/12/2025",
            title: "Method for preparing micronutrient enriched extruded snacks from biofortified finger millet",
            number: "202521095011 A",
            status: "Published"
        },
        {
            faculty: "Dr. Nilesh Kardile",
            date: "02/01/2026",
            title: "Instant beverage cubes",
            number: "202521093476 A",
            status: "Published"
        },
        {
            faculty: "Dr. Prerna Shere",
            date: "09/01/2026",
            title: "A natural sweetener composition, a method for preparation and utility",
            number: "202521118661 A",
            status: "Published"
        },
        {
            faculty: "Dr. Sujata Ghodke, Ganorkar Antara",
            date: "09/01/2026",
            title: "Beetroot based product and method thereof",
            number: "202521128153A",
            status: "Published"
        },
        {
            faculty: "Dr. Gauri Athawale",
            date: "06/02/2026",
            title: "Cake premix formulation comprising roasted whole chia seeds and process of preparation thereof",
            number: "202521127580 A",
            status: "Published"
        },
        {
            faculty: "Dr. Anjali Ashokrao Bhoite, Nikhilesh Amlepatil",
            date: "06/02/2026",
            title: "A process for extracting soluble dietary fibers from pomegranate peel",
            number: "202521127581 A",
            status: "Published"
        },
        {
            faculty: "Mrs.Deepti N.Chaudhari, Ms.Dhaneshwari Karnavat",
            date: "11/02/2026",
            title: "A process for preparation of millet based protein mineral enriched granola bar",
            number: "202321046458",
            status: "Published"
        },
        {
            faculty: "Abhijeet Kothimbire, Dr. Kavita Mane",
            date: "13/02/2026",
            title: "A process for producing sorghum-based vegan flavoured milk with improved stability and sensory acceptability",
            number: "202521133864 A",
            status: "Published"
        },
        {
            faculty: "Ms. Dipti Chavan, Dr. Fayaj Pathan, Mr. Harshwardhan Jadhav",
            date: "26/04/2026",
            title: "Moisture analyzer system and method for determining moisture content",
            number: "583983",
            status: "Awarded"
        },
        {
            faculty: "Nilesh Kardile, Shubhangi Thakare, Gauri Athawale",
            date: "15/05/2026",
            title: "Method and composition for preparing fruit leather using hybrid dryer",
            number: "202621033993",
            status: "Filed"
        },
        {
            faculty: "Dipti Chavan, Yogita Chavan, Kaninika Paul, Shalini Arya, Vaibhav Patil",
            date: "18/05/2026",
            title: "Microwave-assisted deep eutectic solvent process for selective extraction of phytochemicals",
            number: "202621062531",
            status: "Filed"
        },
        {
            faculty: "Dr. Gauri Athawale, Omkar More, Pranit Shinde, Pradeep Raut",
            date: "22/05/2026",
            title: "Nutrient-enriched horse gram-based khakhra and method for preparation thereof",
            number: "202621039448 A",
            status: "Published"
        }
    ];


    const PentantDataSecond = [
        {
            faculty: "Athawale Gauri, Dagadkhair Rajkumar, Kulthe Amit, Wattamwar Shweta",
            date: "",
            title: "A Dairy-Free Probiotic Device",
            number: "202024103771",
            status: "German Patent"
        },
        {
            faculty: "Bhoite Anjali Ashokrao, Gurme Aishwarya Balaji",
            date: "",
            title: "A Method for Enhancing the Oxidative Stability of Edible Oils with Natural Antioxidants",
            number: "202421003876",
            status: "Indian Patent"
        },
        {
            faculty: "Devkatte Anupama Narsingrao, Suryawanshi Sanket Balasaheb, Dagadkhair Rajkumar Arjun, Sharma Ajay Kumar",
            date: "",
            title: "A Process for Preparation of Solidified Grape Juice Probiotic Beverage",
            number: "202421065138",
            status: "Indian Patent"
        },
        {
            faculty: "Dagadkhair Rajkumar Arjun, Pawar Vasant Narayanrao, Sharma Ajay Kumar, Devkatte Anupama Narsingrao, Bobade Hanuman Pandurang, Raichurkar Shweta Jivan",
            date: "",
            title: "A Method for Preparation of Probiotic Drinks",
            number: "202421065141",
            status: "Indian Patent"
        },
        {
            faculty: "Dr. Anjali Ashokrao Bhoite, Mr. Satyam Mukund Deshmukh",
            date: "",
            title: "Studies On Recipe Standardization and Process Development of Pomegranate-Aloe Vera Juice",
            number: "202221024499",
            status: "Indian Patent"
        },
        {
            faculty: "Dr. Anjali Ashokrao Bhoite, Mr. Darshan Patil",
            date: "",
            title: "A Low Cost Ohmic Heating Apparatus for Pasteurization of Juices",
            number: "202221024500",
            status: "Indian Patent"
        },
        {
            faculty: "Karnavat Dhaneshwari, Chaudhari Deepti",
            date: "",
            title: "A Process for Preparation of Millet Based Protein Mineral Enriched Granola Bar",
            number: "202321046458",
            status: "Indian Patent"
        },
        {
            faculty: "Prof. Deepti Chavan, Fayaj L. Pathan, Harshvardhan Jadhav",
            date: "",
            title: "Development Of Innovative Moisture Analyzer",
            number: "202421033421",
            status: "Indian Patent"
        },
        {
            faculty: "Fayaj L. Pathan, Akash Tengale, Prof. Deepti Chaudhari",
            date: "",
            title: "Design And Development of Visco-Texture Analyzer",
            number: "202421033351",
            status: "Indian Patent"
        },
        {
            faculty: "Mr. Zeeshan Afzal Kotadiya, Dr. Kavita Amol Mane",
            date: "",
            title: "Low-Fat And Low-Sugar Fruit Shrikhand - Method for Preparing a Low-Fat and Low-Sugar Fruit Based Strained Yoghurt",
            number: "202421033521",
            status: "Indian Patent"
        },
        {
            faculty: "Safa Zahoor Lone, Parth Chetan Khopade, Rithika Vishwanath Lal, Sushant Gazbare, Kartik Bhikule",
            date: "",
            title: "Millet Based Baked Products and Process Thereof",
            number: "202421033447",
            status: "Indian Patent"
        },
        {
            faculty: "Dagadkhair Amol Changdeo, Shere Prerana Dayasagar, Kshirsagar Rajesh Baliram",
            date: "",
            title: "A Process for Preparation of Carbohydrate and Dietary Fiber Quotient Improved Composite Millet Malt",
            number: "202321036411",
            status: "Indian Patent"
        }
    ];

    return (
        <div>
            <h2 className="innerpage-title">Pentant Paper Publication</h2>

            {/* Buttons */}
            <div className="page-content-btns">
                <button
                    className={activeTab === "Pentant" ? "btn active" : "btn"}
                    onClick={() => setActiveTab("Pentant")}
                >
                    2025-2026
                </button>

                <button
                    className={activeTab === "book" ? "btn active" : "btn"}
                    onClick={() => setActiveTab("book")}
                >
                    2024-25
                </button>
            </div>

            {/* Pentant Table */}
            {activeTab === "Pentant" && (
                <>
                    <h3 className="table-title">Patent Publication Year 2025-2026</h3>
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name of Faculty</th>
                                    <th>Patent Publication Date</th>
                                    <th>Title of Patent</th>
                                    <th>Patent No.</th>
                                    <th>Patent Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PentantDataFirst.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.faculty}</td>
                                        <td>{item.date}</td>
                                        <td>{item.title}</td>
                                        <td>{item.number}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* Book Table */}
            {activeTab === "book" && (
                <>
                    <h3 className="table-title">Patent Publication Year 2024-2025</h3>
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name of Faculty</th>
                                    <th>Patent Publication Date</th>
                                    <th>Title of Patent</th>
                                    <th>Patent No.</th>
                                    <th>Patent Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PentantDataSecond.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.faculty}</td>
                                        <td>{item.date}</td>
                                        <td>{item.title}</td>
                                        <td>{item.number}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* Patent */}
            {activeTab === "patent" && <p>No Patent Data Available</p>}
        </div>
    );
};

export default Pentant;