import { ParentComponent, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export type DictionaryContextState = {
  word: string;
  result?: Result[];

}

export type Result = {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  license?: License;
  sourceUrls?: string[];
}

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export type Definition = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export type License = {
  name: string;
  url: string;
}

export type DictionaryContextValue = [
  state: DictionaryContextState,
  actions: {
    setWord: (word: string) => void;
    searchWord: () => Promise<void>;
  }
]

const defaultState: DictionaryContextState = {
  word: '',
}

const DictionaryContext = createContext<DictionaryContextValue>([
  defaultState,
  {
    setWord: () => {},
    searchWord: async () => {}
  }
])

export const DictionaryProvider: ParentComponent = (props) => {
  const [state, setState ] = createStore<DictionaryContextState>({ word: ''})

  const setWord = (word: string) => {
    setState('word', word)
  }

  const searchWord = async () => {
    if(state.word) {
      const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${state.word}`).then(data => data.json()) as Result[]
      setState('result', result)
    }
  }

  return(
    <DictionaryContext.Provider value={[ state, { setWord, searchWord } ]}>
      {props.children}
    </DictionaryContext.Provider>
  )
}

export const useDictionary = () => useContext(DictionaryContext)