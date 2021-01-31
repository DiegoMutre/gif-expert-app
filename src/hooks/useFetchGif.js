import { useEffect, useState } from "react";
import { getGif } from "../helpers/helper";

export const useFetchGif = category => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        const getData = async _ => {
            const data = await getGif(category);
            setState({
                data,
                loading: false,
            });
        };

        getData();
    }, [category]);

    return state;
};
