import { useCallback, useEffect, useState } from 'react'
import { DirectionType, ScrollState } from './types/useScroll.type'
import debounce from 'lodash/debounce'

const delay = 25

export default function useScroll() {
    const [state, setState] = useState<ScrollState>({
        x: 0,
        y: 0,
    })
    const [loading, setLoading] = useState(false)
    const [direction, setDirection] = useState<DirectionType>(undefined)

    const listener = useCallback((value: ScrollState, mounted: boolean) => {
        if (mounted) {
            const newScrollY = window.scrollY
            const newScrollX = window.scrollX
            if (value.y > newScrollY) {
                setDirection('up')
            } else if (value.y < newScrollY) {
                setDirection('down')
            } else if (value.x > newScrollX) {
                setDirection('left')
            } else if (value.x < newScrollX) {
                setDirection('right')
            }
            setState({ x: newScrollX, y: newScrollY })
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        let mounted = true
        if (window) {
            window.addEventListener(
                'scroll',
                debounce(() => listener(state, mounted), delay),
            )
        }

        return () => {
            mounted = false
            window.removeEventListener('scroll', () => listener(state, mounted))
        }
    }, [state])

    return {
        scrollX: state.x,
        scrollY: state.y,
        direction,
        loading,
        setLoading,
    }
}
