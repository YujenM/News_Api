import React, { Component } from 'react'
import Loader from './Images/loader.gif'
import './Main.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className='loadinggif'>
                <img className='loader ' src={Loader} alt='loader'/>                
            </div>
        )
    }
}
