import React from "react";
import {Link} from 'react-router-dom';

class Products extends React.Component{
    render(){
        return <div>
            <div>All Products: </div><br />
            <Link to='/products/1'>Bicycle</Link><br />
            <Link to='/products/2'>Tv</Link><br />
            <Link to='/products/3'>Pencil</Link><br />
        </div>
    }
}

export default Products;
