import { Link } from "@remix-run/react"

export function Menu() {
  const addPost = () => {
    console.log('Post Creado')
  }
  const addCategory = () => {
    console.log('Categoría Creada')
  }
  return (
    <>
      <div className='bg-stone-800 flex items-center justify-between py-5 px-10'>
        <Link to='/'>
          <h1 className="text-white text-2xl">Dev Blog</h1>
        </Link>
        <div className="grid grid-cols-1">
          <button className="p-1 bg-black text-white rounded-lg mb-3" onClick={addPost}>Crear Post</button>
          <button className="p-1 bg-black text-white rounded-lg" onClick={addCategory}>Crear Categoría</button>
        </div>
      </div>
    </>
  )
}
