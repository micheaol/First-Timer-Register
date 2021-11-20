import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
             setIsLoading(false);
             setError(err.message);
            
         })
        }, 1000);
       }, [url])
   
       return { data, isLoading, error}
}

export default useFetch;