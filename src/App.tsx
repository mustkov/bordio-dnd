import React from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './assets/theme';
import * as S from './styled';
import loadable from '@loadable/component'

const MainPage = loadable(() => import('./pages/main'))
const Menu = loadable(() => import('./components/Menu'))

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Menu />
      <S.AppContent>
        <MainPage />
      </S.AppContent>
      <S.GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
