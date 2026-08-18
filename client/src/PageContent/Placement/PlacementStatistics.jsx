import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import "./placement_statistics.css";

export default function PlacementStatistics() {

    const data = [
        {
            branch: "B.Tech",
            opted: 44,
            placed: 38,
            percentage: 86.36,
            highest: 7.25,
            lowest: 1.6,
        },
        {
            branch: "M.Tech",
            opted: 18,
            placed: 15,
            percentage: 83.33,
            highest: 5.0,
            lowest: 2.4,
        },
    ];

    // totals
    const totalOpted = data.reduce((sum, d) => sum + d.opted, 0);
    const totalPlaced = data.reduce((sum, d) => sum + d.placed, 0);
    const overallPercent = ((totalPlaced / totalOpted) * 100).toFixed(2);
    const highestPackage = Math.max(...data.map(d => d.highest));

    // chart data
    const xLabels = data.map(d => d.branch);
    const optedData = data.map(d => d.opted);
    const placedData = data.map(d => d.placed);

    return (
        <>
            <h2 className="innerpage-title">Placement Statistics</h2>
            <div className="placement-wrapper">
                {/* CARDS */}
                <div className="placement-cards">
                    <div className="scope-card">
                        <h4 className="placement-heading">Total Students</h4>
                        <h2 className="placement-count">{totalOpted}</h2>
                    </div>

                    <div className="scope-card">
                        <h4 className="placement-heading">Placed Students</h4>
                        <h2 className="placement-count">{totalPlaced}</h2>
                    </div>

                    <div className="scope-card">
                        <h4 className="placement-heading">Placement %</h4>
                        <h2 className="placement-count">{overallPercent}%</h2>
                    </div>

                    <div className="scope-card">
                        <h4 className="placement-heading">Highest Package</h4>
                        <h2 className="placement-count">{highestPackage} LPA</h2>
                    </div>
                </div>

                {/* CHART */}
                <div className="placement-chart">
                    <Box className="chart-box">
                        <BarChart
                            series={[
                                {
                                    data: optedData,
                                    label: "Students Opted",
                                    color: "#2563eb",
                                },
                                {
                                    data: placedData,
                                    label: "Placed Students",
                                    color: "#16a34a",
                                },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: "band" }]}
                            yAxis={[{ label: "Students" }]}
                        />
                    </Box>
                </div>


            </div>
        </>

    );
}