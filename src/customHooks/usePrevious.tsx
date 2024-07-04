import {useState} from "react"


// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable



const usePrevious = (item: number[]) => {
    const [prev, setPrev] = useState<number[]>([])
    const [next, setNext] = useState<number[]>([])
    if (item !== prev) {
        setNext(prev)
        setPrev(item)
    }
    return [prev, next]
}


export default usePrevious;
