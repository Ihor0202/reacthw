import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostComments} from "../../servise/api.servise";

const PostCommentsPage = () => {


    let {id} = useParams()
    const [comments, setComments] = useState()

    console.log(id)
useEffect(()=> {
    if (id)
    getPostComments(id).then(coments => {
        console.log(coments)
    })
},[id])

    return (
        <div>

        </div>
    );
};

export default PostCommentsPage;