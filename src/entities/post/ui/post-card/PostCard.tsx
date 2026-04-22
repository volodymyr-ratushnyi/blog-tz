import { Card, CardContent, CardHeader } from '@uishadcn/card'
import { Button } from '@uishadcn/button'
import Link from 'next/link'
import { Post } from '@/entities/post'

export function PostCard({ post }: { post: Post }) {
  const { id, title, body } = post
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <h2 className="font-semibold capitalize leading-snug">{title}</h2>
      </CardHeader>
      <CardContent className={'flex justify-between'}>
        <p className="text-sm text-muted-foreground">
          {body.slice(0, 30) + `${body.length > 30 ? '...' : ''}`}
        </p>
        <Link href={`/posts/${id}`}>
          <Button className={'cursor-pointer'} variant={'outline'}>
            Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
