import { Post } from '../model/types'
import { apiJsonPlaceholder } from '@/shared/api/axiosJsonPlaceholder'
import { PAGE_SIZE } from '@/entities/post/config'

export const fetchPosts = async (page: number) => {
  const { data } = await apiJsonPlaceholder.get<Post[]>('/posts', {
    params: { _page: page, _limit: PAGE_SIZE },
  })
  return data
}

export const fetchPost = async (id: number) => {
  const { data } = await apiJsonPlaceholder.get<Post>(`/posts/${id}`)
  return data
}
