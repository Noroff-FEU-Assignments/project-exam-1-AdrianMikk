
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
            <div>
            <img src="${featuredPost._embedded['wp:featuredmedia'][0].source_url}"/>
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
