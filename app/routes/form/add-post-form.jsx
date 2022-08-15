import { Form, useParams } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { ButtonP, Input, TextArea } from "~/components/shared"
import { createPost } from '~/api'

export default function AddPostForm({close}) {
  const {category} = useParams() 

  return (
    <Form method="POST" action="/form/add-post-form" className="grid grid-cols-2">
        <Input name="title" placeholder="Titulo" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-11/12 focus:w-11/12 alltrans self-center'/>
        <Input name="description" placeholder="Descripción" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full alltrans self-center'/>
        <Input name="slug" placeholder="Slug" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full alltrans self-center col-span-2'/>
        <Input name="category" value={category} readOnly className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full alltrans self-center col-span-2'/>

        <TextArea name="content" placeholder="Contenido del Post.." rows="6" className='border-white placeholder-shown:border-none w-full alltrans self-center col-span-2'></TextArea>

        <ButtonP type='submit' className='border-black hover:bg-black mt-3 w-full col-start-1 col-end-3 self-center'>
            Crear Post
        </ButtonP>
    </Form>
  )
}


export const action= async ({ request }) => {
  const formData = await request.formData();
  const category = formData.get('category')

  const data = {
    title: formData.get('title'),
    description: formData.get('description'),
    slug: formData.get('slug'),
    content: formData.get('content')
  }
  
  createPost(data, category)

  return redirect(`/`);
};