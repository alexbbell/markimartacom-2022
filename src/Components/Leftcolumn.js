import { ConstructionOutlined } from '@mui/icons-material';
import React, { Component, useEffect, useState } from 'react'


//import fetchCategories from '../Services/Repository'

export default function Leftcolumn ()  {



    const [items, setItems] = useState([]);
    const [operationResult, setOperationResult] = useState(false);

    useEffect( () => {

        const fetchData = async() => {

            const data = await fetch('/categories.json');
//          const data = await fetch('http://markimarta.com/wp-json/wp/v2/categories?per_page=20&order=asc');
            // convert the data to json
            const json = await data.json();
            setItems(json);
            setOperationResult(true)
            console.log('useeffexct', json);
    
        }
        fetchData();
    }, [operationResult] )


const Renderitems = () => {
    
    if(items.length > 0) {
        var newitems = items.forEach( item => {
            item.name = item.name.replace(/&amp;/g, "&")
        });
        
        return (
            <div><Menuleft data={newitems} /></div>
        )
    }
    else {
        return <div>Loading ...</div>
    }    
} 

    const Menuleft = (data) => {
        console.log('menuleft: ', data);
    
        return (
            <ul>
                {items.map((item, index) => {
                    return (
                        <>
                        <li key={'cat'+ index}>{item.name}</li>
                        </>
                    )
                }
                )}
            </ul>
        )
    }

    return (
        <>
        <h1>Categories</h1>
        <ConstructionOutlined />
        <Renderitems />
        </>
    )



}
