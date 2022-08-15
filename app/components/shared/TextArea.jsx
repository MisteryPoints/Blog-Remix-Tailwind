import classNames from "classnames"

export function TextArea({children, className, ...rest}) {
  return (
    <textarea {...rest} className={classNames('rounded-md bg-stone-800 outline-0  text-white py-2 px-4 my-2',{
      [className] : className
    })}>{children}</textarea>
  )
}
