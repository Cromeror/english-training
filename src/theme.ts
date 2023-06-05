import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#088008',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "100%",
                    borderRadius: 2,
                    backgroundColor: '#202020',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ownerState}) => (
                    {
                        borderRadius: 100,
                        ...(ownerState.color === 'primary' && {})
                    }
                )
            }
        }
    }
});

export default theme;
