import { Component, JSX, Show } from "solid-js";
import { Errors, createFormActions } from 'solid-form-action'
import { useDictionary, useFontFamily } from "@/context";

export const Form: Component = () => {
  const [_, { searchWord, reset }] = useDictionary()
  
  const { actions, formState, errors, form } = createFormActions({
    initialValues: {
      word: ""
    },
    validate: (values) => {
      const errs: Errors<typeof values> = {};
      if (values.word.length === 0) {
        errs.word = "Title must not be empty";
      }

      reset()

      return errs;
    },
    onSubmit: ({ word }) => {
      searchWord(word)
    },
  })

  return (
    <form use:form>
      <Input ref={actions.word} value={formState.word} type="text" placeholder="Search for any word…" error={!!errors.word} errorMessage="Whoops, can’t be empty…" />
    </form>
  )
}

const Input: Component<{ error: boolean, errorMessage: string } & JSX.InputHTMLAttributes<HTMLInputElement>> = ({error, errorMessage, ...props}) => {
  const [ fontState ] = useFontFamily()

  return (
    <div class="w-full hover:cursor-pointer flex flex-col gap-2">
      <div class={`flex items-center bg-neutral-200 dark:bg-neutral-700 focus-within:outline focus-within:outline-1 ${error ? 'focus-within:outline-secondary' : 'focus-within:outline-primary'} rounded-2xl peer`}>
        <input {...props} style={ {background: 'none'}} class={`w-full py-5 pl-6 focus:outline-none text-lg text-neutral-600 dark:text-neutral-100 font-bold placeholder:text-sm md:placeholder:text-lg placeholder:font-${fontState.fontFamily} font-${fontState.fontFamily} placeholder:text-neutral-600/25 dark:placeholder:text-neutral-200/25`}/>
        <div class="bg-neutral-200 dark:bg-neutral-700 pr-6 hover:cursor-pointer group">
          <svg class='stroke-primary group-hover:scale-105 transition-transform' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
        </div>
      </div>
      <Show when={error}>
        <small class={`font-${fontState.fontFamily} text-secondary text-sm md:text-lg invisible peer-focus-within:visible`}>{errorMessage}</small>
      </Show>
    </div>
  )
}