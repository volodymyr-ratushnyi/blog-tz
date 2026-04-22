'use client'

import {PostList, PostSkeletonList} from "@/entities/post";
import {Suspense, useCallback, useState} from "react";
import {LoadMore} from "@/features/load-more";


export function PostsFeed() {
    const [pages, setPages] = useState([1]);
    const [hasMore, setHasMore] = useState(true);

    const onLastPage = useCallback((page: number) => {
        if (page === pages.length) {
            setHasMore(false);
        }
    }, [pages])

    return <section className={'w-[50%] flex flex-col gap-4'}>
        {pages.map((page) => (
            <Suspense key={page} fallback={<PostSkeletonList count={3} />}>
                <PostList
                    page={page}
                    onLastPage={() => onLastPage(page)}
                />
            </Suspense>
        ))}
        <LoadMore
            onInView={() => setPages((prev) => [...prev, prev.length + 1])}
            disabled={!hasMore}
        />
    </section>
}
