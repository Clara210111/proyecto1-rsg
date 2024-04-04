import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; 
import './mainPage.css'; 

const MainPage = () => {
  const transactionsData = [
    { id: 1, destination: 'Cuenta A', amount: 100 },
    { id: 2, destination: 'Cuenta B', amount: 200 },
    { id: 3, destination: 'Cuenta C', amount: 150 },
    { id: 4, destination: 'Cuenta D', amount: 120 },
    { id: 5, destination: 'Cuenta E', amount: 180 },
    { id: 6, destination: 'Cuenta F', amount: 250 },
  ];

  const accountsData = [
    { id: 1, accountNumber: '12345678', balance: 1000 },
    { id: 2, accountNumber: '87654321', balance: 500 },
    { id: 3, accountNumber: '98765432', balance: 1500 },
    { id: 4, accountNumber: '23456789', balance: 800 },
  ];

  const canvasRef = useRef(null); 

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx.chart) {
        ctx.chart.destroy(); // Destruye el gráfico anterior si existe
      }
      ctx.chart = new Chart(ctx, {
        type: 'pie', // Tipo de gráfico de pastel
        data: {
          labels: transactionsData.map(transaction => transaction.destination),
          datasets: [{
            label: 'Historial de transacciones',
            data: transactionsData.map(transaction => transaction.amount),
            backgroundColor: ['#5b83d6', '#f28c25', '#ff5252', '#4caf50', '#ff9800', '#9c27b0'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [transactionsData]);

  return (
    <><h1>Bienvenido a tu página principal</h1><div className="main-page-container">
          <div className="chart-container">
              <canvas ref={canvasRef} id="transactionsChart" width="400" height="400" />
          </div>
      </div>
      {/* Gastos principales */}
      <div className="section expenses-section">
        <h2>Gastos principales</h2>
        <ul className="expenses-list">
          <li className="expenses-list-item">Gasto 1</li>
          <li className="expenses-list-item">Gasto 2</li>
          <li className="expenses-list-item">Gasto 3</li>
        </ul>
      </div>

      {/* Saldo actual */}
      <div className="section balance-section">
        <h2>Saldo actual</h2>
        <table className="balance-table">
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {accountsData.map((account) => (
              <tr key={account.id}>
                <td>{account.accountNumber}</td>
                <td>{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  );
};

export default MainPage;
