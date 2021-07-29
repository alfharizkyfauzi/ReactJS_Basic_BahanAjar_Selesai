import React, {Component, Fragment} from 'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
// import axios from 'axios';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost:{
            id:1,
            title:'',
            body:'',
            userId:1
        },
        isUpdate: false,
        comments: []
    }

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((result) => {
        //     // console.log(result.data);
        //     this.setState({
        //         post: result.data
        //     })
        // })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then(res => {
            this.getPostAPI();
            this.setState ({
                formBlogPost:{
                    id:1,
                    title:'',
                    body:'',
                    userId:1
                }
            })
        })
        // axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        // .then((res) =>{
        //     console.log(res);  
        //     this.getPostAPI();
        //     this.setState ({
        //         formBlogPost:{
        //             id:1,
        //             title:'',
        //             body:'',
        //             userId:1
        //         }
        //     })
        // }, (err) => {
        //     console.log('error: ', err);
        // })
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(res => {
            this.getPostAPI();
            this.setState ({
                isUpdate :false,
                formBlogPost:{
                    id:1,
                    title:'',
                    body:'',
                    userId:1
                }
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
        //     console.log(res);
        //     this.getPostAPI();
        //     this.setState ({
        //         isUpdate :false,
        //         formBlogPost:{
        //             id:1,
        //             title:'',
        //             body:'',
        //             userId:1
        //         }
        //     })
        // })
    }

    handleRemove = (data) => {
        API.deleteNewBlog(data).then(res => {
            this.getPostAPI();
        })
        // console.log(data);
        // axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            // console.log(res);
        //     this.getPostAPI();
        // })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log('form Change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        // console.log(event.target.name);
        // console.log('init state: ',  this.state.formBlogPost);
        // console.log('new value: ',  formBlogPostNew);
        formBlogPostNew[event.target.name] = event.target.value;
        // let title = event.target.value
        this.setState({
            // formBlogPost: title
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        // Penggunaan Fetch untuk memanggil API
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post:json
        //     })
        // })  
        // ==================================================================
        // Penggunaan Axios untuk memanggil API
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('http://localhost:3004/posts')
        // .then((result) => {
        //     // console.log(result.data);
        //     this.setState({
        //         post: result.data
        //     })
        // })
        // ==================================================================
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
            <p>Halaman Blog Post</p>
            <hr />
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {/* {
                this.state.comments.map(comment => {
                    return <p>{comment.name} - {comment.email}</p>
                })
            } */}
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                })
            }
            </Fragment>
        )
    }
}

export default BlogPost;