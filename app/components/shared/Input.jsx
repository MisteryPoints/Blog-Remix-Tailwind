import classNames from "classnames"

export function Input({className, ...rest}) {
  return (
    <input {...rest} className={classNames('rounded-md bg-stone-800 outline-0  text-white py-2 px-4 my-2',{
      [className] : className
    })}/>
  )
}
