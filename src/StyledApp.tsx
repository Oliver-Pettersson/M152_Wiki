import './App.css'
import React from 'react'
import { Box, Container, createTheme, IconButton, ThemeProvider, useTheme } from '@mui/material'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/all'
import App from './App'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
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
      <App />
    </Box>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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
        <StyledApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

// export default App
