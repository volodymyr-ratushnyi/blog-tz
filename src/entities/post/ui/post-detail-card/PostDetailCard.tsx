'use client'

import {Card, CardAction, CardContent, CardFooter, CardHeader} from "@uishadcn/card";
import { Separator } from "@uishadcn/separator";
import {Badge} from "@uishadcn/badge";
import {usePost} from "@/entities/post/hooks/usePost";
import {useParams} from "next/navigation";
import Link from "next/link";
import {Button} from "@uishadcn/button";

export function PostDetailCard() {
    const { id: postId } = useParams<{ id: string }>();
    const post = usePost(+postId);
    const {id, userId, title, body} = post;

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center justify-between">
                    <Badge variant="outline">#{id}</Badge>
                    <span className="text-xs text-muted-foreground">User #{userId}</span>
                </div>
                <h1 className="text-2xl font-bold capitalize leading-snug">
                    {title}
                </h1>
            </CardHeader>

            <Separator />

            <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">{body}</p>
            </CardContent>
            <CardFooter className="justify-end">
                <CardAction>
                    <Link href={`/`}>
                        <Button variant={'outline'} className={'cursor-pointer'}>
                            Back
                        </Button>
                    </Link>
                </CardAction>
            </CardFooter>
        </Card>
    )
}
