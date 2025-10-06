import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const fontFamilyBold = [
    '"Open Sans Bold"',
    'sans-serif'
].join(',');

const fontFamilyLight = [
    '"Open Sans Light"',
    'sans-serif'
].join(',');

const themeOptions: ThemeOptions = {

    spacing: 8,
    typography: {
        h3: {
            fontFamily: fontFamilyBold,
        },
        h4: {
            fontFamily: fontFamilyBold,
        },
        h5: {
            fontFamily: fontFamilyBold,
        },
        h6: {
            fontFamily: fontFamilyBold,
        },
        fontFamily: fontFamilyLight,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#d32f2f',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff5252',
            contrastText: '#f5f5f5',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        warning: {
            main: '#f2c94c',
        },
        info: {
            main: '#ff8a80',
        },
        success: {
            main: '#66bb6a',
        },
        error: {
            main: '#f06262',
            contrastText: '#f5f5f5',
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#ffb4b4',
        }
    }
};

export const theme = createTheme(themeOptions);
export const makeTheme = (element: HTMLDivElement) => createTheme(
    {
        ...themeOptions,
        components: {
            MuiPopover: {
                defaultProps: {
                    container: element,
                },
            },
            MuiPopper: {
                defaultProps: {
                    container: element,
                },
            },
            MuiModal: {
                defaultProps: {
                    container: element,
                },
            },
        },
    }
);
