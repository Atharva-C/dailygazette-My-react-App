import React, { Component } from 'react'
import Newscontent from '../Newscontent'

export class Newsbar extends Component {

    articles = []
    constructor() {
        super();  //to avoid error always invoke constructor from super class.

        // console.log("hello i am a constructor from newsbar")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // async-await function-- the function waits inside its body, for the resolution of promise of fetch(url) and then proceeds further
    //componentDidMount() function runs after the render() function

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=09cb5e70a5be433ea1416be1df1ba85e";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            page: this.state.page = 1,
        })
    }

    handleclick2 = async () => {

        console.log("click 2 called")

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=09cb5e70a5be433ea1416be1df1ba85e&page=${this.state.page +1}`;
        let data = await fetch(url);
        let parsedDatapage2 = await data.json();
        console.log(parsedDatapage2);
        this.setState({
            page: this.state.page = 2,
            articles: parsedDatapage2.articles
        })

    }

    handleclick1 = async () => {

        console.log("click 1 called")


        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=09cb5e70a5be433ea1416be1df1ba85e&page=${this.state.page -1}`;
        let data = await fetch(url);
        let parsedDatapage1 = await data.json();
        console.log(parsedDatapage1);
        this.setState({
            page: this.state.page = 1,
            articles: parsedDatapage1.articles
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='text-center my-3 display-3'>*** Top headlines Today! ***</h1>
                    <div className="container text-center">
                        <div className="row row-cols-4">
                            {this.state.articles.map((element) => {
                                return <div className="col my-3" key="url">
                                    < Newscontent title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/previews/000/198/221/original/vector-breaking-news-banner-background-with-world-map.jpg"} newsUrl={element.url} />

                                    {/* here the parameter named "element" is passed so that we can iterate among all the news items(array elements) which are taken from the json file by the news api */}
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="container my-4 text-center" >
                    <div className="btn-group " role="group" aria-label="First group">
                        <button type="button" disabled={this.state.page === 1} className="btn btn-dark" onClick={this.handleclick1}>1</button>
                        <button type="button" disabled={this.state.page === 2} className="btn btn-dark" onClick={this.handleclick2}>2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsbar

