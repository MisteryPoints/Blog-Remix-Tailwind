import { Link } from "@remix-run/react"


export function CategoryItem({cat}) { 
    const {title, slug} = cat
    return (
        <Link to={`/${slug}`}>
            <div className="bg-gray-600 rounded-md hover:opacity-50 alltrans">
                <h2 className="text-white text-center py-2 font-bold">{title}</h2>
            </div>
        </Link>
    )
}
