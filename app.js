const blockQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(quote => displayQuote(quote))
}





const displayQuote = quote =>{
    const quoteId = document.getElementById('quote');
    quoteId.innerText = quote.quote;
}