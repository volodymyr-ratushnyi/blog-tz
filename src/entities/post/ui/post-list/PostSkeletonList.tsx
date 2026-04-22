import { Skeleton } from "@/shared/shadcn/components/ui/skeleton";
import { PAGE_SIZE } from '../../config';

export function PostSkeletonList({ count = PAGE_SIZE }: { count?: number }) {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="rounded-xl border border-gray-100 p-5 space-y-3">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                </div>
            ))}
        </div>
    );
}
