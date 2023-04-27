import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { getFunnelData } from '../services/analyticsService';

function AnalyticsPage() {
    const [funnelData, setFunnelData] = useState(null);

    useEffect(() => {
        async function fetchFunnelData() {
            const data = await getFunnelData();
            setFunnelData(data);
        }
        fetchFunnelData();
    }, []);

    if (!funnelData) {
        return <div>Loading...</div>;
    }

    const chartData = {
        labels: funnelData.labels,
        datasets: [
            {
                label: 'Visitors',
                data: funnelData.visitors,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: 'Converted',
                data: funnelData.converted,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h1>Advanced Funnel Analytics</h1>
            <div>
                <Line data={chartData} />
            </div>
            <div>
                <Bar data={chartData} />
            </div>
            <div>
                <Doughnut data={chartData} />
            </div>
        </div>
    );
}

export default AnalyticsPage;
