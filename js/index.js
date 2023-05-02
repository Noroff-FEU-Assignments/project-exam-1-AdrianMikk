// const fullProductURL = "https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts";

// const featured = "?featured=true";

// async function fetchFeatured() {
//     const response = await fetch(fullPostURL + featured);
//     const data = await response.json();
    
//     return data;
// }
// const postContainer = document.querySelector(".postContainer");


// function renderPost(data) {
//     for (let i = 0; i < data.length; i++) {
//         const featuredPost = data[i];
//           console.log(featuredPost);

//           featuredContainer.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
//           featuredContainer.style.maxHeight = "240px";
//           featuredContainer.style.display = "flex";
//           featuredContainer.style.justifyContent = "center";
//           featuredContainer.style.alignContent = "center";
//           featuredContainer.style.flexWrap = "wrap";
//     }
// }

// async function main() {
//   const posts = await fetchPost();
//   renderPost(posts)
// }

// main();


const fullPostURL = "https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts";
const featured = "?featured=true";

async function fetchFeatured() {
    const response = await fetch(fullPostURL);
    const data = await response.json();
    
    return data;
}

const postContainer = document.querySelector(".postsContainer");

function renderPost(data) {
    for (let i = 0; i < data.length; i++) {
        const featuredPost = data[i];
        console.log(featuredPost);

        // create a new element to hold the post information
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${featuredPost.title.rendered}</h2>
            <p>${featuredPost.excerpt.rendered}</p>
            <a href="${featuredPost.link}">Read more</a>
        `;

        // add the post element to the post container
        postContainer.appendChild(postElement);
    }
}

async function main() {
    const posts = await fetchFeatured();
    renderPost(posts)
}

main();
