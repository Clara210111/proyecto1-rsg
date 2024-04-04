import React, { useState } from 'react';
import './TransferForm.css';

const TransferForm = ({ onTransfer }) => {
  const [sourceAccount, setSourceAccount] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  // Datos de ejemplo para las cuentas
  const accountsData = [
    { id: 1, accountNumber: '12345678', balance: 1000 },
    { id: 2, accountNumber: '87654321', balance: 500 },
    { id: 3, accountNumber: '98765432', balance: 1500 },
    { id: 4, accountNumber: '23456789', balance: 800 },
  ];

  const handleTransfer = (e) => {
    e.preventDefault();

    // Validar la cuenta de origen
    const sourceAccountData = accountsData.find(account => account.accountNumber === sourceAccount);
    if (!sourceAccountData) {
      setError('La cuenta de origen no es válida');
      return;
    }

    // Validar la longitud de la cuenta de destino
    if (destinationAccount.length !== 8) {
      setError('La cuenta de destino debe tener 8 caracteres');
      return;
    }

    // Validar la cantidad a transferir
    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0 || transferAmount > 100000) {
      setError('La cantidad a transferir debe ser un número positivo menor a 100000');
      return;
    }

    // Validar que la cuenta de origen tenga suficiente saldo
    if (transferAmount > sourceAccountData.balance) {
      setError('La cuenta de origen no tiene suficiente saldo para esta transferencia');
      return;
    }

    // Ejecutar la función de transferencia
    onTransfer(sourceAccount, destinationAccount, transferAmount);

    // Limpiar el formulario y errores
    setSourceAccount('');
    setDestinationAccount('');
    setAmount('');
    setError('');
  };

  return (
    <div className="transfer-form-container">
      <h2>Realizar Transferencia</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleTransfer}>
        <label htmlFor="sourceAccount">Cuenta de Origen:</label>
        <select
          id="sourceAccount"
          value={sourceAccount}
          onChange={(e) => setSourceAccount(e.target.value)}
        >
          <option value="">Seleccionar Cuenta</option>
          {accountsData.map(account => (
            <option key={account.id} value={account.accountNumber}>{account.accountNumber}</option>
          ))}
        </select>
        <label htmlFor="destinationAccount">Cuenta de Destino:</label>
        <input
          type="text"
          id="destinationAccount"
          value={destinationAccount}
          onChange={(e) => setDestinationAccount(e.target.value)}
        />
        <label htmlFor="amount">Cantidad a Transferir:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="button-container">
          <button type="button" onClick={() => {
            setSourceAccount('');
            setDestinationAccount('');
            setAmount('');
            setError('');
          }}>Cancelar</button>
          <button type="submit">Transferir</button>
        </div>
      </form>
    </div>
  );
};

export default TransferForm;
