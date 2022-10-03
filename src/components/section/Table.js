import React, { useRef} from 'react'
import {DeveloperMode, Security, ChangeCircle} from '@mui/icons-material'

function Table({type}) {

    const data = useRef()

    switch (type) {
        case 'Performance':
            data.current= {
                icon: <DeveloperMode className= 'icons'/>,
                title: 'PERFORMANCE',
                text: 'We optimize your website to the best and make sure it performance is fast.'
            }
            break;

            case 'Marketing':
            data.current ={
                icon: <Security className= 'icons' />,
                title: 'MARKETING',
                text: 'Your business is being marketed by our team of experts.'
            }
            break;

            case 'SEO':
            data.current ={
                icon: <ChangeCircle className= 'icons'/>,
                title: 'SEO/SEM',
                text: 'Our team of professionals make your website ahead of your competitors.'
            }
            break;

            case 'Data Management':
            data.current = {
                icon: <Security className= 'icons'/>,
                title: 'DATA MANAGEMENT',
                text: 'Our Team of experts secure your database from hackers and spammers'
            }
            break;
    
        default:
            break;
    }
  return (
    <div className='table'>
        <div className="overlay"></div>
        <div className="icon">{data.current.icon}</div>
        <div className="title">{data.current.title}</div>
        <div className="text">{data.current.text}</div>
        <div className="contact">
            LEARN MORE
        </div>
    </div>
  )
}

export default Table