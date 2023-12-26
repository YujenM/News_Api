import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Main.css'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        pagesize:5,
        category:'genral',
    }
    static propTypes={
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }    
    constructor(){
        super();
        console.log("hello i am a constructer")
        this.state={
            articles:[],
            loading:false,
            page:1 
        }
        
    }
    async updateNews(){
        let newsurl=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=5c55a1dcd895496da13b7bb267b4e159&page=${this.state.page}&page=top&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data=await fetch(newsurl);
        let parseddata=await data.json()
        console.log(parseddata)
        this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
    }
    async componentDidMount(){
        this.updateNews()

    }
    nextpage = async() => {
        console.log("this is"+Math.ceil(this.state.totalResults/this.props.pagesize))
        this.setState({page:this.state.page+1})
        this.updateNews()
        
    }
    previouspage=async()=>{
        this.setState({page:this.state.page-1})
        this.updateNews()
    }
    
    render(){
        return ( 
            <>
                <div className='container mx-auto'>
                    <h1 className='Newsheading'>{this.props.topics}</h1>
                    {this.state.loading && <Spinner/>}
                </div>
                <div>
                {  
                    !this.state.loading && this.state.articles.map((Element)=>{
                        return <NewsItem key={Element.url} title={Element.title} getdescription={Element.description} imgurl={Element.urlToImage} newsurl={Element.url} author={Element.author} date={Element.publishedAt}/>
                    })
                }
                </div>
                <div className='container mx-auto flex justify-center mt-5 mb-5 ' >
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"onClick={this.previouspage} disabled={this.state.page<=1}>Prev</button>
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3 " onClick={this.nextpage}>Next</button>
                </div>
            </>
            );
        }
}
export default News;
