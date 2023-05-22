import clsx from "clsx";
import { ParentComponent } from "solid-js";
import { useTheme } from "../context/ThemeContext";

export const Layout: ParentComponent = ({ children }) => {
  const [ state ] = useTheme()

  return (
    <div class='mx-auto max-w-[703px]'>
      { children }
    </div>
  )
}