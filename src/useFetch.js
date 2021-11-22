import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
       const abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
         .then(res => {
            if(!res.ok){
               throw Error('Opps! Something went wrong.....!');
            }
            return res.json()
         })
         .then(data =>{
            setData(data);
            setIsLoading(false);
            setError(null)
         })
         .catch(err => {
             if(err.name === "AbortError"){
               setIsLoading(false);
               setError(err.message);
             }else{
                setIsLoading(false);
                setError(err.message);
             }
            
         })
        }, 1000);

        return ()=> abortCont.abort();
       }, [url])
   
       return { data, isLoading, error}
}

export default useFetch;