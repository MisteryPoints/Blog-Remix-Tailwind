import { Link } from "@remix-run/react"

export function NoPost() {
  return (
    <div className="text-center">
        <h2>Aun no tenemos Posts en esta categoría</h2>
        <Link to='/' className="text-cyan-600 hover:opacity-60">
            Ver otras categorías
        </Link>
    </div>
  )
}
