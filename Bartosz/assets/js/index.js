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

let container = document.createElement("div"); 
container.classList.add("container"); 
container.style.display ="flex";
container.style.flexFlow = 'row wrap';
container.style.justifyContent = 'space-around';

books.sort((a,b)=> (a.author > b.author) ? 1 : -1)

books.map((book) => {
  let card = document.createElement("div");  
  
  //creating image
  let image = document.createElement("img"); 
  image.src = book.img; 
  image.style.width = '12rem';
  image.style.maxHeight = '15rem';
  image.style.objectFit = 'cover';
  image.style.border = '0.2rem solid black'

  let bookName = document.createElement("h3");
  bookName.innerHTML = book.title;   
  bookName.style.width = '12rem';
  bookName.style.fontSize = '1.1rem';
  bookName.style.paddingTop = '1rem';
  
  let bookAut = document.createElement("p"); 
  bookAut.innerHTML = book.author;
  bookAut.style.paddingBottom = '1rem'; 
  bookAut.style.fontSize = '0.8rem';



  let button = document.createElement('div');
  button.innerHTML = book.alreadyRead ? 'Read' : 'To Read';
  button.style.backgroundColor = book.alreadyRead ? 'green' : 'grey';
  button.style.width = '4rem';
  button.style.borderRadius = '1rem';
  button.style.textAlign = 'center';
  button.style.color = 'white';
  button.style.fontSize = '0.8rem';
  button.style.fontStyle = 'italic';
  button.style.float = 'right';
  
  

  card.append(image, bookName, bookAut, button); 

   

  container.append(card)
  

});


document.getElementById("root").append(container)
