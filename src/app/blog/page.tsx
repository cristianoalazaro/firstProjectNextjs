//import { loadPosts } from '../../lib/blog'

import { GetStaticProps } from "next"
import { Post } from "../../../types/Post"
import { NextResponse } from "next/server"

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {next: {revalidate: 7200}}) //mantém em cache por 2 horas
    return res.json()
}

export default async function Page() {
    const posts: Post[] = await getPosts()

    return (
        <div>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
