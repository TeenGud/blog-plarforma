import { Post } from "./Post"

export const PostList = () => {
    return (
        <ul className="flex flex-col gap-[26px] items-center mb-8 mt-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </ul>
    )
}