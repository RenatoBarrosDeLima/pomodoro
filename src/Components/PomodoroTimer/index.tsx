import React from 'react';
import { useInterval } from '../../hooks/useInterval';

interface Props {
  defaultPomodoroTime: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTimer] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTimer(mainTime - 1);
  }, 1000);

  return <div> Olá mundo {mainTime} </div>;
};

export default PomodoroTimer;
