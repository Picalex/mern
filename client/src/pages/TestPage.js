import React, { useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'



export const TestPage = () => {
    const lif = 23
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id

    let arrObjects = []

    arrObjects[0] = {
        id: "1",
        name: "firstArrElement"
    }
    arrObjects[1] = {
        id: "2",
        name: "secondArrElement"
    }

    const themes = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    }
    function Toolbar(props) {
        return (
            <div>

                <ThemedButton />
            </div>
        )
    }

    function ThemedButton() {
        const theme = useContext(ThemeContext)
        console.log(theme)
        return (
            <button style={{ background: theme.background, color: theme.foreground }}>
                Я стилизован     из контекста!
            </button>
        )
    }
    function Nameles(array) {
    array.forEach(function (s) {
        console.log(s.name)
    })
    }

    const ThemeContext = React.createContext(themes.light)


        return (
            <ThemeContext.Provider value={themes.dark}>
                <h5>test</h5>
                {Nameles(arrObjects)}
                <h5>{arrObjects[1].name}</h5>

            </ThemeContext.Provider>
        )





}
