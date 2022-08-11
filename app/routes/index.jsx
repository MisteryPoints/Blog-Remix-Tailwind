import { useLoaderData } from "@remix-run/react";
import Layout from "~/layouts/Layout";
import { CategoryItem } from '~/components/blog'
import { getCategory } from '~/api'
import { map } from "lodash";

export default function Index() {
  const category = useLoaderData() 
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {category.map( (cat, index) =>  <CategoryItem key={index} cat={cat}/> )}
      </div>
    </Layout>
  );
}

export const loader = () => {
  return getCategory() 
  
};
