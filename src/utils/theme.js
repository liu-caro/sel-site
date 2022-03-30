// Instructions
// https://mui.com/customization/typography/

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { makeStyles} from "@material-ui/core/styles";

// Typography choices
let sofiaProSoftMedium = 'Sofia Pro Soft Medium';
let sofiaProSoftRegular = 'Sofia Pro Soft Regular';
let proximaNova = 'Proxima Nova';
let defaultType = 'Helvetica';
let h1Size = 48;
let h2Size = 32;
let h3Size = 24;
let h4Size = 22;
let h5Size = 20;
let h6Size = 18;
let paragraphSize = 14;
let buttonSize = 13;

// Colors
let turtleGreen = '#00BD79';
let dolphinBlue = '#00DED1';
let giraffeYellow = '#FFCC5A';
let tigerRed = '#FCB7A8';
let hippoPurple = '#592DB5';
let lightTurtleGreen = '#bfe9db';
let lightDolphinBlue = '#dff2f7';
let lightGiraffeYellow = '#fdeec8';
let lightTigerRed = '#fee9e5';
let lightHippoPurple = '#d5cae9';
let darkTurtleGreen = '#006249';
let darkDolphinBlue = '#017B6D';
let darkGiraffeYellow = '#B98000';
let darkTigerRed = '#992600';
let darkHippoPurple = '#19004E';

let theme = createTheme({
    typography: {
        h1: {
            fontFamily: sofiaProSoftMedium, defaultType,
            fontSize: h1Size
        },
        h2: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: h2Size
        },
        h3: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: h3Size
        },
        h4: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: h4Size
        },
        h5: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: h5Size
        },
        h6: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: h6Size
        },
        paragraph: {
            fontFamily: proximaNova, defaultType,
            fontSize: paragraphSize
        },
        body1: {
            fontFamily: proximaNova, defaultType,
            fontSize: paragraphSize
        },
        button: {
            fontFamily: sofiaProSoftRegular, defaultType,
            fontSize: buttonSize
        }
    }
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    input: {
      background: lightDolphinBlue,
      fontFamily: proximaNova, defaultType,
      fontSize: paragraphSize
    }
  }));

export { 
    theme,
    useStyles,
    turtleGreen,
    dolphinBlue,
    giraffeYellow,
    tigerRed,
    hippoPurple,
    lightTurtleGreen,
    lightDolphinBlue,
    lightGiraffeYellow,
    lightTigerRed,
    lightHippoPurple,
    darkTurtleGreen,
    darkDolphinBlue,
    darkGiraffeYellow,
    darkTigerRed,
    darkHippoPurple
};
