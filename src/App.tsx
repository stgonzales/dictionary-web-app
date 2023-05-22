import { Component } from 'solid-js';
import { Layout, Header, Main, Footer } from './components';
import { useTheme } from './context/ThemeContext';

const App: Component = () => {
  const [state] = useTheme();

  return (
    <div class={`${state.theme} w-full h-full`}>
      <div class='bg-neutral-100 dark:bg-neutral-800'>
        <Layout>
          <Header/>
          <Main/>
          <Footer/>
        </Layout>
      </div>
    </div>
  );
};

export default App;
