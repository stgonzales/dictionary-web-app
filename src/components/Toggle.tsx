import { useTheme } from "@/context"

export const Toggle = () => {
  const [ themeState, { setDarkMode, setLightMode }] = useTheme()

  const handleToogle = (e: any) => {
    const { checked } = e.target;

    if(checked) {
      setDarkMode()
    }
    else {
      setLightMode()
    }
  }

  return (
    <div class="flex gap-5 cursor-pointer">
      <input type="checkbox" id="toogle" class='peer h-0 w-0 hidden' checked={themeState.theme === 'dark'} onClick={handleToogle}/>
      <label for="toogle" class="cursor-pointer bg-neutral-400 w-10 h-5 block rounded-[10px] relative peer-checked:bg-primary peer-checked:after:translate-x-[140%] peer-checked:after:right-0 after:absolute after:top-[3px] after:left-[3px] after:w-[14px] after:h-[14px] after:rounded-full after:bg-neutral-100 after:transition-all"></label>
      <svg class="stroke-neutral-400 peer-checked:stroke-primary" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
    </div>
  )
}