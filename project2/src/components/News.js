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
    capitalletter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }    
    constructor(props){
        super(props);
        console.log("hello i am a constructer")
        this.state={
            articles:[],
            loading:false,
            page:1 
        }
        document.title=`${this.capitalletter(this.props.category)}-News`
        
    }
    
    async updateNews(){
        // let apikey="66ee75d845bb4d629c30a6135c00e283"
        let apikey="5c55a1dcd895496da13b7bb267b4e159"
        let newsurl=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=us&apiKey=${apikey}&page=${this.state.page}&page=top&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data=await fetch(newsurl);
        let parseddata=await data.json()
        console.log(parseddata)
        this.setState({articles:parseddata.articles,
            totalResults:parseddata.totalResults,
            loading:false
        })
        console.log(this.state.totalResults)
    }

    async componentDidMount(){
        this.updateNews()

    }
    nextpage = async() => {
        
        let check= this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)
        console.log(this.state.totalResults)
        console.log(this.props.pagesize)
        if (check){

        }else{
            this.setState({page:this.state.page+1})
            this.updateNews();
        }
        console.log("check"+check)
    }
    previouspage=async()=>{
        this.setState({page:this.state.page-1})
        this.updateNews()
    }
    description="Stay up-to-date with the latest breaking news from around the world. Explore comprehensive coverage of current events and important developments in this dynamic news update."
    
    render(){
        return ( 
            <>
                <div className='container mx-auto'>
                    <h1 className='Newsheading'>{this.props.topics}</h1>
                    {this.state.loading && <Spinner/>}
                </div>
                <div>
                    {  
                        !this.state.loading && this.state.articles && this.state.articles.map((Element) => (
                            <NewsItem key={Element.url} title={Element.title} getdescription={!Element.description ? this.description : Element.description} imgurl={Element.urlToImage} newsurl={Element.url} author={Element.author} date={Element.publishedAt} />
                        ))
                    }

                </div>
                <div className='container mx-auto flex justify-center mt-5 mb-5 ' >
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"onClick={this.previouspage} disabled={this.state.page<=1}>Prev</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3 " onClick={this.nextpage} >Next</button>
                </div>
            </>
            );
        }
}
export default News;
