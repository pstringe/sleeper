import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
    
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok){
                throw Error('response from server is not ok');
            }
            return res.json()
        })
        .then((data) => {
            setError(false);
            setData(data);
            setIsPending(false);
        })
        .catch((err) => {
            if (err.name === 'AbortError'){
                console.log('aborted fetch')
            }
            else {
                console.log(err.message);
                setIsPending(false);
                setError(true);
            }
        })
        return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;