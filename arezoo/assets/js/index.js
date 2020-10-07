const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
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
books.map((book) => {
  let authorArr = book.author.split(" ").reverse();
  let [lastname, ...firstname] = authorArr;
  let name = lastname + ", " + firstname.join(" ");
  book.author = name;
});

books.sort((a, b) => (a.author > b.author ? 1 : -1));

let mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "row-wrap";
mainContainer.style.justifyContent = "space-around";
books.map((book) => {
  const container = document.createElement("div");
  container.style.overflow = "hidden";
  container.style.width = "19rem";
  container.style.height = "30rem";
  container.style.margin = "2px";
  const innerDivBook = document.createElement("div");
  const image = document.createElement("img");
  image.src = book.img;
  image.style.width = "16rem";
  image.style.height = "15rem";
  image.style.border = "0.2rem solid black";
  image.style.margin = "6px";
  innerDivBook.appendChild(image);
  const descroptionDiv = document.createElement("div");
  descroptionDiv.style.width = "16rem";
  descroptionDiv.style.height = "10rem";
  descroptionDiv.style.alignItems = "center";
  descroptionDiv.style.border = "0.1rem solid grey";
  const title = document.createElement("p");
  title.innerHTML = book.title;
  title.style.fontSize = "16px";
  title.style.fontWeight = "bold";
  title.style.textAlign = "left";
  title.style.margin = "10px";
  const authorName = document.createElement("div");
  authorName.innerHTML = book.author;
  authorName.style.margin = "10px";
  const read = document.createElement("div");
  const backread = document.createElement("div");
  backread.style.backgroundColor = "lightgrey";
  const des = document.createElement("p");
  des.innerText = book.alreadyRead ? "read" : "To read";
  read.style.backgroundColor = book.alreadyRead ? "red" : "green";
  read.style.width = "5rem";
  read.style.margin = "2px";
  read.style.justifyItems = "right";
  read.style.borderRadius = "60px";
  read.style.textAlign = "center";
  read.style.boxSizing = "border-box";
  read.style.float = "right";
  read.append(des);
  const backRead = document.createElement("div");
  backread.style.border = "2px solid grey";
  backread.style.height = "3rem";
  backread.style.backgroundColor = "lightgrey";
  backread.append(read);
  descroptionDiv.append(title, authorName, backread);
  container.append(innerDivBook, descroptionDiv);
  mainContainer.append(container);
});

document.getElementById("root").append(mainContainer);
