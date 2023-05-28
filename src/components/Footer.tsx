import { useFontFamily } from "../context"

export const Footer = () => {
  const [ fontState ] = useFontFamily()

  return (
    <footer class="py-4 w-full text-center bg-neutral-100 dark:bg-neutral-800">
      <p class={`font-${fontState.fontFamily} text-body-s text-neutral-500 dark:text-neutral-200`}>
        Deleveloped with 
        <span class="text-secondary">❤️</span> 
         by <a href="https://github.com/stgonzales">@stgonzales</a>
      </p>
    </footer>
  )
}