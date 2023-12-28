import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Main.css'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
            page:1 ,
            totalResults:0
        }
        document.title=`${this.capitalletter(this.props.category)}-News`
        
    }
    
    async updateNews(){
        
        let newsurl=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=us&apiKey=${this.props.apikey}&page=${this.state.page}&page=top&pagesize=${this.props.pagesize}`
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
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1});
        let newsurl = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=us&apiKey=${this.props.apikey}&page=${this.state.page+1}&page=top&pagesize=${this.props.pagesize}`;
    
        let data = await fetch(newsurl);
        let parseddata = await data.json();
        console.log(parseddata);
    
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
        });
    };
    
    description="Stay up-to-date with the latest breaking news from around the world. Explore comprehensive coverage of current events and important developments in this dynamic news update."
    
    render(){
        return ( 
            <>
                <div className='container mx-auto'>
                    <h1 className='Newsheading'>{this.props.topics}</h1>
                    {this.state.loading && <Spinner/>}
                </div>
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !==this.state.totalResults} loader={<Spinner/>}>
                    <div className='mb-4'>
                        {  
                            this.state.articles.map((Element) => (
                                <NewsItem key={Element.url} title={Element.title} getdescription={!Element.description ? this.description : Element.description} imgurl={Element.urlToImage} newsurl={Element.url} author={Element.author} date={Element.publishedAt} />
                            ))
                        }

                    </div>
                </InfiniteScroll>
            </>
            );
        }
}
export default News;
