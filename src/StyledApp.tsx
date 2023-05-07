import './App.css'
import React from 'react'
import {Box, createTheme, ThemeProvider} from '@mui/material'
import App from './App'

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
})

function StyledApp() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: 'background.default',
                color: 'text.primary'
            }}
        >
            <App/>
        </Box>
    )
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
    document.documentElement.classList.add('dark')

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const mode = prevMode === 'light' ? 'dark' : 'light'
                    console.log('toggleColorMode', mode)
                    if (mode === 'dark') {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.remove('dark')
                    }
                    return mode
                })
                // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            }
        }),
        []
    )

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                }
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <StyledApp/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

// export default App
