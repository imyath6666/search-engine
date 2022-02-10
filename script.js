console.log('Hi Aditya 😎😎🤣');
alert(" 😎 This is yatharth's awesome search engine clone 😎 ");

const searchInput = document.querySelector("#input");
function search() {
  const input = searchInput.value
  window.location.href = "https://duckduckgo.com/?q=" + input + "&t=h_&ia=web"
}
