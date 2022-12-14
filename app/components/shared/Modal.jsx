
export function Modal({show, close, children}) {
    if (!show) return null

    return (
        <div className="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 ">
            <div className="relative bg-slate-700 w-1/2 min-h-1/3 max-h-full rounded-md p-6 ">
                <span className="absolute -right-3 -top-3 font-bold bg-white px-3 py-1.5 rounded-full hover:cursor-pointer hover:bg-gray-600 transition-all" onClick={close}>X</span>
                <div>{children}</div>
            </div>
        </div>
    )
}
