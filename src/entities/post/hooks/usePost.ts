import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {Post} from "@/entities/post";
import {fetchPost} from "@/entities/post/api/postApi";

export const usePost = (id: number) => {
    const queryClient = useQueryClient();

    const { data } = useSuspenseQuery({
        queryKey: ["posts", "detail", id],
        queryFn: () => fetchPost(id),
        initialData: () => {
            const pages = queryClient
                .getQueriesData<Post[]>({ queryKey: ["posts", "list"] })
                .flatMap(([, posts]) => posts ?? []);

            return pages.find((post) => post.id === id);
        },
    });
    return data
};
