import { ParentComponent } from "solid-js";
import { useTheme } from "@/context";

export const Layout: ParentComponent = ({ children }) => {
  const [state] = useTheme()

  return (
    <div class={`${state.theme} absolute bottom-0 top-0 right-0 left-0`}>
      <div class="bg-neutral-100 dark:bg-neutral-800 w-full min-h-screen">
        <div class='mx-auto xs:max-w-[327px] sm:max-w-[576px] max-w-[703px]'>
          { children }
        </div>
      </div>
    </div>
  )
}