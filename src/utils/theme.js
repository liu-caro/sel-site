// Instructions
// https://mui.com/customization/typography/

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export { theme };
