import { Link } from "react-router-dom"
import { Avatar } from '~/components/shared'


export function PostItem(props) {
  const {post, category} = props 
  return (
    <Link to={`/${category}/${post.slug}`}>
        <div className="relative py-2 px-2 flex item-center rounded-md bg-gray-200 hover:bg-gray-600 hover:text-white">
          <div className="w-[20%] flex justify-center">
            <Avatar src={post.miniature}/>
          </div>
          <div className="w-[80%]">
            <h2 className="font-bold">{post.title}</h2>
            <h3 className="text-sm text-gray-500">{post.description}</h3>
          </div>
        </div>
    </Link>
  )
}
