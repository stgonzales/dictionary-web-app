import { FontFamily, useFontFamily } from "@/context"
import { Show, createSignal } from "solid-js"

export const DropDown = () => {
  const [isOpen, setIsOpen] = createSignal(false)

  const [ font, { setFontFamily } ] = useFontFamily()

  const fontMap: Record<FontFamily, string> = {
    'sans': 'Sans Serif',
    'serif': 'Serif',
    'mono': 'Mono'
  }

  const handleDropDown = () => {
    setIsOpen(!isOpen())
  }

  //TODO: Fix this event type
  const handleOptionSelection = (e: any) => {
    const fontOption = Object.entries(fontMap).find(([_, value]) => value === e.target?.innerText)?.[0] as FontFamily    
    setFontFamily(fontOption)
    setIsOpen(false)
  }



  return (
    <div class="relative cursor-pointer">
      <div class="flex gap-4 items-center justify-end" onClick={handleDropDown}>
        <p class={`font-${font.fontFamily} font-bold text-body-m text-neutral-600 dark:text-neutral-200`}>{fontMap[font.fontFamily]}</p>
        <svg class={`stroke-primary ${isOpen() ? 'rotate-180' : '' } transition-transform`} xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
      </div>
      <Show when={isOpen()}>
        <div class="absolute shadow-light dark:shadow-dark mt-[10.5px] right-0 bg-neutral-100 dark:bg-neutral-700 py-6 pl-6 pr-[69px] rounded-2xl">
          <p class="font-sans font-bold text-body-m text-neutral-600 dark:text-neutral-200 whitespace-nowrap hover:text-primary dark:hover:text-primary cursor-pointer" onClick={(e) => handleOptionSelection(e)}>Sans Serif</p>
          <p class="font-serif font-bold text-body-m text-neutral-600 dark:text-neutral-200 whitespace-nowrap hover:text-primary dark:hover:text-primary cursor-pointer my-4" onClick={(e) => handleOptionSelection(e)}>Serif</p>
          <p class="font-mono font-bold text-body-m text-neutral-600 dark:text-neutral-200 whitespace-nowrap hover:text-primary dark:hover:text-primary cursor-pointer" onClick={(e) => handleOptionSelection(e)}>Mono</p>
        </div>
      </Show>
    </div>
  )
}