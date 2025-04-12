export type Post = {
    id:number
    title: string
    body:string
}

export async function fetchPosts():Promise<Post[]>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('Error al obtener los posts')
    return res.json()    
}

export async function createPost(newPost:{title:string;body:string}) {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts' ,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newPost),
    })
    if (!res.ok) throw new Error ('Error al Crear el Post')
    return res.json()    
}