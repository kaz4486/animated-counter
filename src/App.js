import { useState } from 'react';
import './App.css';
import AnimatedNumbers from 'react-animated-numbers';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className='App'>
      <div className='main'>
        <h1 className='title gradient'>Animated counter</h1>
        <AnimatedNumbers
          includeComma
          animateToNumber={num}
          fontStyle={{ fontSize: 60 }}
          locale='en-US'
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            // { mass: 1, tension: 210, friction: 180 },
          ]}
        ></AnimatedNumbers>
        <div className='paragraph'>Just try!</div>
        <div className='buttons_area'>
          <button
            className='button'
            onClick={(num) => setNum((num) => num - 50)}
          >
            Decrease
          </button>
          <button
            className='button green'
            onClick={(num) => setNum((num) => num + 50)}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
