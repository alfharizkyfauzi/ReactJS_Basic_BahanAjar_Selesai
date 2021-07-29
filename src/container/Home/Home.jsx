//LIBRARY
import React, { Component, Fragment, } from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
  } from "react-router-dom";

//PAGES
import BlogPost from '../pages/BlogPost/BlogPost';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import GlobalProvider from '../../context/context';

//STYLE
import './Home.css';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../pages/Hooks/Hooks';

class Home extends Component {

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render() {
        return (
            <Router>
             {/* <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp
                    time="7:12"
                    title="Tutorial digebukin emak"
                    desc="1k ditonton. 2 hari lalu" />
                <YouTubeComp
                    time="5:12"
                    title="How to become jadi naruto"
                    desc="12x ditonton. 5 menit lalu" />
                <YouTubeComp
                    time="10:20"
                    title="menggoreng minyak goreng"
                    desc="10x ditonton. 20 hari lalu" />
                <YouTubeComp
                    time="2:00"
                    title="lampu dorayaki"
                    desc="0x ditonton. 1 jam lalu" />
                <YouTubeComp />
                <p>Counter</p>
                <hr />
                <Product />
                <p>Life Cycle Component</p>
                <hr />
                {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp />
                    : null
                }
                <p>Blog Post Component</p>
                <hr />
                <BlogPost/>
            </div> */}
                {/* <Provider 
                    value={
                        {
                            state: this.state,
                            dispatch: this.dispatch  
                        }
                    }> */}
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Blog Post</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                            <Link to="/youtube-component">YouTube</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost}/>
                        <Route path="/detail-post/:postID" component={DetailPost}/>
                        <Route path="/product" component={Product}/>
                        <Route path="/lifecycle" component={LifeCycleComp}/>
                        <Route path="/youtube-component" component={YoutubeCompPage}/>
                        <Route path="/hooks" component={Hooks}/>
                    </Fragment>
                {/* </Provider> */}
            </Router>
        )
    }
}

export default GlobalProvider(Home);