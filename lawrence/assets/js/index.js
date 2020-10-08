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

let mainL = document.createElement("div")
mainL.classList.add("mainL")
mainL.style.display="flex";
mainL.style.justifyContent="center"
mainL.style.flexWrap="wrap";

 books.sort((copy1,copy2)=> {
  copy1.author > copy2.author ? 1:-1
})


books.map((item)=>{
  let bookBox = document.createElement("div")
  bookBox.style.width="300px"
  bookBox.style.height="500px"
  bookBox.style.overflow="hidden"
  bookBox.style.display="flex"
  bookBox.style.flexDirection="column"

  let bookArr = item.author.split(" ")
  let [firstName,lastName] = bookArr;
  let bookOrder = lastName + " , " + firstName;
  item.author = bookOrder

  let bookP =document.createElement("p")
  bookP.innerHTML=bookOrder
  bookP.style.fontSize="10px"
  bookP.style.color="gray"
  bookP.style.textAlign="left"
  
  
  let titleB= document.createElement("p")
  titleB.classList.add("para")
  titleB.innerHTML = item.title
  titleB.style.fontSize="20px"
  titleB.style.fontWeight="bold"
  titleB.style.textAlign="left"


  let column = document.createElement("div")
  column.classList.add("column")
  column.style.width="260"
  column.style.height="100"
  column.style.overflow="hidden"
  

  let bookPic = document.createElement("img")
  bookPic.classList.add("pic")
  bookPic.src = item.img
  bookPic.height="300"
  bookPic.width="250"
  bookPic.style.border="5px solid black"
  
  let readSt = document.createElement("button")
  readSt.innerText= item.alreadyRead ? "Read": "to Read"
  readSt.style.backgroundColor = item.alreadyRead ? "#247c33": "gray"
  readSt.style.padding="5px"
  readSt.style.borderRadius="30%"
  readSt.style.height="30"
  

  let lastBox = document.createElement("div")
  lastBox.style.height="100"
  lastBox.style.width="250"
  lastBox.style.background= "#adaaaa"
  lastBox.style.textAlign="right"
  lastBox.style.margin="5px"

  lastBox.appendChild(readSt)
  column.append(titleB,bookP)
  bookBox.append(bookPic,column,lastBox)
  mainL.append(bookBox)
 
})

document.querySelector(".container").append(mainL)


