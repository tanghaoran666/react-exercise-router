import React from 'react';

class Product extends React.Component{

    render() {
        return <div>
            <h2>Product Details:</h2>
            <div className="name">Name:</div>
            <div>{this.props.name}</div><br />
            <div className="id">ID:</div>
            <div>{this.props.id}</div><br />
            <div className="Price">Price:</div>
            <div>{this.props.price}</div><br />
            <div className="Quality">Quality:</div>
            <div>{this.props.quality}</div><br />
            <div className="Desc">Desc:</div>
            <div>{this.props.desc}</div><br />
            <div className="URL">URL:</div>
            <div>/products/{this.props.id}</div><br />
        </div>
    }
}

export default Product;