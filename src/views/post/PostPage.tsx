import { PostDetail } from '@/widgets/post-detail/ui/PostDetail'

export async function PostPage() {
  return (
    <main className={'w-[80vw] mx-auto px-4'}>
      <PostDetail />
    </main>
  )
}
