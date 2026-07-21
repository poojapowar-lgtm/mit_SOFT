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
                    <div className="card">
                        <p><strong>Total Students</strong></p>
                        <p>{totalOpted}</p>
                    </div>

                    <div className="card">
                        <p><strong>Placed Students</strong></p>
                        <p>{totalPlaced}</p>
                    </div>

                    <div className="card">
                        <p><strong>Placement %</strong></p>
                        <p>{overallPercent}%</p>
                    </div>

                    <div className="card">
                        <p><strong>Highest Package</strong></p>
                        <p>{highestPackage} LPA</p>
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
                                    color: "#1e3a5f",
                                },
                                {
                                    data: placedData,
                                    label: "Placed Students",
                                    color: "#9ca3af",
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