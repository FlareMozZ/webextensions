//send msg to background
chrome.runtime.sendMessage({name:"fetchWords"}, (response) => {
   //wait for response


   console.log(response);

    //update content on content script
    document.querySelector('h1').innerHTML=response.api;
});