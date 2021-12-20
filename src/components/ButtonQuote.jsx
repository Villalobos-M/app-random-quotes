import React from 'react'

//Styles
import "../styles/quotebox.styles.css"

const ButtonQuote = ({handleQuotes, background}) => {
    return (
        <button className='btn-quotes' onClick={handleQuotes}>
             <i className="far fa-arrow-alt-circle-right" style={{color:background}}></i>
        </button  >
    )
}

export default ButtonQuote
