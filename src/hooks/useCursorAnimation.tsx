import {useEffect, useState} from "react";

export default function useCursorAnimation() {
    const [mousePosition, setMousePosition] = useState({
        mouseX: 0,
        mouseY: 0,
    });
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({mouseX: e.clientX, mouseY: e.clientY});
        }
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        }
    }, []);


    return mousePosition;
}