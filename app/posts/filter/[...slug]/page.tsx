// import { fetchPosts } from '@/lib/api';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostsClient from './Posts.client';
import { fetchPosts } from '@/lib/api';

interface PostsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function PostsPage({ params }: PostsPageProps) {
  const queryClient = new QueryClient();
  const { slug: filters } = await params;
  const query = '';
  const page = 1;

  console.log('filters', filters);

  const userId = filters[0];

  await queryClient.prefetchQuery({
    queryKey: ['posts', query, page, userId],
    queryFn: () =>
      fetchPosts({
        searchText: query,
        page: page,
        ...(userId !== 'All' && { userId }),
      }),
  });

  console.log('userId', userId);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsClient userId={userId} />
      </HydrationBoundary>
    </>
  );
}
