import styled from 'styled-components';

import {
  buttonPrimaryColor,
  buttonSecondaryColor,
  buttonTextPrimaryColor,
  buttonTextSecondaryColor,
} from '../../config/colors';

interface Props {
  working: boolean;
  hidden: boolean;
}

export const Container = styled.button<Props>`
  background: ${($props) =>
    $props.working ? buttonSecondaryColor : buttonPrimaryColor};
  color: ${($props) =>
    $props.working ? buttonTextSecondaryColor : buttonTextPrimaryColor};
  display: ${($props) => ($props.hidden ? 'none' : '')};
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  transition: background-color 300ms ease-in-out;
  margin: 20px auto;
`;
