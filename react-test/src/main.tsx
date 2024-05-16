// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// ---------------------------------------------------------------------
//start after this

// 

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// // Counter component
// function Counter() {
//   // Define state variable for the counter
//   const [count, setCount] = useState(0);

//   // Function to increment the counter
//   const incrementCounter = () => {
//     setCount(count + 1);
//   };

//   // Function to decrement the counter
//   const decrementCounter = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={incrementCounter}>Increment</button>
//       <button onClick={decrementCounter}>Decrement</button>
//     </div>
//   );
// }

// // Render the Counter component to the DOM
// ReactDOM.render(<Counter />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';

// // Button component
// function GreenButton() {
//   const buttonStyle = {
//     backgroundColor: 'green',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '0', 
//     cursor: 'pointer',
//   };

//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <button style={buttonStyle} onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// // Render the GreenButton component to the DOM
// ReactDOM.render(<GreenButton />, document.getElementById('root'));

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// // Button component
// function CenteredButton() {
//   const [count, setCount] = useState(0);

//   const buttonStyle = {
//     backgroundColor: 'green',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '50px', // Set border radius to 50px to make half-circle
//     cursor: 'pointer',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//   };

//   const handleClick = () => {
//     setCount(count === 9 ? 0 : count + 1);
//   };

//   return (
//     <button style={buttonStyle} onClick={handleClick}>
//       {count}
//     </button>
//   );
// }

// // Render the CenteredButton component to the DOM
// ReactDOM.render(<CenteredButton />, document.getElementById('root'));

//use this ok namsai

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const App: React.FC = () => {
//   const [numbers, setNumbers] = useState<number[]>([]);

//   const handleGenerateClick = () => {
//     const randomNum = Math.random().toFixed(3);
//     setNumbers(prevNumbers => [...prevNumbers, parseFloat(randomNum)]);
//   };

//   const handleClearClick = () => {
//     setNumbers([]);
//   };

//   const pageStyle = {
//     backgroundColor: 'black',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start', // Align items at the top
//     color: 'white',
//     fontSize: '3rem',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '20px',
//   };

//   const buttonStyle = {
//     backgroundColor: 'transparent',
//     color: 'white',
//     border: '2px solid white',
//     borderRadius: '50px',
//     padding: '10px 20px',
//     margin: '0 10px',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={buttonContainerStyle}>
//         <button style={{ ...buttonStyle, backgroundColor: 'green' }} onClick={handleGenerateClick}>Generate</button>
//         <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={handleClearClick}>Clear</button>
//       </div>
//       <div>
//         {numbers.map((num, index) => (
//           <p key={index}>{num}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const SensingDataApp = () => {
  const [sensors, setSensors] = useState([
    { id: 0, value: 30 },
    { id: 1, value: 60 },
    { id: 2, value: 80 },
    { id: 3, value: 15 },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update sensor values randomly
      const updatedSensors = sensors.map(sensor => ({
        ...sensor,
        value: Math.floor(Math.random() * 101), // Random value between 0 and 100
      }));
      setSensors(updatedSensors);
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [sensors]);

  const containerStyle = {
    backgroundColor: 'black', // Black background color
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px', // Rounded corners
    padding: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const sensorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const barContainerStyle = {
    width: '600px', // Resized bar width
    height: '40px', // Resized bar height
    backgroundColor: '#1E40AF', // Blue sensor bar color
    borderRadius: '10px', // Rounded corners
    overflow: 'hidden', // Hide overflowing content
    position: 'relative',
    border: '2px solid white', // White border
  };

  const barStyle = {
    height: '100%',
    backgroundColor: '#4CAF50', // Green color
    borderRadius: '10px', // Rounded corners
  };

  const valueStyle = {
    position: 'absolute',
    top: '50%',
    right: '5px', // Move to the right
    transform: 'translateY(-50%)',
    color: 'white',
  };

  const percentageStyle = {
    position: 'absolute',
    top: '50%',
    right: '5px', // Move to the right
    transform: 'translateY(-50%)',
    color: 'white',
    paddingLeft: '5px', // Add padding
  };

  const getBarColor = (value) => {
    if (value > 50) {
      return value >= 70 ? '#FFD700' : '#4CAF50'; // Yellow or Green
    } else {
      return value <= 10 ? '#FFA500' : '#800080'; // Orange or Purple
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Sensing Data</h1>
      {sensors.map(sensor => (
        <div key={sensor.id} style={sensorContainerStyle}>
          <p>Sensor #{sensor.id}</p>
          <div style={barContainerStyle}>
            <div
              style={{
                ...barStyle,
                width: `${sensor.value}%`,
                backgroundColor: getBarColor(sensor.value),
              }}
            />
            <p style={percentageStyle}>{sensor.value}%</p>
          </div>
          <p style={valueStyle}>{sensor.value}%</p>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<SensingDataApp />, document.getElementById('root'));
