// Unsplash API
const count = 10;
const apiKey = 'Vnn2VPlAiCUdYykmS-oFtv0GiIXcQwfp6bCTooGu-ck';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    } 
}

// On load
getPhotos();