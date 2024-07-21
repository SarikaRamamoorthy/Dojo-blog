import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {

        const abort = new AbortController();

        setTimeout(() => {
            fetch(url, abort)
            .then(res => {
                if(!res.ok) throw Error('could not fetch the data for that resource')
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                if (e.name == 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(e.message);
                    setIsPending(false);
                }
            });
        }, 1000)

        return () => abort.abort();

    },[url])
    
    return {data, isPending, error};

}

export default useFetch;