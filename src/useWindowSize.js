import {useState, useEffect} from "react";


function getBreakPoint(windowWidth) {
    if (windowWidth) {
        if (windowWidth > 1140) {
            return "lg";
        } else if (windowWidth > 768) {
            return "md"
        } else if (windowWidth> 576) {
            return "sm"
        }
    } else {
        return "null";
    }
}

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? getBreakPoint(window.innerWidth) : undefined
    );

    useEffect(() => {

        function setSize() {
            setWindowSize(getBreakPoint(window.innerWidth));
        }

        if (isWindowClient) {
            //register the window resize listener
            window.addEventListener("resize", setSize);

            //unregister the listerner
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}

export default useWindowSize;
