import React, { useState, useEffect } from 'react';
import LastProductUser from './LastProductUSer';

function LastView() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseProducts = await fetch('/api/products');
                const dataProducts = await responseProducts.json();
                setProducts(dataProducts.products || []);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchDataUsers = async () => {
            try {
                const responseUsers = await fetch('/api/users');
                const dataUsers = await responseUsers.json();
                setUsers(dataUsers.users || []);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        fetchDataUsers();
    }, []);

    const getLastItem = (data, key) => {
        return data.length ? data[data.length - 1][key] : '';
    };

    const product = {
        grantitle: "Último producto añadido",
        title: `Nombre: ${getLastItem(products, 'name') || 'N/A'}`,
        description: `Descripcion: ${getLastItem(products, 'description') || 'N/A'}`,
        urlImage: getLastItem(products, 'detail') ? `${getLastItem(products, 'detail')}/image` : 'N/A',
    };

    const user = {
        grantitle: "Último usuario creado",
        title: `Nombre: ${getLastItem(users, 'name') || 'N/A'}`,
        description: `Email: ${getLastItem(users, 'email') || 'N/A'}`,
        urlImage: getLastItem(users, 'detail') ? `${getLastItem(users, 'detail')}/image` : 'N/A',
    };

    const newDate = [product, user];

    return (
        <div className="row">
            {newDate.map((item, index) => (
                <LastProductUser {...item} key={index} />
            ))}
        </div>
    );
}

export default LastView;
