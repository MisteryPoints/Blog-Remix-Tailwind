import { Link, useParams } from "@remix-run/react"
import { useState } from "react";
import { ButtonP, Modal } from "~/components/shared"
import AddCategoryForm from "~/routes/form/add-category-form"
import AddPostForm from "~/routes/form/add-post-form";


export function Menu() {
  const { category } = useParams()
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onOpenCloseModal = () => setShow((prevState) => !prevState)

  const handlePost = () => {
    setModalContent(<AddPostForm close={onOpenCloseModal}/>)
    onOpenCloseModal()
  }
  const handleCategory = () => {
    setModalContent(<AddCategoryForm close={onOpenCloseModal}/>)
    onOpenCloseModal()
  }
  return (
    <>
      <div className='bg-stone-800 flex items-center justify-between py-5 px-10'>
        <Link to='/'>
          <h1 className="text-white text-2xl hover:text-gray-600">Dev Blog</h1>
        </Link>
        <div className="grid grid-cols-1">
          {category !== undefined ? ( 
            <ButtonP className={"border-red-600 hover:bg-red-600"} onClick={handlePost}>Crear Post</ButtonP>
            ) : ( 
            <ButtonP className={"border-blue-500 hover:bg-blue-500"} onClick={handleCategory}>Crear Categoría</ButtonP>
          )}
        </div>
      </div>
      <Modal show={show} close={onOpenCloseModal}>{modalContent}</Modal>
    </>
  )
}
