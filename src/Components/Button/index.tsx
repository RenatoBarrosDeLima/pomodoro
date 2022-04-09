import React from 'react';

import { Container } from './styles';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  working: boolean;
  hidden: boolean;
}

const Button = (props: Props): JSX.Element => {
  return (
    <Container
      onClick={props.onClick}
      className={props.className}
      working={props.working}
      hidden={props.hidden}
    >
      {props.text}
    </Container>
  );
};

export default Button;
