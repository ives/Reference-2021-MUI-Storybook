import { createMuiTheme } from "@material-ui/core";

const myTheme1 = () => ({
  typography: {

  },
  buttons: {
    height: 50
  },
  colors: {
    background: 'salmon',
    dot: 'green',
  }
});

export const getMyTheme = () => {
  const themeOne = myTheme1();

  // deal with overrides
  // merge themes

  return createMuiTheme(themeOne);
}