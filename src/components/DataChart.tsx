import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DataChartProps {
  type: 'line' | 'bar' | 'doughnut';
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

const DataChart: React.FC<DataChartProps> = ({ type, title, labels, datasets }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type,
          data: {
            labels,
            datasets: datasets.map(dataset => ({
              ...dataset,
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            })),
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 20,
                  font: {
                    family: "'Inter', sans-serif",
                    size: 12,
                  }
                }
              },
              title: {
                display: true,
                text: title,
                font: {
                  family: "'Inter', sans-serif",
                  size: 16,
                  weight: 'bold'
                },
                padding: {
                  bottom: 20
                }
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: 12,
                titleFont: {
                  family: "'Inter', sans-serif",
                  size: 14,
                },
                bodyFont: {
                  family: "'Inter', sans-serif",
                  size: 13,
                },
                cornerRadius: 4,
                displayColors: true
              }
            },
            animation: {
              duration: 1000,
              easing: 'easeOutQuart'
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, title, labels, datasets]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-80">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DataChart;
