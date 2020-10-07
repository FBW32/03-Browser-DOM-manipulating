// –––––––––– ORIGINAL DATA ––––––––––
const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];



// –––––––––– MAIN Container ––––––––––
let container = document.createElement("div")
container.classList.add(".book")
container.style.margin = "0 auto"
container.style.width = "100%"
container.style.padding = "0"
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.justifyContent = "center"


// –––––––––– Order/.sort() Function ––––––––––
// new variable created with .sort() function

let newOrder = [...books];
newOrder.sort((a, b) => {
  let fa = a.author.split(" ").reverse().join(", ").toLowerCase();
  let fb = b.author.split(" ").reverse().join(", ").toLowerCase();

  if (fa < fb) {
    return -1;
  }

  if (fa > fb) {
    return 1;
  }
  return 0;

})

// –––––––––– Element Creating ––––––––––
newOrder.map(bookInfo => {

  // –––––––––– Create main bookCard ––––––––––
  let bookCard = document.createElement("div")
  bookCard.style.margin = "0 auto"
  bookCard.style.padding = "0"
  bookCard.classList.add("bookCard")
  bookCard.style.overflow = "hidden";
  bookCard.style.width = "300px"
  bookCard.style.margin = "10px"
  bookCard.style.border = "1px solid lightGrey"
  bookCard.style.borderRadius = "1.5%"
  bookCard.style.boxSizing = "border-box"


  // –––––––––– Create Information Div ––––––––––
  let infoCard = document.createElement("div");
  infoCard.style.padding = "15px"

  // –––––––––– Create Read Div ––––––––––
  let readCard = document.createElement("div")
  readCard.style.border = "1px solid lightGrey"
  readCard.style.backgroundColor = "#f7f7f7"
  readCard.style.padding = "12px"
  readCard.style.display = "flex"
  readCard.style.textAlign = "center"
  readCard.style.justifyContent = "flex-end"
  readCard.style.left = "0px"

  // –––––––––– Create Read Button ––––––––––
  let readButton = document.createElement("div")
  readButton.innerHTML = bookInfo.alreadyRead ? "Read" : "To read";
  readButton.style.backgroundColor = bookInfo.alreadyRead ? "#50b94a" : "#6b727d";
  readButton.style.color = "white"
  readButton.style.padding = "1px"
  readButton.style.width = "50px"
  readButton.style.fontSize = "12px"
  readButton.style.fontStyle = "italic"
  readButton.style.borderRadius = "25%"

  // –––––––––– Create Title ––––––––––
  let bookTitle = document.createElement("h2")
  // add settings
  bookTitle.innerHTML = bookInfo.title;
  bookTitle.style.fontSize = "18px"


  // –––––––––– Create Author ––––––––––
  let bookAuthor = document.createElement("h3")
  // add settings
  bookAuthor.innerHTML = bookInfo.author.split(" ").reverse().join(", ");
  bookAuthor.style.fontSize = "14px"
  bookAuthor.style.color = "#a4a8ad"

  // –––––––––– Create IMG ––––––––––
  let bookImage = document.createElement("img")
  // add settings
  bookImage.src = bookInfo.img;
  bookImage.style.border = "2px solid black"
  bookImage.style.overflow = "hidden"
  bookImage.style.width = "100%"
  bookImage.style.height = "350px"

  // add link(?)
  bookImage.href = bookInfo.img;


  // –––––––––– append Information ––––––––––
  readCard.append(readButton)
  infoCard.append(bookTitle, bookAuthor)
  bookCard.append(bookImage, infoCard, readCard)
  container.append(bookCard)
})

// –––––––––– append ALL Information ––––––––––
document.querySelector(".book-list").append(container)




