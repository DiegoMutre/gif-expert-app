import { useEffect, useState } from "react";

export const useFetchGif = category => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        // Fetch the api here
    }, [category]);
};
