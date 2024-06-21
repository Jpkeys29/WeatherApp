import { useState } from "react";

const useDebounce2 = (location, delay) => {
    let timer = null;

    return (...args) => {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            setLocation(location);
        }, delay);
    }

}

export default useDebounce2;