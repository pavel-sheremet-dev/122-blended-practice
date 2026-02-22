'use client';

// import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
// import { fetchPostById, fetchUserById } from '@/lib/api';
// import { useParams, useRouter } from 'next/navigation';

import css from './PostPreview.module.css';

import { useParams, useRouter } from 'next/navigation';
import { fetchPostById } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import { User } from '@/types/user';

export default function PostPreviewClient() {
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
    <Modal onClose={handleClickBack}>
      TEST_MODAL
      <button className={css.backBtn}>← Back</button>
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
    </Modal>
  );
}
