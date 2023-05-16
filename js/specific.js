const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

async function satanihelvete() {
    const url = "https://travelblog.hoiskypoisky.no/wp-json/wp/v2/posts/"
    const response = await fetch(url + id);
    const data = await response.json();
    console.log(data);

    return data;
    // renderPost(data);
}


function renderPost(post) {
    const specificContainer = document.querySelector(".specificContainer");

    specificContainer.innerHTML =
    post.content.rendered;
    
    const h1 = document.querySelector(".specific-h1")
      h1.innerText = post.title.rendered;
}


  async function main() {
    const post = await satanihelvete();
    renderPost(post);
}
main();

