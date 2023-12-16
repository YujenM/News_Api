import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Main.css'
import Logo from './Images/marvel.jpg'

export class News extends Component {
    render() {
        return (
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-2'>
                <NewsItem  title="mytitle" getdescription="Marvel" imgurl={Logo}/>
                <NewsItem  title="mytitle" getdescription="Marvel" imgurl={Logo}/>
                <NewsItem  title="mytitle" getdescription="Marvel" imgurl={Logo}/>
                <NewsItem  title="mytitle" getdescription="Marvel" imgurl={Logo}/>
                <NewsItem  title="mytitle" getdescription="Marvel" imgurl={Logo}/>
            </div>
        )
    }
}

export default News
