import { useFontFamily } from "../context/FontFamilyContext"

export const Main = () => {
  return (
    <main>
      <section>
        <Input />
      </section>
    </main>
  )
}

const Input = () => {
  const [ state ] = useFontFamily()

  return (
    <div class="flex items-center bg-neutral-200 focus-within:outline focus-within:outline-1 focus-within:outline-primary rounded-2xl">
      <div class="w-full hover:cursor-pointer">
        <input type="text" placeholder="Search for any word…" style={ {background: 'none'}} class={`w-full py-5 pl-6 focus:outline-none text-heading-s font-bold placeholder:font-${state.fontFamily} font-${state.fontFamily} placeholder:text-neutral-600/25`}/>
      </div>
      <div class="bg-neutral-200 pr-6 hover:cursor-pointer">
        <svg class='stroke-primary' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
      </div>
    </div>
  )
}