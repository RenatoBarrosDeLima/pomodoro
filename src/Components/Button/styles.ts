import styled from 'styled-components';

interface Props {
  working: boolean;
  hidden: boolean;
}

export const Container = styled.button<Props>`
  background: ${($props) => ($props.working ? '#ef5d50' : '#ffffff')};
  color: ${($props) => ($props.working ? '#ffffff' : '#000000')};
  display: ${($props) => ($props.hidden ? 'none' : '')};
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  transition: background-color 300ms ease-in-out;
  margin: 20px auto;
`;
