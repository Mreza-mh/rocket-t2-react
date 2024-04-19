import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useData(link , setOpenTitleModalId , setOpenAddModalId  ) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = link;

    const fetchData = async () => {
        try {
            if (!url || url.trim() === "") {
                setIsLoading(false);
                setError("Invalid URL for fetch");
                return;
            }
            setIsLoading(true);
            setError(null);
            const res = await axios.get(url);
            const reversedData = res.data.reverse(); 
            setData(reversedData);

            setOpenTitleModalId(false);
            setOpenAddModalId(false);

        } catch (e) {
            setError(e.message);
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    };

    const refetchData = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();

        return () => {
            setData(null);
            setIsLoading(true);
            setError(null);
        };
    }, [url]);

    return { data, isLoading, error, refetchData };
}
