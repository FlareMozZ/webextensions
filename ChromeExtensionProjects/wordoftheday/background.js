//listens for messages
chrome.runtime.onMessage.addListener((msg,sender,response)=>{
 
if(msg.name=="fetchWords"){

    
   const api_key='YOURAPIKEY';
   const datestr= new Date().toISOString.slice(0,10);
   const apiCall='https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+datestr+'api_key='+apikey;
   //call api
   //wait for response

   //send the response
  response({api:apiCall, date:datestr});
}

});