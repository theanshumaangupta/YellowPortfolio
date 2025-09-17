import { useEffect, useRef, useState } from "react";


export default function Scrollbar({ scrollRef }) {

    const [thumbWidth, setThumbWidth] = useState(0)
    const [thumbLeft, setThumbLeft] = useState(0)
    const [scrollContentWidth, setScrollContentWidth] = useState(0); // New state variable

    useEffect(() => {
        const scrollEl = scrollRef.current;
        const scrollbarTrack = document.querySelector('.custom-scrollbar-track');
        if (!scrollEl || !scrollbarTrack) return;

        const updateThumb = () => {
            // Set the scroll content width
            setScrollContentWidth(scrollEl.scrollWidth);

            const scrollbarTrackWidth = scrollbarTrack.offsetWidth;
            // Calculate thumb width based on visible content vs total content
            const ratio = scrollEl.offsetWidth / scrollEl.scrollWidth;
            setThumbWidth(ratio * scrollbarTrackWidth);
            // Calculate thumb left position
            const scrollRatio = scrollEl.scrollLeft / (scrollEl.scrollWidth - scrollEl.offsetWidth);
            setThumbLeft(scrollRatio * (scrollbarTrackWidth - (ratio * scrollbarTrackWidth)));
        }

        updateThumb()
        scrollEl.addEventListener('scroll', updateThumb)
        window.addEventListener('resize', updateThumb)

        return () => {
            scrollEl.removeEventListener('scroll', updateThumb)
            window.removeEventListener('resize', updateThumb)
        }
    }, [])

    const handleThumbDrag = (e) => {
        e.preventDefault();
        const scrollbarTrack = document.querySelector('.custom-scrollbar-track');
        if (!scrollbarTrack) return;

        const startX = e.clientX;
        const startLeft = thumbLeft;

        const onMouseMove = (eMove) => {
            const dx = eMove.clientX - startX;
            let newLeft = Math.min(
                Math.max(0, startLeft + dx),
                scrollbarTrack.offsetWidth - thumbWidth
            );

            const scrollRatio = newLeft / (scrollbarTrack.offsetWidth - thumbWidth);
            scrollRef.current.scrollLeft = scrollRatio * (scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
        }

        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    return (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gray-700 rounded custom-scrollbar-track">
            <div
                className="h-2 bg-yellow-500 rounded cursor-pointer"
                style={{
                    width: `${thumbWidth}px`,
                    left: `${thumbLeft}px`,
                    position: 'absolute'
                }}
                onMouseDown={handleThumbDrag}
            ></div>
        </div>
    )
}