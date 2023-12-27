import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

export const navbarinfo=[
    {
        title:'Top Headlines',
        path: '/',
        icon : <FontAwesomeIcon icon={icon.faNewspaper} />,
        cName:'nav-text',
        
    },
    {
        title:'Buisness',
        path: '/buisness',
        icon : <FontAwesomeIcon icon={icon.faBusinessTime} />,
        cName:'nav-text',
        
    },
    {
        title:'Science',
        path: '/science',
        icon : <FontAwesomeIcon icon={icon.faFlask} />,
        cName:'nav-text',
        
    },
    {
        title:'Health',
        path: '/health',
        icon : <FontAwesomeIcon icon={icon.faNotesMedical} />,
        cName:'nav-text',
        
    },
    {
        title:'Sports',
        path: '/sports',
        icon : <FontAwesomeIcon icon={icon.faMedal} />,
        cName:'nav-text',
        
    },
    {
        title:'Technology',
        path: '/technology',
        icon : <FontAwesomeIcon icon={icon.faWrench} />,
        cName:'nav-text',
        
    }
    
]