import classNames from "classnames"; 

export function ButtonP({children, className, ...rest}) {
  return (
    <button className={classNames("py-1 px-2 bg-transparent border-2 border-blue-500 text-white rounded-lg hover:rounded-3xl hover:bg-blue-500 alltrans", {
        [className] : className,
    })} {...rest}>{children}</button>
  )
}
