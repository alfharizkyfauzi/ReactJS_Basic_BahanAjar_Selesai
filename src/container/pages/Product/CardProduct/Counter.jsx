import React, {Component} from 'react';
import { GlobalConsumer } from '../../../../context/context';
// import {connect} from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActionType';
// import {RootContext} from '../../../Home/Home';

class Counter extends Component {
    // state = {
    //     order: 1,
    //     name: 'Alfha'
    // }

    // handleCounterChange = (bambang) => {
    //     this.props.onCounterChange(bambang);
    // }

    // handlePlus = () => {
    //     // alert('Plus Button');
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }

    // handleMinus = () => {
    //     // alert('Minus Button');
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }
    
    render(){
        // console.log(this.props);
        console.log(this)
        return(
                <div className="counter">
                    {/* <button className="minus" onClick={this.props.handleMinus}>-</button> */}
                    <button className="minus" onClick={()=> this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                    {/* <input type="text" className="input" value={this.props.order} /> */}
                    <input type="text" className="input" value={this.props.state.totalOrder} />
                    {/* <button className="plus" onClick={this.props.handlePlus}>+</button> */}
                    <button className="plus" onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
                </div>
            // <RootContext.Consumer>
            //     {
            //         value => {
            //             console.log('value: ', value);
            //             return (
            //             )
            //         }
            //     }
            // </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);