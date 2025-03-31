import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const PentagonChart = ({ 
    data, 
    strokeColor = "#333333", 
    fillColor = "#333333", 
    fillOpacity = 1 
    }) => {

    return (
        <div className="pentagon-chart-container">
            <div className="chart-wrapper">
                <ResponsiveContainer>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="category" />
                        <Radar
                        name="Stats"
                        dataKey="value"
                        stroke={strokeColor}
                        fill={fillColor}
                        fillOpacity={fillOpacity}
                        />
                    </RadarChart>
                </ResponsiveContainer>
        </div>
        </div>
    );
};

export default PentagonChart;