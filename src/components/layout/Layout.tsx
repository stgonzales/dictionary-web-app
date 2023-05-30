import { ParentComponent } from "solid-js";
import { useTheme } from "@/context";

export const Layout: ParentComponent = ({ children }) => {
  const [state] = useTheme()

  return (
    <div class={`${state.theme} absolute pt-6 md:pt-14 max-w-[366px] md:max-w-[689px] lg:max-w-[737px] mx-auto left-6 right-6`}>
      <div class="bg-neutral-100 dark:bg-neutral-800 w-full min-h-screen">
        { children }
      </div>
    </div>
  )
}