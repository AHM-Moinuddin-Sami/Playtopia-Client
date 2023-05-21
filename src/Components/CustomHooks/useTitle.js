import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Playtopia | ${title}`;
    }, [title]);
}

export default useTitle;