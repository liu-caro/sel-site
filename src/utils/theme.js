// Instructions
// https://mui.com/customization/typography/

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
        }
    }
});
theme = responsiveFontSizes(theme);

export { theme };
