import React, { Component, Fragment } from 'react';
import { GlobalConsumer } from '../../../context/context';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'
// import {connect} from 'react-redux'
// import {RootContext} from '../../Home/Home'

class Product extends Component {
    // state = {
    //     order: 4,
    //     name: 'Alfha'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEKeaKyg3DVd9RTp61l8vju3pGOF3HmeHIw&usqp=CAU" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="https://www.pinclipart.com/picdir/big/279-2798344_trolley-clipart-vector-png-download.png" alt="" />
                        {/* <div className="count">{this.props.order}</div> */}
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
            // <RootContext.Consumer>
            //     {
            //         value => {
            //             return (
            //             )
            //         }
            //     }
            // </RootContext.Consumer>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         order : state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);