import React, { useState } from "react";

const ResearchPaper = () => {
    const [activeTab, setActiveTab] = useState("research");

    const researchData = [
        {
            faculty: "Prashant Anil Pawase & Swapnil R. Patharkar",
            scopus: "Scopus",
            title: "A Review on Intelligent Packaging Systems Using Betalain-rich Biobased Composite Films in Monitoring Freshness of Fish, Shrimp, and Meat",
            year: "July 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "A review of invitro digestibility models on diverse foods in various",
            year: "August 2025",
            rank: "Q1"
        },
        {
            faculty: "Deepti N. Chaudhari",
            scopus: "Scopus",
            title: "Biofilm and Antimicrobial Resistance: Mechanisms, Implications and Emerging Solutions",
            year: "August 2025",
            rank: "Q3"
        },
        {
            faculty: "Dr. Kavita Mane",
            scopus: "Scopus",
            title: "Role of psyllium husk in metabolic disease management: A review",
            year: "Sept 2025",
            rank: "Q3"
        },
        {
            faculty: "Dr. G. J. Bhavsar",
            scopus: "Scopus",
            title: "Sustainable food protein extraction from biomass using deep eutectic solvents: A review",
            year: "September 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Nitin Suradkar",
            scopus: "Other",
            title: "Herbal functional confection: Nutritional characterization of Shatavari based chocolate",
            year: "Oct 2025",
            rank: "Other"
        },
        {
            faculty: "Dr. G. J. Bhavsar",
            scopus: "UGC Care",
            title: "Studies on development of sweet potato biscuits",
            year: "November 2025",
            rank: "UGC Care"
        },
        {
            faculty: "Mr. S.R. Patharkar",
            scopus: "Scopus",
            title: "Optimization of Asparaginase Treatment to Mitigate Acrylamide Formation",
            year: "November 2025",
            rank: "Q4"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "Protein–Polysaccharide Hydrogels for Active and Intelligent Food Packaging",
            year: "November 2025",
            rank: "Q2"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "Effectiveness of various plasma treatments on nutrient retention",
            year: "December 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "Advances in odor-induced sugar reduction",
            year: "December 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "CRISPR-based biosensors for detection of foodborne pathogens",
            year: "December 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "Spirogyra derived CuO-NPs for environmental remediation",
            year: "December 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Prashant Pawase",
            scopus: "Scopus",
            title: "Protein quality comparison of mycoprotein, insect, and algal proteins",
            year: "December 2025",
            rank: "Q1"
        },
        {
            faculty: "Dr. Kavita Mane",
            scopus: "Scopus",
            title: "Impact of Tomato Puree Processing on Lycopene Stability",
            year: "Dec 2025",
            rank: "Q4"
        },
        {
            faculty: "Dr. Kavita Mane",
            scopus: "Scopus",
            title: "Development of Healthier Dessert Alternative: Low-fat Yoghurt",
            year: "Jan 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Gauri Athawale",
            scopus: "Scopus",
            title: "In vitro analysis of Lactobacillus and Dragon fruit juice quality",
            year: "Feb 2026",
            rank: "Q2"
        },
        {
            faculty: "Deepti N. Chaudhari",
            scopus: "Scopus",
            title: "Microencapsulation of anthocyanins for functional foods",
            year: "Feb 2026",
            rank: "Q2"
        },
        {
            faculty: "Ms. A. B. Shingote",
            scopus: "Scopus",
            title: "Recent advances in 3D food printing",
            year: "Feb 2026",
            rank: "Q1"
        },
        {
            faculty: "Dr. Sujata Ghodke",
            scopus: "Scopus",
            title: "Formulation of Noodles from Malted Millet Composite Flour",
            year: "Feb 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Gauri Athawale",
            scopus: "Other",
            title: "Development of pancake premix using kodo millet",
            year: "Feb 2026",
            rank: "Other"
        },
        {
            faculty: "Deepti N. Chaudhari",
            scopus: "Scopus",
            title: "Gut-Brain-Cardiac axis and microbiota",
            year: "March 2026",
            rank: "Q2"
        },
        {
            faculty: "Deepti N. Chaudhari",
            scopus: "Scopus",
            title: "Microbial Risks in Food Safety",
            year: "March 2026",
            rank: "Q2"
        },
        {
            faculty: "Dr. G.P. Gaikwad",
            scopus: "Scopus",
            title: "Freeze-Dried Apple Snacks quality and probiotic viability",
            year: "March 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Nilesh B. Kardile / Dr. Subhangi Thakre",
            scopus: "Scopus",
            title: "Shelf life prediction of retort-processed puran poli",
            year: "March 2026",
            rank: "Q1"
        },
        {
            faculty: "Dr. B N Jadhav",
            scopus: "Scopus",
            title: "Solar Energy Applications in Food Processing",
            year: "March 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. P. D. Shere",
            scopus: "Scopus",
            title: "Bioactive compounds from under-utilized fruits",
            year: "March 2026",
            rank: "Q1"
        },
        {
            faculty: "Dr. Nilesh B. Kardile",
            scopus: "Scopus",
            title: "Functional pasta enriched with jackfruit flour",
            year: "April 2026",
            rank: "Q1"
        },
        {
            faculty: "Dr. Nitin Suradkar",
            scopus: "Scopus",
            title: "Plant-based milk as delivery systems",
            year: "April 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Anjali Bhoite",
            scopus: "Scopus",
            title: "Jackfruit Seed Flour for Burmese Tofu Analog",
            year: "May 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Sujata Ghodke",
            scopus: "Scopus",
            title: "Hypolipidemic and Antioxidant Potential of Curcumin",
            year: "May 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Nilesh B. Kardile",
            scopus: "Scopus",
            title: "Orange Peel Candy Optimization using RSM",
            year: "May 2026",
            rank: "Q3"
        },
        {
            faculty: "Dr. Sujata Ghodke",
            scopus: "Scopus",
            title: "Co-fortification of Piperine and Curcumin in Paneer",
            year: "June 2026",
            rank: "Q3"
        }
    ];


    const bookData = [
        {
            faculty: "Dr.Prashant Pawase",
            title: "A review on extraction, functionality and application of chia seeds as a storehouse of bioactive components",
            journal: "Measurement Food",
            publisher: "Elsevier",
        },
        {
            faculty: "Dr.Ganesh Bhavsar",
            title: "Exploring the Role of Gut Microbiota in Regulating Immune Responses to Respiratory Infections: A Cross-Disciplinary Study",
            journal: "African Journal of Biomedical Research",
            publisher: "AJOL",
        },
        {
            faculty: "Dr.Yogita Chavan",
            title: "Exploring the influence of active packaging systems on microwaved processed jaggery: a real-time study on shelf life",
            journal: "Journal of Food Science and Technology",
            publisher: "Springer",
        },
        {
            faculty: "Deepti N. Chaudhari",
            title: "Complete Genome Sequence and Probiotic Characterization of Lactobacillus delbrueckii subsp. Indicus DC‐3",
            journal: "Probiotics and Antimicrobial Proteins",
            publisher: "Springer Nature",
        },
        {
            faculty: "Deepti N. Chaudhari",
            title: "Complete genome sequence and Invitro probiotic assessment of Bacillus subtilis DC-11",
            journal: "Current Microbiology",
            publisher: "Springer Nature",
        },
        {
            faculty: "Dr.Nitin Suradkar",
            title: "A Study on Omega-3 Fish Oil Safety and Efficacy for Cardiac Patients",
            journal: "Frontiers in Health Informatics",
            publisher: "",
        },
        {
            faculty: "Dr.Prashant Pawase",
            title: "A critical review on biogenic amines in dairy: formation pathways, toxicity and regulations",
            journal: "Journal of Food Composition and Analysis",
            publisher: "ScienceDirect",
        },
        {
            faculty: "Dr.Prashant Pawase",
            title: "Enhancing Bioactive stability and applications: Microencapsulation in fruits and vegetables waste valorization",
            journal: "Discover Food",
            publisher: "Discover",
        },
        {
            faculty: "Dr.Rinku Agarwal",
            title: "Sustainable processing Technology (pulse light, electrolysed water & ozonation) for microbial decontamination of muscle foods",
            journal: "Innovative Food Science & Emerging Technology",
            publisher: "ScienceDirect",
        },
        {
            faculty: "Suvidha Kulkarni",
            title: "Exploring big data innovation in food & agriculture research",
            journal: "International Journal of Research in Agronomy",
            publisher: "NAAS Journal",
        },
        {
            faculty: "Dr.Nitin Suradkar",
            title: "Extraction of pectin from Ethiopian prickly pear fruit peel & its potency for cellulose reinforced biofilm",
            journal: "Biomass Conversion and Biorefinery",
            publisher: "Springer Nature",
        },
        {
            faculty: "Gauri Athawale",
            title: "Studies on standardization of drying process, chemical composition & shelf life of dehydrated Tambul",
            journal: "Indian Journal of Agricultural Biochemistry",
            publisher: "Indian Society of Agricultural Biochemists",
        },
        {
            faculty: "Dr.Sujata Ghodke",
            title: "A comprehensive review on nutraceutical potential, clinical studies & application of beetroot",
            journal: "African Journal of Biomedical Research",
            publisher: "AJOL",
        },
        {
            faculty: "Dr.P.D.Shere",
            title: "Development & evaluation of gluten free multi millet pasta based on nutritional, sensory & color characteristics",
            journal: "Asian Journal of Dairy & Food Research",
            publisher: "ARCC Journal",
        },
        {
            faculty: "Dr.P.D.Shere",
            title: "Impact of malting & moist steaming on carbohydrate & dietary fiber quotient of millet",
            journal: "Asian Journal of Dairy & Food Research",
            publisher: "ARCC Journal",
        },
        {
            faculty: "Dr.Nilesh Kardile",
            title: "Advancement & effectiveness of Aloe vera & sodium alginate coating for extending shelf life",
            journal: "European Journal of Nutrition & Food Safety",
            publisher: "Sciencedomain International",
        },
        {
            faculty: "Dr.Kananika Paul",
            title: "Exploring bioactive compounds of citrus fruit peels for therapeutic & industrial applications",
            journal: "Food Science & Engineering",
            publisher: "Universal Wiser Publication",
        },
        {
            faculty: "Dr.Prashant Pawase",
            title: "Conceptual review on classification, extraction, and role of phytochemicals in human health",
            journal: "Future Foods",
            publisher: "Elsevier",
        },
        {
            faculty: "Dr.Fayaj Pathan",
            title: "Nonalcoholic fatty liver disease (NAFLD): A chronic liver disease",
            journal: "Acta Scientific Nutritional Health",
            publisher: "UGC Care",
        },
        {
            faculty: "Abhilasha Shingote",
            title: "Novel approaches in food preservation: High tech solutions",
            journal: "New Era Agriculture Magazine",
            publisher: "Magazine",
        },
        {
            faculty: "Dr.Nilesh Kardile",
            title: "Utilization of jackfruit nutritional composition & its application in food model system",
            journal: "Bioscene",
            publisher: "United States of America",
        }
    ];

    return (
        <div>
            <h2 className="innerpage-title">Research Paper Publication</h2>

            {/* Buttons */}
            <div className="page-content-btns">
                <button
                    className={activeTab === "research" ? "btn active" : "btn"}
                    onClick={() => setActiveTab("research")}
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

            {/* Research Table */}
            {activeTab === "research" && (
                <>
                    <h3 className="table-title">Research Paper Publication Year 2025-2026</h3>
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Faculty Name</th>
                                    <th>Scopus Indexed</th>
                                    <th>Paper Title</th>
                                    <th>Year of Publication</th>
                                    <th>Q1/Q2/Q3/Q4</th>
                                </tr>
                            </thead>
                            <tbody>
                                {researchData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.faculty}</td>
                                        <td>{item.scopus}</td>
                                        <td>{item.title}</td>
                                        <td>{item.year}</td>
                                        <td>{item.rank}</td>
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
                    <h3 className="table-title">Research Paper Publication Year 2024-2025</h3>
                    <div className="table-responsive">
                        <table className="common-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Faculty Name</th>
                                    <th>Title Of Research Paper</th>
                                    <th>Name of Journal / Book/ Conference</th>
                                    <th>Name of the Publisher / Organizer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.faculty}</td>
                                        <td>{item.title}</td>
                                        <td>{item.journal}</td>
                                        <td>{item.publisher}</td>
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

export default ResearchPaper;