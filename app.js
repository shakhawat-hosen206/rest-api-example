/* const blockQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(quote => displayQuote(quote))
}





const displayQuote = quote =>{
    const quoteId = document.getElementById('quote');
    quoteId.innerText = quote.quote;
} */


const multipleUser = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUser(data))
}


const displayUser = user =>{
    const buddies = user.results;
    const userId = document.getElementById('user');
    for(const buddy of buddies){
         const p = document.createElement('p');
         p.innerText =` name:${buddy.name.first} ${buddy.name.last} 
          Email:${buddy.email}`;
         userId.appendChild(p);
    }
}