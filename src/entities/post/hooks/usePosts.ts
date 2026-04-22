import {useSuspenseQuery} from "@tanstack/react-query";
import {fetchPosts} from "@/entities/post/api/postApi";

export const usePosts = (page: number) => {
    const {data} = useSuspenseQuery({
        queryKey: ['posts', 'list', page],
        queryFn: () => fetchPosts(page),
    });
    return data
};
