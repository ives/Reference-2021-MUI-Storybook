import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styled, {css} from 'styled-components';

export const StyledBtn = withStyles((theme) => {
  return {
    root: {
      height: theme.buttons.height,
    },
    contained: {
      backgroundColor: theme.colors.background,
    }
  };
})(Button);

// conditional css
const B = css`
  height: 50px;
`;
// inside a block:
// ${({$isOn})  =>
// $isOn && B

// todo background-color: ${({theme}) => theme.colors.dot}; 
export const MiniExtra = styled.span`
  display: flex;
  width: 10px;
  background-color: ${({theme}) => theme.colors.dot}; 
  height: 10px;
  margin-left: 5px;
  border-radius: 5px;
`;