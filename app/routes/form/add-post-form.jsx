import { Form } from "@remix-run/react"
import { ButtonP, Input } from "~/components/shared"

export default function AddPostForm() {
  return (
    <Form className="flex flex-col">
        <Input name="title" placeholder="Titulo" className='my-2 '/>
        <Input name="post" placeholder="Post" className='my-2 '/>

        <ButtonP type='submit' className='mt-3'>
            Crear Post
        </ButtonP>
    </Form>
  )
}
