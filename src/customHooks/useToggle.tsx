import { useState } from "react"
// Уважно прочитати і створити хуки яки роблять відповідні дії
//
// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"
//
// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable



export const useToggle = (bool: boolean):[boolean, () => void ] => {
    const [toggle, setToggle] = useState(bool)
    const handleToggle = () => setToggle(prevState => !prevState)
    return [toggle, handleToggle]
}

// let [toggle,otherToggle] = useToggle(true)
