import { useEffect } from "react"

const useScroll = (pathname) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}

export default useScroll;


// how to use?
// const {pathname} = useLocation();
// useScroll(pathname)