/* @refresh reload */
import { render } from 'solid-js/web';
import { ThemeProvider, FontFamilyProvider, DictionaryProvider } from './context';
import App from './App';

import './index.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <FontFamilyProvider>
    <ThemeProvider>
      <DictionaryProvider>
        <App/>
      </DictionaryProvider>
    </ThemeProvider>
  </FontFamilyProvider>
  ), root!);
