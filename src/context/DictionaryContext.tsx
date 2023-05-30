import { ParentComponent, createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export type DictionaryContextState = {
  word: string;
  result?: Result[];
  notFound?: NoDefinition;
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
    searchWord: (word: string) => Promise<void>;
    reset: () => void
  }
]

export type NoDefinition = {
  title: string;
  message: string;
};

const defaultState: DictionaryContextState = {
  word: 'keyboard',
}

const DictionaryContext = createContext<DictionaryContextValue>([
  defaultState,
  {
    searchWord: async () => {},
    reset: () => {}
  }
])

export const DictionaryProvider: ParentComponent = (props) => {
  const [state, setState ] = createStore<DictionaryContextState>(defaultState)

  const searchWord = async (word: string) => {
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(data => data.json()) as Result[] | NoDefinition
    
    if(Array.isArray(result)) {
      setState('result', result)
      setState('notFound', undefined)
    }
    else {
      setState('result', undefined)
      setState('notFound', result)
    }
  }

  const reset = () => {
    setState('result', undefined)
    setState('notFound', undefined)
  }

  onMount(() => searchWord(state.word))

  return(
    <DictionaryContext.Provider value={[ state, { searchWord, reset } ]}>
      {props.children}
    </DictionaryContext.Provider>
  )
}

export const useDictionary = () => useContext(DictionaryContext)