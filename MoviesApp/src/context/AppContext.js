import React, { useState } from 'react'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [movieShared, setMovieShared] = useState([
        {
            id: 1,
            like: false,
            title: 'Fisrt',
        },
        {
            id: 2,
            like: false,
            title: 'Second',
        },
        {
            id: 3,
            like: false,
            title: 'Third',
        },
    ])
    const handelLiked = (id) => {
        let CopyArr = [...movieShared];
        let indexActive = CopyArr.findIndex(el => el.id == id)
        CopyArr[indexActive].like = !CopyArr[indexActive].like
        setMovieShared(CopyArr)
    }

    const handelRemove = (id) => {

    }


    return (
        <AppContext.Provider value={{ movieShared, handelLiked, setMovieShared }}>
            {children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider };
