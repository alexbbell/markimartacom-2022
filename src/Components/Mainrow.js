import React, { Component, useEffect, useState } from 'react'

export default function Mainrow () {

    const [items, setItems] = useState([]);
    const [operationResult, setOperationResult] = useState(false)
    const [totalPages, setTotalPages] = useState();
    const [totalPosts, setTotalPosts] = useState();

    useEffect( () => {
        const fetchData = async() => {
            LoadPosts();
            setOperationResult(true)
    
        }
        fetchData();
    }, [operationResult])

    const LoadPosts = async () => {
        
        const mode = "dev"; // prod
        let data, json;
        if(mode === "dev") {
             data = await fetch('/posts.json');
             json = await data.json();
             setTotalPages(239)
             setTotalPosts(24)
 
        }
        else {
             data = await fetch('http://markimarta.com/wp-json/wp/v2/posts?per_page=10&order=desc');
             json = await data.json();
            setTotalPages(data.headers.get('x-wp-total'))
            setTotalPosts(data.headers.get('x-wp-totalpages'))        
    
        }
        setItems(json);

        return json;
    }


    const RenderPosts = () => {

        if(items && items.length > 0) {
        
            return <Anonspost data={items} />
        }
        else return <div>Loading....</div>
    
    }

    const Anonspost = () => {
        return (
            <>
            {items.map( (item, index) => {
                    return (
                       <li key={'cat'+ index}>{item.title.rendered}</li>
 
                    )
                } )
            }
            </>
        )
    }



    return (

        <>
        <h1>Main Content</h1>
        <RenderPosts />
            <div>{totalPages}</div>
            <div>{totalPosts}</div>
        </>
    )


}