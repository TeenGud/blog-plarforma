import { Pagination } from 'antd';
import { PostList } from "../components/PostList"

export const HomePage = () => {
    return (
        <div className='flex flex-col items-center'>
            <PostList />
            <Pagination className='mb-8' defaultCurrent={1} total={50} />
        </div>
    )
}