import React, { Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="data:image/jpeg;base64,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" alt="Daging Ayam" />
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu pasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 410,000</p>
                    <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
                </div>
        );
    }
}

export default CardProduct;