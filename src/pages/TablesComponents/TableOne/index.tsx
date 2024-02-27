import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


import styles from '../../../styles/home.module.css';

const TableOne: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Pink', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: 'mês 1',
                data: [12, 19, 3, 5, 2, 25, 3],
                borderWidth: 1,
              },
              {
                label: 'mês 1',
                data: [12, 19, 3, 5, 2, 25, 3],
                borderWidth: 1,
              },
              {
                label: 'mês 1',
                data: [12, 19, 3, 5, 2, 25, 3],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className={styles.containerTables}>
        <div>
          <canvas ref={canvasRef} id="table-one" width="600" height="200"></canvas>
        </div>
    </div>
  );
};

export default TableOne;
