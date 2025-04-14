import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPosts } from "../api";
import { useState } from "react";

export const PostList = () => {
    const queryClient = useQueryClient();
    const { data,error,isLoading } = useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts,
        
        //cacheTime:0,
        //staleTime:0
    })
    const [title,setTitle] = useState('')
    const [body,setBody]= useState('')

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: (newPost) => {
          queryClient.setQueryData(['posts'], (oldData: any) => {
            return oldData ? [newPost, ...oldData] : [newPost]
          })
        },
      })

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        mutation.mutate({title,body})
        setTitle('')
        setBody('')
    } 


    if (isLoading) return <p>Cargando..</p>
    if (error instanceof Error) return <p>Error:{error.message}</p>

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  className="border p-2 w-full"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  placeholder="Titulo del Post"
                  required
                />
                <textarea
                 className="border p-2 w-full"
                 value={body}
                 onChange={(e)=>setBody(e.target.value)}
                 placeholder="Contenido del Post"
                 required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Crear Post
                </button>
            </form>

            {mutation.isPending && <p>Enviando el Post</p>}
            {mutation.isError && <p>Error al Enviar {(mutation.error as Error).message}</p>}
            {mutation.isSuccess && <p>Post Creado Correctamente</p>}

            <ul className="space-y-2">
                {data?.slice(0,5).map((post)=>(
                 <li key= {post.id} className="border p-4 rounded shadow" >
                    <h3 className="font-bold">{post.title}</h3>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
            </div>
    )
}