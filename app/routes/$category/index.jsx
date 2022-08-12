import { useLoaderData } from "@remix-run/react";
import Layout from "~/layouts/Layout"
import { PostItem } from "~/components/blog"
import { getPost } from "~/api";

export default function Category() {
    const {category, posts} = useLoaderData()

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-2 mt-10">
                {posts.map((post, index) => ( 
                    <PostItem key={index} post={post} category={category}/>
                ))}
            </div>
            {[...posts].length < 1 && (<p>No hay Posts</p>)}
        </Layout>
    )
}

export const loader = async ({params}) => {
    const {category} = params  
    const posts = await getPost(category)

    return {
        category,
        posts
    }
};