import { Form } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { unstable_createFileUploadHandler, unstable_parseMultipartFormData, unstable_createMemoryUploadHandler, unstable_composeUploadHandlers} from '@remix-run/node'
import { ButtonP, Input } from "~/components/shared"
import { createCategory } from "~/api"
import path from "path"

export default function AddCategoryForm({close}) {

  const handleSubmit = () => {
    close()
  }

  return (
    <Form method="POST" action="/form/add-category-form" encType="multipart/form-data" className="flex flex-col" onSubmit={handleSubmit}>
        <Input name="title" placeholder="Titulo" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full focus:shadow-blue-500 alltrans'/>
        <Input name="slug" placeholder="Slug" className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full focus:shadow-blue-500 alltrans'/>
        <Input name="image" type='file' accept='image/*' className='border-white placeholder-shown:w-60 placeholder-shown:border-none w-full focus:w-full focus:shadow-blue-500 alltrans'/>

        <ButtonP type='submit' className='border-black hover:bg-black mt-3'>
            Crear Categoría
        </ButtonP>
    </Form>
  )
}

export async function action(props) {
    const {request} = props 
    const requests = await request.clone()
    const formDatas = await requests.formData() 
    const  data =  {
      title: formDatas.get('title'),
      slug: formDatas.get('slug')
    }  
    const uploadHandler = unstable_createFileUploadHandler({
      maxPartSize: 10_000_000,
      directory: path.join(__dirname, '..', `public/uploads`),
      file: ({ filename }) => filename,
    })
    const formData = await unstable_parseMultipartFormData(
      request,
      uploadHandler
    ) 
    const image = formData.get('image') 
    
    if (image) {
      console.log(`File uploaded to server/public/uploads/${image.name}`)
    } else {
      console.log("No file uploaded");
    } 

     
    await createCategory(data) 
    
    return redirect('/')
}