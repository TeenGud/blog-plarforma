import { Pagination } from 'antd';
import { PostList } from '../components/PostList';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { URL_API } from '../constants/constants';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const fetchArticles = async (offset: number) => {
  const res = await axios.get(`${URL_API}/articles?limit=5`, {
    params: { offset },
    headers: { Authorization: `Token ${localStorage.getItem('token')}` },
  });
  return res.data;
};

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [offset, setOffset] = useState(searchParams.get('page') ? Number(searchParams.get('page')) * 5 - 5 : 0);
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  const { isPending, error, data } = useQuery({
    queryKey: ['articles', offset, page],
    queryFn: () => fetchArticles(offset),
  });
  const handleChangePagination = (page: number) => {
    setOffset(page * 5 - 5);
    setPage(page);
    setSearchParams({ page: String(page) });
  };
  if (isPending) return <span className="loader flex items-center justify-center mt-10"></span>;

  if (error) return <span className="mt-4 ml-5 font-semibold text-2xl">An error has occurated: {error.message}</span>;

  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <PostList articles={data.articles} />
      <ToastContainer />
      <Pagination
        className="mb-8"
        defaultCurrent={page}
        total={Math.ceil(data.articlesCount / 5) * 10}
        totalBoundaryShowSizeChanger={Math.floor(data.articlesCount / 5)}
        onChange={handleChangePagination}
      />
    </div>
  );
};
