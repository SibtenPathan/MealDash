import React from 'react';

const Category = ({ setCategory, setPriceOrder, setSearchTerm }) => {
    const categories = ["All", "Starter", "Main Course", "Dessert", "Beverages"];

    return (
        <div className="flex items-center mt-20 ml-10 space-x-4">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box p-2">
                {categories.map((cat, index) => (
                    <li key={index}>
                        <a onClick={() => setCategory(cat)}>{cat}</a>
                    </li>
                ))}
            </ul>
            <div className="form-control">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="input input-bordered w-48 md:w-auto" 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">More Options</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={() => setPriceOrder("lowToHigh")}>Price: Low to High</a></li>
                    <li><a onClick={() => setPriceOrder("highToLow")}>Price: High to Low</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Category;
