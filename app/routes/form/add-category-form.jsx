import { Form } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { ButtonP, Input } from "~/components/shared"
import { createCategory } from "~/api"

export default function AddCategoryForm({close}) {

  const handleSubmit = () => {
    close()
  }

  return (
    <Form method="POST" action="/form/add-category-form" className="flex flex-col" onSubmit={handleSubmit}>
        <Input name="title" placeholder="Titulo" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full focus:shadow-blue-500 alltrans'/>
        <Input name="slug" placeholder="Slug" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full focus:shadow-blue-500 alltrans'/>

        <ButtonP type='submit' className='border-black hover:bg-black mt-3'>
            Crear Categoría
        </ButtonP>
    </Form>
  )
}

export async function action(props) {
    const {request} = props
    const formData = await request.formData()

    const data = {
        title: formData.get('title'),
        slug: formData.get('slug')
    }

    await createCategory(data) 

    return redirect('/')
}