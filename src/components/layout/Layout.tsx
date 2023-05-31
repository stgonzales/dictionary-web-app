import { ParentComponent } from "solid-js";
import { useTheme } from "@/context";

export const Layout: ParentComponent = ({ children }) => {
  const [state] = useTheme()

  return (
    <div class={`${state.theme} absolute bottom-0 top-0 right-0 left-0`}>
      <div class="bg-neutral-100 dark:bg-neutral-800 w-full min-h-screen">
        <div class='mx-auto pt-6 px-6 md:pt-14 max-w-[366px] md:max-w-[689px] lg:max-w-[737px]'>
          { children }
        </div>
      </div>
    </div>
  )
}