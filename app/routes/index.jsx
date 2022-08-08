import Layout from "~/layouts/Layout";

export default function Index() {
  return (
    <Layout className="bg-blue-900">
      <h1 className=" text-orange-600 text-4xl">Welcome to Remix</h1> 
      <div>
        <h2 className=" text-blue-600 text-2xl">Welcome to my first page</h2>
        <p className=" text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aspernatur, voluptate amet molestias iste fugiat libero exercitationem error, ad accusamus eveniet neque beatae officiis hic atque repellat illo repellendus obcaecati.</p>
      </div>

    </Layout>
  );
}
