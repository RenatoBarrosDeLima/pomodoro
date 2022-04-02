import React from 'react';
import { useInterval } from '../../hooks/useInterval';
import Button from '../Button';
import Timer from '../Timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTimer] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTimer(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="buttons">
        <Button text="teste"></Button>
        <Button text="teste"></Button>
        <Button text="teste"></Button>
      </div>

      <div className="details">
        <p> Testando: asdfasdfasdfasdfasdf</p>
        <p> Testando: asdfasdfasdfasdfasdf</p>
        <p> Testando: asdfasdfasdfasdfasdf</p>
        <p> Testando: asdfasdfasdfasdfasdf</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
