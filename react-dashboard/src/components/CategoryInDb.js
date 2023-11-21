import React, { useState, useEffect } from 'react';

function CategoryInDb() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                console.log(data);
                setCategories(data.countByCategory || []);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            {/* Categories in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {categories.map((category, index) => (
                                <div key={index} className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {`${Object.keys(category)[0]}: ${Object.values(category)[0]}`}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CategoryInDb;
