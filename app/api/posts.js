import path from "path"
import fs from "fs/promises"
import fm from 'front-matter'
 
export async function createPost(post, category) {
    const postPath = path.join(__dirname, '..', `db/posts/${category}`)
    const {title, description, slug, content} = post

    const md = `---
title:${title},
description:${description},
slug:${slug},
content:${content}
---`
    const pathSaveFile = path.join(postPath, `${slug}.md`)
    await fs.writeFile(pathSaveFile, md)
}
