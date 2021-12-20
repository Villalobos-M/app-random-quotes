import React, {useState} from 'react'
//Stles
import './App.css';
//JSON
import quotes from "./quotes.json"
//Components
import QuoteBox from "./components/QuoteBox"

function App() {

  const colors = ["#A68DAD", "D0CAB2", "6B4F4F", "#6166B3", "#678983", "#E26A2C", "#99A799", "#6C4A4A", "#6D8299", "#FF7272", "#406882", "#3E8E7E", "#C84B31", "#F2789F", "#064635", "#344CB7"]

 const getNumber = () => Math.floor(Math.random() * quotes.length)
 const getNumberColor = () => Math.floor(Math.random() * colors.length)

 const [quoteJson, setQuotesJson] = useState(quotes[getNumber(quotes.length)])
 const [background, setBackground] = useState(colors[getNumberColor(colors.length)])

 const handleQuotes = () => {
   const index = getNumber(quotes.length)
   setQuotesJson(quotes[index])
   setBackground(colors[getNumberColor(colors.length)])
 }
  
  console.log(quotes);
  return (
    <div className="App" style={{background}} >
      <header>
        <h1>Random Quotes</h1>
        <p>Press the button to go to the next quote</p>
      </header>
      
      <div className="quote-container" >
        <QuoteBox 
        author={quoteJson.author} 
        quote={quoteJson.quote} 
        handleQuotes={handleQuotes} 
        background={background}
        />
      </div>
      
    </div>
  );
}

export default App;
