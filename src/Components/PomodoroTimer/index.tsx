import React from 'react';
import { useInterval } from '../../hooks/useInterval';
import Button from '../Button';
import Timer from '../Timer';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTimer] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTimer(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste"></Button>
    </div>
  );
};

export default PomodoroTimer;
