import React from 'react'
import './App.css'
import CurrencyRow from './Component/CurrencyRow'

function App() {
  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
