import React from 'react'

import "../styles/quotebox.styles.css"
import ButtonQuote from './ButtonQuote'

const QuoteBox = ({ author, quote,handleQuotes, background }) => {
    return (
        <>
            <div className='quote-box' >
                <article className='first-article' >
                    <i className="fas fa-quote-left"></i>
                </article>
                <article className='second-article' >
                    <section className='section-quote' style={{color:background}} >
                       <p>{quote}</p> 
                    </section>
                    <section className='section-btn'>
                        <h4 style={{color:background}} >{author}</h4>
                        <ButtonQuote handleQuotes={handleQuotes} background={background} />
                        
                    </section>
                </article>
            </div>
            
        </>
    )
}

export default QuoteBox
