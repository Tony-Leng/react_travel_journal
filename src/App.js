import React from 'react'
// import logo from './logo.svg';
import Card from './components/Card';
import data from './data';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}
