import { useTheme } from "../context/ThemeContext"

export const Toogle = () => {
const [ state, { setDarkMode, setLightMode }] = useTheme()

const handleToogle = (e: Event) => {
   const isChecked = (e.target as HTMLInputElement).checked

    if(isChecked) setDarkMode()
    else setLightMode()
  }

  return (
    <>
      <input type="checkbox" id="toogle" class='peer h-0 w-0 hidden' checked={state.theme === 'dark'} onChange={handleToogle}/>
      <label for="toogle" class="cursor-pointer bg-neutral-400 w-10 h-5 block rounded-[10px] relative peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:right-0 after:absolute after:top-[3px] after:left-[3px] after:w-[14px] after:h-[14px] after:rounded-full after:bg-neutral-100 after:transition-all"></label>
    </>
  )
}