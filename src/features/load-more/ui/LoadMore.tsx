"use client";

import {useEffect} from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    onInView: () => void;
    disabled?: boolean;
}

export function LoadMore({ onInView, disabled }: Props) {
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView && !disabled) onInView();
    }, [onInView, inView, disabled]);

    return <div ref={ref} className="h-4" />;
}