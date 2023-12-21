import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Main.css'
// import Logo from './Images/marvel.jpg'

export class News extends Component {
    
    constructor(){
        super();
        console.log("hello i am a constructer")
        this.state={
            articles:[],
            loading:false,
            page:1 
        }
        
    }
    async componentDidMount(){
        let newsurl=`https://newsapi.org/v2/top-headlines?c&apiKey=66ee75d845bb4d629c30a6135c00e283&page=1&q=top&pagesize=20`
        let data=await fetch(newsurl);
        let parseddata=await data.json()
        console.log(parseddata)
        this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults})

    }
    nextpage = async() => {
        console.log("this is"+Math.ceil(this.state.totalResults/20))
        if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

        }else{
            let newsurl=`https://newsapi.org/v2/top-headlines?c&apiKey=66ee75d845bb4d629c30a6135c00e283&page=${this.state.page+1}&q=top&pagesize=20`;
            let data=await fetch(newsurl);
            let parseddata=await data.json()
            this.setState({
                page:this.state.page+1,
                articles:parseddata.articles
            })
        }
        
    }
    previouspage=async()=>{
        
        let newsurl=`https://newsapi.org/v2/top-headlines?c&apiKey=66ee75d845bb4d629c30a6135c00e283&page=${this.state.page-1}&q=top&pagesize=20`;
        let data=await fetch(newsurl);
        let parseddata=await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parseddata.articles
        })
    }
    
    render(){
        return ( 
            <>
                <div className='container mx-auto'>
                    <h1 >Top Headlines</h1>
                </div>
                <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-2'>
                {  
                    this.state.articles.map((Element)=>{
                        const truncatedTitle = Element.title && Element.title.length > 40? `${Element.title.slice(0, 40)}...`: Element.title;
                        const truncateddescription = Element.description && Element.description.length > 128? `${Element.title.slice(0, 128)}.........`: Element.description;
                        return <NewsItem key={Element.url} title={truncatedTitle} getdescription={truncateddescription} imgurl={Element.urlToImage} newsurl={Element.url}/>
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
