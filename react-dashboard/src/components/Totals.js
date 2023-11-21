import React from 'react';
import SmallCard from './SmallCard.js';
import { useState, useEffect } from 'react'

/*  Cada set de datos es un objeto literal */

function Totals(){

    let [products, setProducts] = useState({})
    let [users, setUsers] = useState({})

    useEffect(() => {
        (
            async function(){
                try {
                    let response = await fetch('/api/products');
                    let data = await response.json();
                    console.log(data);
                    setProducts(data)
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);
    

    useEffect(() => {
        (
            async function(){
                try {
                    let response = await fetch('/api/users');
                    let data = await response.json();
                    console.log(data);
                    setUsers(data)
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, []);

/* <!-- totals in db --> */
/* <!-- products --> */

let product = {
    title: 'Total Productos',
    color: 'primary', 
    cuantity: products.count ? products.count : '',
    icon: 'fa-clipboard-list'
}

/* <!-- totals in db --> */
/* <!-- usuarios --> */

let user = {
    title:' Total Usuarios', 
    color:'success', 
    cuantity: users.count ? users.count : '',
    icon:'fa-award'
}

/* <!-- totals in db --> */
/* <!-- categorias --> */

let category = {
    title:'Total Categorias' ,
    color:'warning',
    cuantity: products.countByCategory ? products.countByCategory.length : '',
    icon:'fa-user-check'
}

let totals = [product, user, category];

    return (
    
        <div className="row">
            
            {totals.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default Totals;