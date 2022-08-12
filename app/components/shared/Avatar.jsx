import classNames from "classnames"

export function Avatar({src, className}) {
  return (
    <div style={{backgroundImage: `url(${src})`}} 
    className={classNames("w-16 h-16 bg-center bg-cover bg-no-repeat rounded-full",
    {
        [className] : className
    })}/>
  )
}
