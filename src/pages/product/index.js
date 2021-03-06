import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Products extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    };

    goBack = () => window.history.back();




    render() {
        const { product } = this.state;

        
        return (
            <div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>URL: <a href={product.url}>{product.url}</a></p>
            </div>
            <div className="back">
                <button onClick={this.goBack}>Voltar</button>
            </div>
            </div>
        );
    }
}