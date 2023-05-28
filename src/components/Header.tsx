import { useTheme, useFontFamily } from "../context"

export const Header = () => {
  const [{ theme }] = useTheme()
  return (
    <header class='w-full pt-14 mb-12 flex justify-between'>
      <svg class='stroke-neutral-400' xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" /><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" /><path d="M11 9h12" /></g></svg>
      <div class='flex gap-4 items-center justify-end'>
        <DropDown />
        <svg class='stroke-primary' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
        <VerticalDiv />
        <Toogle />
      </div>
    </header>
  )
}

type FontOption = 'sans-serif' | 'serif' | 'mono'

const DropDown = () => {
  const [ font, { setFontFamily } ] = useFontFamily()

  const handleOptionSelection = (e: any) => {
    setFontFamily(e.target.options[e.target.selectedIndex].value)
  }

  return (
    <select name="font" id="font" onChange={handleOptionSelection} class={`font-${font.fontFamily} text-neutral-600 dark:text-neutral-200`}>
      <option value='sans' class="font-sans font-bold text-body-m text-neutral-600 dark:text-neutral-200"  selected>Sans Serif</option>
      <option value='serif' class="font-serif font-bold text-body-m text-neutral-600 dark:text-neutral-200" >Serif</option>
      <option value='mono' class="font-mono font-bold text-body-m text-neutral-600 dark:text-neutral-200" >Mono</option>
    </select>
  )
}

const Toogle = () => {
  const [ themeState, { setDarkMode, setLightMode }] = useTheme()

  const handleToogle = (e: Event) => {
    const isChecked = (e.target as HTMLInputElement).checked

    if(isChecked) setDarkMode()
    else setLightMode()
  }

  return (
    <>
      <input type="checkbox" id="toogle" class='peer h-0 w-0 hidden' checked={themeState.theme === 'dark'} onChange={handleToogle}/>
      <label for="toogle" class="cursor-pointer bg-neutral-400 w-10 h-5 block rounded-[10px] relative peer-checked:bg-primary peer-checked:after:translate-x-[140%] peer-checked:after:right-0 after:absolute after:top-[3px] after:left-[3px] after:w-[14px] after:h-[14px] after:rounded-full after:bg-neutral-100 after:transition-all"></label>
      <svg class="stroke-neutral-400 peer-checked:stroke-primary" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
    </>
  )
}

const VerticalDiv = () => {
  return (
    <div class="w-[1px] h-8 bg-neutral-300" />
  )
}