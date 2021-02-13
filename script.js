const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'Vnn2VPlAiCUdYykmS-oFtv0GiIXcQwfp6bCTooGu-ck';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attibutes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links & photos, add to DOM
function displayPhotos() {
        // Run function for each object in photosArray
        photosArray.forEach((photo) => {
            //Create <a> to link to Unsplash
            const item = document.createElement('a');
            setAttributes(item, {
                href: photo.links.html,
                target: '_blank',
            });                    
            //Create <img> for photo
            const img = document.createElement('img');
            setAttributes(img, {
                src: photo.urls.regular,
                alt: photo.alt_description,
                title: photo.alt_description,
            });
            //Put <img> inside <a>, then put inside imageContainer element
            item.appendChild(img);
            imageContainer.appendChild(item);
        })

}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
    } 
}

// Load more photos on scrolling
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();

    }    
})

// On load
getPhotos();