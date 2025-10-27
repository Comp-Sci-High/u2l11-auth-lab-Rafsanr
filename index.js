// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below

let key = "JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below
let Url = "https://api.giphy.com/v1/gifs/search"
// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below
let Url2 = `https://api.giphy.com/v1/gifs/search?api_key=&q=raccoon`

// Task 4: Making the API call
// Define the function to fetch the data and console log the url key

async function call(u){
    let response = await fetch(u)
    let data = await response.json()
    return data
}

call(Url2).then(data => {
    console.log(data)
})

// Call the function to test it worked


// Task 5: Running it back
// Find the endpoint that returns a random sticker
// Build the request URL for a coding sticker


// Define and call the function that prints just the sticker URL

let Url3=`https://api.giphy.com/v1/sticker/random?limit=1&api_key=${key}`

async function stick(s){
    let response = await fetch(Url3);
    let data = await response2.json();
    console.log(data.data[0])
}

call(Url3).then(data => {
    console.log(data)
}