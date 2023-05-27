import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from 'solid-js/store'

type FontFamily = 'sans' | 'serif' | 'mono'

export type FontFamilyContextState = {
  readonly fontFamily: FontFamily;
}

export type FontFamilyContextValue = [
  state: FontFamilyContextState,
  actions: {
    setFontFamily: (fontFamily: FontFamily) => void;
  }
]

const defaultState: FontFamilyContextState = {
  fontFamily: 'sans'
}

const FontFamilyContext = createContext<FontFamilyContextValue>([
  defaultState,
  {
    setFontFamily: () => {},
  }
])

export const FontFamilyProvider: ParentComponent = (props) => {
  const [state, setState ] = createStore<{ fontFamily: FontFamily}>({ fontFamily: localStorage.getItem('localhost:font-family') as FontFamily || 'sans'})

  const setFontFamily = (fontFamily: FontFamily) => {
    setState('fontFamily', fontFamily)
    localStorage.setItem('localhost:font-family', fontFamily)
  }

  return (
    <FontFamilyContext.Provider value={[state, { setFontFamily }]}>
    {props.children}
    </FontFamilyContext.Provider>
  );
}

export const useFontFamily = () => useContext(FontFamilyContext)