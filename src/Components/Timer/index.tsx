import React from 'react';
import { secondsToMinutes } from '../../utils/secondsToMinutes';

import { Container } from './styles';

interface Props {
  mainTime: number;
}

const Timer = (props: Props): JSX.Element => {
  return <Container> {secondsToMinutes(props.mainTime)} </Container>;
};

export default Timer;
