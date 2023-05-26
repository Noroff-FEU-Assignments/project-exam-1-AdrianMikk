import { removeModal } from "./global/functions.js"

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

async function fetchSpecificPost() {
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


      const images = specificContainer.getElementsByTagName("img");
        // console.log(images);
        for (let i = 0; i < images.length; i++) {
          // console.log(images[i]);

          let img = images[i];
          let image = img.cloneNode(true);
          let index = 0;

          img.addEventListener("click", function() {
            const specificContainer = document.querySelector(".specificContainer");
            const blurBox = document.createElement("div");
            blurBox.classList.add("blurBox");
            blurBox.style.display = "flex";
            specificContainer.append(blurBox);

            const modalContainer = document.createElement("div");
            modalContainer.classList.add("modalContainer");
            modalContainer.style.maxWidth = "100%"
            modalContainer.style.maxHeight = "fit-content"
            blurBox.append(image);
            
            removeModal(img, blurBox);
          });
        }
       }


  async function main() {
    const post = await fetchSpecificPost();
    renderPost(post);
}
main();
