import React from 'react';
import './App.css';
import CarouselWrapper from './components/CarouselWrapper';

function App() {
  return (
    <div className="App">

      <div style={{ marginTop: "50px" }}>
        <CarouselWrapper slides={1} infinite={false} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <CarouselWrapper slides={4} infinite={true} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <CarouselWrapper slides={10} infinite={false} />
      </div>
    </div>
  );
}

export default App;
