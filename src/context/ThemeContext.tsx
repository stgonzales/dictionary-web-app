import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from 'solid-js/store'

export type ThemeContextState = {
  readonly theme: string | null;
}

export type ThemeContextValue = [
  state: ThemeContextState,
  actions: {
    setDarkMode: () => void;
    setLightMode: () => void;
  }
]

const defaultState = {
  theme: 'light'
}

const ThemeContext = createContext<ThemeContextValue>([
  defaultState,
  {
    setDarkMode: () => {},
    setLightMode: () => {}
  }
])

export const ThemeProvider: ParentComponent = (props) => {
  const [state, setState ] = createStore<{ theme: string }>({ theme: localStorage.getItem('localhost:theme') || 'light'})

  const setDarkMode = () => {
    setState('theme', 'dark')
    localStorage.setItem('localhost:theme', 'dark')
  }

  const setLightMode = () => {
    setState('theme', 'light')
    localStorage.setItem('localhost:theme', 'light')
  }

  return (
    <ThemeContext.Provider value={[state, { setDarkMode, setLightMode}]}>
    {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext)