import React, { Component } from 'react';
import './Main.css';
import substitueimg from "./Images/breaking_news.jpg";

export class NewsItem extends Component {
render() {
    let { title, getdescription, imgurl, newsurl ,author,date} = this.props;
    return (
        <div className='mt-6'>
            <div className='container check mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-2'>
                <div>
                    <img className="rounded-t-lg" src={!imgurl ? substitueimg : imgurl} alt="Images" />
                </div>
                <div className='info '>
                    <h1 className='m-6 newstitle'>{title}</h1>
                    <p className='newsdescription'>{getdescription}</p>
                    <p className='newsdescription'>By {!author?"Unknown":author} on {new Date(date).toUTCString()}</p>
                    <a href={newsurl} target='_blank' rel='noopener noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 newsbtn">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    </a>
                </div>

            </div>
        </div>
    );
}
}

export default NewsItem;
