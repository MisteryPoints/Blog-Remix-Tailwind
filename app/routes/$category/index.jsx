import { useLoaderData } from "@remix-run/react";
import Layout from "~/layouts/Layout"

export default function Category() {
    const {category} = useLoaderData()


    return (
        <Layout>
            <h1>Hola estamos en {category}</h1>
        </Layout>
    )
}

export const loader = async ({params}) => {
    const {category} = params 
    return {
        category
    }
};