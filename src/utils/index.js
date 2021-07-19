import {debounce} from "lodash";
import { useCallback } from "react";

export const getDayName = (dayNumber) => {
    switch (dayNumber) {
        case 0: return 'Sunday'
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        default: return null
    }
}

export const useFetch = async (url) => {
    const options={
        headers:{
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            'Content-Type':'application/json'
        }
    }

    let response = null;
    let error = null;
    try {
        const res = await fetch(url,options);
        const json = await res.json();
        response = json

    } catch (err) {
        error = err
    }


    return { response, error };
};


export function useDebounce(callback, delay)
{
    return useCallback(debounce(callback,delay),[delay]); // eslint-disable-line react-hooks/exhaustive-deps
}

