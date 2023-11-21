import React, { useState, useEffect} from 'react';
import ChartRow from './chartRow';

function Chart (){

    let [products, setProducts] = useState({})

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

///////////// PRODUCTOS /////////////

let productArray = products.data

console.log(productArray);



    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productArray &&
                            productArray.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;