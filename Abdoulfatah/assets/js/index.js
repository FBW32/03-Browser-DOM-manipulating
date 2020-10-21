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

// sorting the array according to Author's last name
books.sort(function(a,b){
  
    let nameA = a.author.toUpperCase().split(" ").reverse();
    let nameB = b.author.toUpperCase().split(" ").reverse()
    if(nameA>nameB){
      return 1;
    } else {
      return -1
    }

});




books.map((product)=> {
// <ul class="book-list"><li class="book"></li></ul>
  let ul = document.querySelector("ul")
    ul.classList.add("book-list")
    ul.style.listStyle= "none"

  let li = document.createElement("li");
    li.classList.add("book");


//<div class="book-cover"></div>
  let BookCover = document.createElement("div");
      BookCover.classList.add("book-cover");

// some css text
      BookCover.style.cssText="height:25rem;width:12rem; margin:0 0.5rem; background-position:center; background-size:cover"  
// set image as background      
      BookCover.style.backgroundImage= `url(${product.img})`;


// create the Book-title
  let BookTitle = document.createElement("h3");
      BookTitle.innerHTML = product.title;  
// some css text
      BookTitle.style.cssText="padding:0.3rem; font-size:1.4rem"


// create Author 
  let BookAuthor = document.createElement("h4");
      BookAuthor.style.cssText="padding:0.2rem; font-size:1.1rem"

// sorting Author name
  let originName = product.author.split(" ")
  let newName = originName.reverse();
      BookAuthor.innerHTML= newName  //inserting h4



// create the middle div that includes the Book`s details
  let details = document.createElement("div");
      details.style.cssText="border:0.1rem solid #b9b9b9; margin:0 0.5rem; width:12rem ;height:8rem; background-color: #f9f9f9";

// create the last div that include btn
  let statusDiv = document.createElement("div");
      statusDiv.style.cssText="margin:0 0.5rem; width:12rem; height:4rem; background-color:#c6c6c6"    

// create the read button
  let button = document.createElement("button"); 
      button.setAttribute("type","button")



// activating or deactivating the btn
  if (product.alreadyRead){
      button.classList.add("btn-success")
      button.style.cssText="width:6rem; height:1.3rem;margin:1rem; line-height:1rem; border-radius:1rem"
      button.innerHTML="Read"

  } else{
      button.classList.add("btn-secondary")
      button.style.cssText="width:6rem; height:1.3rem;margin:1rem; line-height:1rem; border-radius:1rem"
      button.innerHTML="to read"
  }


// appending elements

ul.append(li)
li.append(BookCover,details,statusDiv);
details.append(BookTitle,BookAuthor)
statusDiv.append(button)
  
})
