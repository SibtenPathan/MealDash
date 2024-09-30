import React from 'react';

const Category = ({ setCategory, setPriceOrder, setSearchTerm }) => {
    const categories = ["All", "Starter", "Main Course", "Dessert", "Beverages"];

    return (
        <div className="flex items-center mt-28 ml-10 space-x-4">
            <ul className="menu menu-vertical lg:menu-horizontal bg-cream text-dark-brown rounded-box p-2 shadow-md border border-dark-brown">
                {categories.map((cat, index) => (
                    <li key={index}>
                        <a 
                            className="hover:text-rich-red transition-transform duration-200 ease-in-out hover:scale-105"
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="form-control">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="input input-bordered w-48 md:w-auto bg-cream border border-dark-brown text-dark-brown"
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-rich-red text-dark-brown hover:bg-dark-brown">
                    More Options
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-cream text-dark-brown rounded-box z-[1] w-52 p-2 shadow-md border border-dark-brown">
                    <li>
                        <a 
                            className="hover:text-rich-red transition-transform duration-200 ease-in-out hover:scale-105"
                            onClick={() => setPriceOrder("lowToHigh")}
                        >
                            Price: Low to High
                        </a>
                    </li>
                    <li>
                        <a 
                            className="hover:text-rich-red transition-transform duration-200 ease-in-out hover:scale-105"
                            onClick={() => setPriceOrder("highToLow")}
                        >
                            Price: High to Low
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Category;
