import { Link } from "@remix-run/react"
import { Avatar } from '~/components/shared'
import { BASE_PATH } from '~/utils'

export function CategoryItem({cat}) { 
    const {title, slug} = cat
    return (
        <Link to={`/${slug}`}>
            <div className="bg-gray-600 rounded-md hover:opacity-50 alltrans flex ">
                <Avatar src={(`${BASE_PATH}/uploads/${slug}.png`)} className='rounded-md w-[20%]'/>
                <h2 className="text-white py-2 font-bold w-[80%] self-center text-center">{title}</h2>
            </div>
        </Link>
    )
}
