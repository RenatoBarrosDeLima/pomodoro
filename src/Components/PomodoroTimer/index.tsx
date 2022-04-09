import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { secondsToTime } from '../../utils/secondsToTime';
import Button from '../Button';
import Timer from '../Timer';

import { Buttons, Container, Details, Info, Title } from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioFinishWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTimer] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTimer(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTimer(props.pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTimer,
    props.pomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTimer(props.longRestTime);
      } else {
        setMainTimer(props.shortRestTime);
      }

      audioFinishWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTimer,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (!working && !resting) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configureRest,
  ]);

  return (
    <Container working={working}>
      <Title>Você está: {working ? 'Trabalhando' : 'Descansando'}</Title>
      <Timer mainTime={mainTime} />
      <Buttons>
        <Button
          text="Work"
          onClick={() => configureWork()}
          working={working}
          hidden={false}
        ></Button>
        <Button
          text="Rest"
          onClick={() => configureRest(false)}
          working={working}
          hidden={false}
        ></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
          working={working}
          hidden={hidden}
        ></Button>
      </Buttons>

      <Details>
        <Info> Ciclos concluidos: {completedCycles}</Info>
        <Info> Horas trabalhadas: {secondsToTime(fullWorkingTime)}</Info>
        <Info> Pomodoros concluidos: {numberOfPomodoros}</Info>
      </Details>
    </Container>
  );
};

export default PomodoroTimer;
