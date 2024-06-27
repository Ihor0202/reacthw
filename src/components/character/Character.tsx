import React, {FC} from 'react';


interface IProps {
    name:string
    images: string
    paragraph?: string
}
const Character: FC<IProps> = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.images} alt={props.name}/>
            <p>{props.paragraph}</p>
        </div>
    )
};

export default Character;