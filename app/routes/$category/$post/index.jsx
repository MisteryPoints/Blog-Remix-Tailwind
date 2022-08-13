import { useEffect } from "react"
import { useLoaderData } from "@remix-run/react"
import { Link } from "@remix-run/react"
import Prism from 'prismjs'
import Layout from "~/layouts/Layout"
import { Avatar } from '~/components/shared'
import { BASE_PATH } from '~/utils'
import { getPosts } from '~/api'


import 'prismjs/components/prism-jsx.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'

export default function Post() {
    const { attributes, html } = useLoaderData() 
    const { title, description, miniature, text } = attributes

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <Layout className='mt-7'>
            <Link to={`/${miniature.split('.png',1)}`}>
                <Avatar src={(`${BASE_PATH}/uploads/${miniature}`)} className='rounded-md w-[20%]'/>
            </Link>
            <h1 className='text-2xl text-center font-bold mb-5'>{title}</h1>
            <h2 className="text-xl text-center font-bold mb-3">{description}</h2>
            <p>{text}</p>
            <div dangerouslySetInnerHTML={{ __html: html}}/>
        </Layout>
    )
}

export async function loader(data) {
    const {params} = data
    const category = params.category
    const post = params.post 
    const response = await getPosts(category, post)

    return response
}