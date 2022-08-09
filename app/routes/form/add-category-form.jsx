import { Form } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { ButtonP, Input } from "~/components/shared"

export default function AddCategoryForm() {
  return (
    <Form method="POST" action="/form/add-category-form" className="flex flex-col">
        <Input name="title" placeholder="Titulo" className='my-2 '/>
        <Input name="slug" placeholder="Slug" className='my-2 '/>

        <ButtonP type='submit' className='mt-3'>
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

    console.log(data)

    return redirect('/')
}