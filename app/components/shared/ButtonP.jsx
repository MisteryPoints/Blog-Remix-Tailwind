import classNames from "classnames"; 

export function ButtonP({children, className, ...rest}) {
  return (
    <button className={classNames("alltrans py-1 px-2 bg-transparent border-2 text-white rounded-lg hover:rounded-3xl", {
        [className] : className,
    })} {...rest}>{children}</button>
  )
}
