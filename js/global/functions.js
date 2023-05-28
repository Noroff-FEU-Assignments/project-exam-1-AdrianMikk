function removeModal(click, cont) {
    document.addEventListener("click", function(event) {
      if (!click.contains(event.target)) {
        cont.remove();
      }
    });
}
export { removeModal }