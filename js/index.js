
const fullPostURL = "https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts?_embed ";
// const featured = "?featured=true";

async function fetchFeatured() {
    const response = await fetch(fullPostURL);
    const data = await response.json();
    
    return data;
}

const postContainer = document.querySelector(".postsContainer");

function renderPost(data) {
    for (let i = 0; i < data.length; i++) {
        const featuredPost = data[i];
        // console.log(featuredPost);
        console.log(data[0]._embedded['wp:featuredmedia'][0].source_url)

        // create a new element to hold the post information
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <img src="${featuredPost._embedded['wp:featuredmedia'][0].source_url}"/>
            <div>
            <h2>${featuredPost.title.rendered}</h2>
            <button>
            <a href="${featuredPost.link}">Read more</a>
            </button>
            </div>
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

// const fullPostURL = "https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts";
// const featured = "?featured=true";

// async function fetchFeatured() {
//     const response = await fetch(fullPostURL + featured);
//     const data = await response.json();
    
//     return data;
// }

// const postContainer = document.querySelector(".postsContainer");

// function renderPost(data) {
//     for (let i = 0; i < data.length; i++) {
//         const featuredPost = data[i];
//         console.log(featuredPost);

//         // create a new element to hold the post information
//         const postCard = document.createElement("div");
//         postCard.classList.add("post-card");

//         // create elements for the post title, excerpt, and read more link
//         const postTitle = document.createElement("h2");
//         postTitle.classList.add("post-title");
//         postTitle.textContent = featuredPost.title.rendered;

//         const postExcerpt = document.createElement("p");
//         postExcerpt.classList.add("post-excerpt");
//         postExcerpt.innerHTML = featuredPost.excerpt.rendered;

//         const readMoreLink = document.createElement("a");
//         readMoreLink.classList.add("read-more");
//         readMoreLink.href = featuredPost.link;
//         readMoreLink.textContent = "Read more";

//         // append the elements to the post card
//         postCard.appendChild(postTitle);
//         postCard.appendChild(postExcerpt);
//         postCard.appendChild(readMoreLink);

//         // add the post card to the post container
//         postContainer.appendChild(postCard);
//     }
// }

// async function main() {
//     const posts = await fetchFeatured();
//     renderPost(posts)
// }

// main();

