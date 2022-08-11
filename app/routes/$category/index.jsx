import { useLoaderData } from "@remix-run/react";
import Layout from "~/layouts/Layout"
import { getPost } from "~/api";

export default function Category() {
    const {category, posts} = useLoaderData()

    return (
        <Layout>
            <h1>Hola estamos en {category}</h1>
        </Layout>
    )
}

export const loader = async ({params}) => {
    const {category} = params  
    const posts = await getPost(category)

    console.log(posts)
    return {
        category,
        posts
    }
};