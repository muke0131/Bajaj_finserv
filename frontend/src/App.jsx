import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'RA2111026030084';
  }, []);

  const handleSubmit = async (jsonInput) => {
    try {
      const response = await fetch('https://bajaj-finserv-5hwq.onrender.com/api/bfhl/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonInput),
      });

      const data = await response.json();
      setResults(data);
      setError('');
    } catch (err) {
      setError('Error processing the request');
    }
  };

  return (
    <div className="app-container">
      <h1>Your Roll Number</h1> {/* Replace with your actual roll number */}
      <InputForm onSubmit={handleSubmit} />
      {error && <p className="error-text">{error}</p>}
      {results && <Result data={results} />}
    </div>
  );
};

export default App;
