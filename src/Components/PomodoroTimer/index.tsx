import React from 'react';
import { useInterval } from '../../hooks/useInterval';
import { secondsToTime } from '../../utils/secondsToTime';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTimer] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTimer(mainTime - 1);
  }, 1000);

  return <div> Olá mundo {secondsToTime(mainTime)} </div>;
};

export default PomodoroTimer;
