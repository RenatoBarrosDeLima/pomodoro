import styled from 'styled-components';
import {
  primaryColor,
  secondayColor,
  defaultTextColor,
} from '../../config/colors';

interface Props {
  working: boolean;
}

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Container = styled.div<Props>`
  background: ${($props) => ($props.working ? secondayColor : primaryColor)};
  margin: 50px 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Details = styled.div`
  margin: 20px 0;
`;

export const Info = styled.p`
  font-family: sans-serif;
  font-weight: 600;
  color: ${defaultTextColor};
`;

export const Title = styled.h2`
  text-align: center;
  color: ${defaultTextColor};
`;
