import {useEffect} from 'react';

const useCustom_useEffect = (count) =>{

    useEffect(() => {
        if(count >= 1){
            document.title = `App Likes(${count})`;
        }else{
            document.title =`React App`;
        }
    },[count]);

}
export default useCustom_useEffect;