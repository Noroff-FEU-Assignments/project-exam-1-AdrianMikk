
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
        console.log(data[0].jetpack_featured_media_url)

        // create a new element to hold the post information
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div>
            <img src="${featuredPost.jetpack_featured_media_url}"/>
            <div class="post-button">
            <h2>${featuredPost.title.rendered}</h2>
            <button>
            <a href="../specific.html?id=${featuredPost.id}">Read more</a>
            </button>
            </div>
            </div>
        `;

        // add the post element to the post container
        postContainer.appendChild(postElement);
    }

}

async function main() {
    const posts = await fetchFeatured();
    renderPost(posts)

    let page = 0;
    const viewMoreBtn = document.querySelector(".viewmore-button");
    viewMoreBtn.addEventListener("click", async function() {
        page++;
        const response = await fetch("https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts?page=2");
        const data = await response.json();
       renderPost(data); 
       if (page === 1) {
        viewMoreBtn.style.display = "none";
       }
    });
}

main();
