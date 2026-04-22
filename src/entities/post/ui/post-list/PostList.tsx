import { Post, PostCard } from '@/entities/post'
import { usePosts } from '@/entities/post/hooks/usePosts'
import { useEffect } from 'react'
import { PAGE_SIZE } from '@/entities/post/config'

export function PostList({
  page,
  onLastPage,
}: {
  page: number
  onLastPage: () => void
}) {
  const posts: Post[] = usePosts(page)

  useEffect(() => {
    if (posts.length < PAGE_SIZE) {
      onLastPage()
    }
  }, [onLastPage, posts])

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}
