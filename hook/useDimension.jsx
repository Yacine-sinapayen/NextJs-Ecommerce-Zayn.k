import { useState, useEffect } from 'react';


export default function useDimension() {

    const [dimension, setDimension] = useState();

    useEffect(() => {
        window.addEventListener('resize', resizeFunc);

        function resizeFunc(){
            setDimension(window.innerWidth);
        }
        resizeFunc();

        //cleanup function
        return () => {
            window.addEventListener('resize', resizeFunc);
        }

    },[]);

    return dimension

}