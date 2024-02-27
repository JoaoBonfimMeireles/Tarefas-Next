import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styles from '../../../styles/home.module.css';

const TableTwo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  const [firstDatasetLabel, setFirstDatasetLabel] = useState<string>('');
  const [secondDatasetLabel, setSecondDatasetLabel] = useState<string>('');
  const [thirdDatasetLabel, setThirdDatasetLabel] = useState<string>('');
  
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      
      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        
        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              '2024-02-02', '2024-02-03', 'Jan/23', 'Fev/23', 'Mar/23', 
              'Abr/23', 'Mai/23', 'Jun/23', 'Jul/23', 'Set/23', 'Out/23'
            ],
            datasets: [
              {
                label: 'Dental',
                data: [1565123, 1565995, 2400, 12000, 3000, 5000, 3000, 2400, 2700, 20000, 1020000],
                borderWidth: 2
              },
              {
                label: 'Saúde',
                data: [2233571, 2234450, 12000, 3000, 5000, 3000, 2400, 2700, 20000, 12000, 5000],
                borderWidth: 2
              },
              {
                label: 'Cross',
                data: [599273, 599468, 3000, 5000, 3000, 2400, 2700, 20000, 12000, 5000, 5200],
                borderWidth: 2
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        setFirstDatasetLabel(chartRef.current?.data.datasets[0].label || '');
        setSecondDatasetLabel(chartRef.current?.data.datasets[1].label || '');
        setThirdDatasetLabel(chartRef.current?.data.datasets[2].label || '');
      }
    }



    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };

  }, []);



  
  return (
    <div className={styles.containerTables}>
      <div>
        <p>Clientes {firstDatasetLabel} e o val</p>
      </div>
      <div>
        <p>Clientes {secondDatasetLabel}</p>
      </div>
      <div>
        <p>Clientes {thirdDatasetLabel}</p>
      </div>
      <div>
        <canvas ref={canvasRef} id="table-one" width="600" height="200"></canvas>
      </div>
    </div>
  );
};

export default TableTwo;
