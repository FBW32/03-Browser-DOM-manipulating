const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don John Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];
//sorting books in aphabetical order:
books.map((book) => {
  let authorArr = book.author.split(" ").reverse();
  let [lastname, ...firstname] = authorArr;
  console.log(firstname);
  let name = lastname + ", " + firstname.join(" ");
  book.author = name;
  console.log(book);
});

books.sort((a, b) => (a.author > b.author ? 1 : -1));
console.log(books);
//----------###-------
let ulToPush = document.querySelector(".book-list");
books.map((book) => {
  let bookContainer = document.createElement("li");
  bookContainer.classList.add("book");
  bookContainer.style.listStyle = "none";

  //book-cover
  let bookCover = document.createElement("div");
  let bookLink = document.createElement("a");

  bookLink.href = book.img;
  let bookImg = document.createElement("img");
  bookImg.src = book.img;
  bookImg.classList.add("book-cover");
  bookLink.append(bookImg);
  bookCover.append(bookLink);
  //book-details
  let bookDetails = document.createElement("div");
  //book-details=>title
  let bookTitle = document.createElement("h3");
  bookTitle.innerHTML = book.title;
  //book-details=>autor
  let bookAutor = document.createElement("p");
  bookAutor.innerHTML = book.autor;

  bookDetails.append(bookTitle, bookAutor);
  //footer
  let bookFooter = document.createElement("div");
  //styling footer:
  bookFooter.style.backgroundColor = "lightgrey";
  bookFooter.style.border = "2px solid grey";
  //button:
  let AlreadyReadbutton = document.createElement("button");
  AlreadyReadbutton.classList.add("status");
  AlreadyReadbutton.style.borderRadius = "20%";
  AlreadyReadbutton.style.margin = "20px";
  if (book.alreadyRead) {
    AlreadyReadbutton.innerText = "Read";
    AlreadyReadbutton.style.backgroundColor = "green";
  } else {
    AlreadyReadbutton.innerText = "To read";
    AlreadyReadbutton.style.backgroundColor = "grey";
  }
  bookFooter.append(AlreadyReadbutton);
  //push all to book container
  bookContainer.append(bookCover, bookDetails, bookFooter);
  //push each container to ulToPush:
  ulToPush.append(bookContainer);
});
