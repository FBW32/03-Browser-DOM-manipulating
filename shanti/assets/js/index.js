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
const bookList = document.querySelector(".book-list")

books.map(book => {
    let item = document.createElement("li")
    item.classList.add("book")
    item.style.listStyle = "none"

    let image = document.createElement("img")
    image.classList.add("img", "img-fluid")
    image.src = book.img

    let title = document.createElement("h2")
    title.innerText = book.title

    let author = document.createElement("h3")
    author.textContent = book.author
    author.style.cssText = "color: brown; font-style: italic; font-size: 18px";

    let footer = document.createElement("footer")
    footer.classList.add("text-right")
    footer.style.backgroundColor = "cyan";
    footer.style.border = "2px solid red";


    let status = document.createElement("span")
    status.classList.add("status")
    if (book.alreadyRead) {
        status.style.backgroundColor = "green"
        status.innerText = "Read"
    } else {
        status.style.backgroundColor = "gray"
        status.innerText = "To read"
    }

    footer.appendChild(status)


    item.append(image, title, author, footer)

    bookList.appendChild(item)
})
