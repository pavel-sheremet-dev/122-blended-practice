'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import { useParams, useRouter } from 'next/navigation';
// import { useQuery } from '@tanstack/react-query';

// import { fetchPostById, fetchUserById } from '@/lib/api';

import css from './PostDetails.module.css';
import { useParams, useRouter } from 'next/navigation';
import { fetchPostById } from '@/lib/api';

// import { User } from '@/types/user';

export default function PostDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };

  const { data, isSuccess } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    placeholderData: keepPreviousData,
    enabled: false,
  });

  return (
    <>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.item}>
            <button onClick={handleClickBack} className={css.backBtn}>
              ← Back
            </button>

            {isSuccess && (
              <div className={css.post}>
                <div className={css.wrapper}>
                  <div className={css.header}>
                    <h2>{data.post.title}</h2>
                  </div>

                  <p className={css.content}>{data.post.body}</p>
                </div>
                <p className={css.user}>Author: {data.user.name}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
