// components/GraficoVendas.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registrar os componentes do gráfico no Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface GraficoVendasProps {
    marcaSelecionada: string;
    dadosVendas: number[];
}

const GraficoVendas: React.FC<GraficoVendasProps> = ({ marcaSelecionada, dadosVendas }) => {
    const chartData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [
            {
                label: `Vendas de ${marcaSelecionada}`,
                data: dadosVendas,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ marginTop: '40px' }}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default GraficoVendas;
