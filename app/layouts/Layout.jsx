import classNames from "classnames"
import { Menu } from "~/components"

export default function Layout({children, className}) { 
  return (
    <> 
      <Menu/>
      <div className={classNames("container mx-auto", {
        [className]: className, 
      })}>{children}</div>
    </>
  )
}
