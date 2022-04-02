import React from 'react';
import PomodoroTimer from './Components/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={1500}
        cycles={4}
      />
    </div>
  );
}

export default App;
