import path from "path"
import fs from "fs/promises"
import fm from 'front-matter'
 
export async function createPost(post, category) {
    const postPath = path.join(__dirname, '..', `db/posts/${category}`)
    const {title, description, slug, content} = post

    const md = `---
title: ${title}
description: ${description}
miniature: ${category}.jpg
slug: ${slug}
text: ${content}
--- 
`
    const pathSaveFile = path.join(postPath, `${slug}.md`)
    await fs.writeFile(pathSaveFile, md)
}

export async function getPost(category) {
    const postPath = path.join(__dirname, '..', `db/posts/${category}`)
    const files = await fs.readdir(postPath)

    return Promise.all(
        files.map( async fileName => {
            const filePath = path.join(postPath, fileName)
            const file = await fs.readFile(filePath, 'utf-8')
            const {attributes} = fm(file)
            return attributes
        })
    )
}