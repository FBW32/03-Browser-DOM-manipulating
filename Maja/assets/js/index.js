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


let cardsOfBooks = document.querySelector(".card-column")
cardsOfBooks.style.display = "flex"
cardsOfBooks.style.flexWrap = "wrap"

//sort

books.sort((a, b) => (a.author > b.author) ? 1 : -1)

// map through content of a card: 
// bookImg, bookTitle, bookAutor, button

books.map((book) => {
  let card = document.createElement("div");
  card.classList.add("card")
  card.style.margin = "10px"
  card.style.width="300px"
  card.style.height="600px"
  card.style.overflow="hidden"

  let ImgDiv = document.createElement("div")
  let ImgLink = document.createElement("a")
  console.log(ImgLink);
  ImgLink.href = book.img
  let bookImg = document.createElement("img")
  bookImg.src = book.img


  bookImg.style.width="300px"
  bookImg.style.height="300px"
  console.log(bookImg);

  let bookTitle = document.createElement("h5")
  bookTitle.innerHTML = book.title
  bookTitle.style.textAlign = "center"
  bookTitle.style.margin = "15px"
  bookTitle.style.marginTop = "35px"

// swopping surname and name position

  let bookAutor = document.createElement("h6")
  bookAutor.innerHTML = book.author.split(' ')[1] + ", " + book.author.split(' ')[0] 
   
  bookAutor.style.textAlign = "center"
  bookAutor.style.marginBottom = "35px"

// button

  let button = document.createElement("button")
  button.innerHTML = book.alreadyRead ? "Read" : "To read"
  button.style.backgroundColor = book.alreadyRead ? "gray" : "green"
  button.style.color = "white"
  button.style.webkitBorderRadius = "10px"
  button.style.marginLeft = "160px"
  button.style.marginTop = "70px"
  button.style.width = "40%"
  button.style.height = "10%"

// append

ImgDiv.append(ImgLink)
ImgLink.append(bookImg)
card.append(ImgDiv, bookTitle, bookAutor, button)

cardsOfBooks.appendChild(card)

})




