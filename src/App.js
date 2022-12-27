import {ColorModeContext,useMode} from './theme'
import { CssBaseline,ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar'
import { useState } from 'react';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);  
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <div className="app">
      <main className="content">
        <Topbar/>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
