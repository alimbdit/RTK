import { useForm } from "react-hook-form"
import PostCard from "../components/layout/PostCard";
import { useGetPostsQuery, useGetPostByIdQuery, useSetPostMutation } from "../redux/features/api/baseApi";


const Feed = () => {

    const { data: posts, isLoading, error, isError } = useGetPostsQuery();  
    
    //* (Query) returns an object but mutation  return an arry
    
    const { data: post } = useGetPostByIdQuery(1);

    const [setPost, {data:postData}] = useSetPostMutation();

    console.log(postData)

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        setPost(
            {
                title: 'This is Title',
                body: data?.post,
                userId: 1152
              }
        )
    }

    if (isLoading) {
        return <p className="text-9xl text-zinc-300">Loading...</p>
    }
    if (!isLoading && isError) {
        return <p className="text-9xl text-zinc-300">Something went wrong.</p>
    }



    return (
        <div>
            <h1>Feed</h1>
            <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
               <input className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md" type='text' {...register('post')}/>
               <button type='submit' className="bg-zinc-800 text-zinc-300 text-lg border border-zinc-300  p-3 rounded-md">Post</button>
            </form>
            <div className="bg-zinc-300 p-10 my-3 rounded-md">

                <h1>{post?.title}</h1>
                <p>
                    {post?.body}
                </p>

            </div>
            <div className="flex flex-col gap-3">
                {
                    posts?.map(post => <PostCard key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Feed;