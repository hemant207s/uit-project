// src/components/Balance.js

import React from 'react';

function Balance({ income, expenses }) {
  // Calculate the balance by subtracting expenses from income
  const totalBalance = income - expenses;

  return (
    <div className="balance">
      <h2>Total Balance</h2>
      <h3>${totalBalance.toFixed(2)}</h3>
      <div className="balance-details">
        <p>Income: ${income.toFixed(2)}</p>
        <p>Expenses: ${expenses.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Balance;
