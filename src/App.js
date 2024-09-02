import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const displayTime = () => {
      const now = new Date();
      const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const timeString = now.toLocaleTimeString(undefined, options);
      setTime(timeString);
    };

    const intervalId = setInterval(displayTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.clock}>{time}</div>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  clock: {
    fontSize: '48px',
    fontFamily: 'sans-serif',
    border: '10px solid red',
    padding: '30px',
    height: '100px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
