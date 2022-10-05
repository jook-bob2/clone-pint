import { useCallback, useEffect, useState } from 'react'

export default function useScroll() {
    const [state, setState] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (window) {
            document.addEventListener('scroll', () => onScroll())
        }

        return () => {
            document.removeEventListener('scroll', () => onScroll())
        }
    }, [])

    const onScroll = useCallback(() => {
        setState({ x: window.scrollX, y: window.scrollY })
    }, [])

    return {
        scrollX: state.x,
        scrollY: state.y,
    }
}
