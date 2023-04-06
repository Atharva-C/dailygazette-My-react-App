import React, { Component } from 'react'
import Newscontent from './Newscontent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class Newsbar extends Component {

    static defaultpropTypes ={
        country: 'in',
        pagesize: 8,
        category: 'sports'
    }

    static propTypes={
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    articles = []
    constructor() {
        super();  //to avoid error always invoke constructor from super class.

        // console.log("hello i am a constructor from newsbar")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    // async-await function-- the function waits inside its body, for the resolution of promise of fetch(url) and then proceeds further
    //componentDidMount() function runs after the render() function

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=09cb5e70a5be433ea1416be1df1ba85e&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page,
            totalResults: parsedData.totalResults,
            loading:false
        })
    }

    handleclickprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=09cb5e70a5be433ea1416be1df1ba85e&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    handleclicknext = async () => {
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=09cb5e70a5be433ea1416be1df1ba85e&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 id="heading" className="text-center my-5 display-4">Top headlines Today!</h1>
                    {this.state.loading && <Spinner/>} 
                    {/* means whenever loading== true, then only show the spinner */}
                    <div className="container text-center">
                        <div className="row row-cols-3">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col my-3" key="url">
                                    <Newscontent title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/previews/000/198/221/original/vector-breaking-news-banner-background-with-world-map.jpg"} newsUrl={element.url} />

                                    {/* here the parameter named "element" is passed so that we can iterate among all the news items(array elements) which are taken from the json file by the news api */}
                                </div>
                            })
                            }
                            </div>

                    </div>
                </div>
                <div className="container my-5 text-center" >
                    <div className="btn-group " role="group" aria-label="First group">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-light" onClick={this.handleclickprev}>Prev</button>
                        <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)}className="btn btn-light" onClick={this.handleclicknext}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsbar

