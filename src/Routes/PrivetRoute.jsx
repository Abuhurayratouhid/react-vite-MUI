import React from 'react';

const PrivetRoute = ({children}) => {
    const user = localStorage.getItem('userInfo')
    if(user){
        return children;
    }
    else{
        return console.log('submit your info to visit this route')
    }
    
};

export default PrivetRoute;