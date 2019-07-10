//Refactor original assignment using functional components only

const articleData = [
  {
    title: "Lambda School Students: We're the best!",
    content: "Test",
    date: "Nov 5th, 2017"
  },

  {
    title: "Javascript and You, ES6",
    content: [
      "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house\
dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell\
  bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle\
  half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid\
  broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes\
  I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s\
  Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus\
  mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban.\
  Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who\
  cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden\
  forest grindylows wool socks.",
      "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where\
  to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles\
  House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning\
  spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin.\
  Palominos scarlet train black robes, Metamorphimagus Niffler dead easy\
  second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue\
  turban remember my last."
    ],
    date: "Nov 7th, 2017"
  }
];

const articles = document.querySelector(".articles");

//test article creation
articles.appendChild(
  createArticle("Refactored Title", "Test Content", "July, 10th, 2019")
);

//grab data from JSON
articleData.forEach(data => {
  articles.appendChild(createArticle(data.title, data.content, data.date));
});

function createArticle(title, content, date) {
  //define new elements
  const article = document.createElement("div");
  const articleBar = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleContent = document.createElement("div");
  const btnBar = document.createElement("div");
  const expandBtn = document.createElement("button");
  const removeBtn = document.createElement("button"); //for stretch button to make articles disappear

  //set up structure of elements
  article.appendChild(articleBar);
  article.appendChild(articleContent);
  articleBar.appendChild(articleTitle);
  articleBar.appendChild(articleDate);
  articleBar.appendChild(btnBar);
  btnBar.appendChild(expandBtn);
  btnBar.appendChild(removeBtn);

  //set class names
  article.classList.add("articles", "article");
  articleTitle.classList.add("h2");
  articleDate.classList.add("date");
  articleContent.classList.add("hide");
  articleContent.classList.add("content");
  expandBtn.classList.add("expandButton");
  removeBtn.classList.add("removeButton");

  //set text content
  expandBtn.textContent = "Expand";
  removeBtn.textContent = "Remove";
  articleTitle.textContent = title;
  articleContent.textContent = content;
  articleDate.textContent = date;

  //button events
  expandBtn.addEventListener("click", () => {
    articleContent.classList.toggle("hide");
    article.classList.toggle("article-open");

    if (!articleContent.classList.contains("hide")) {
      expandBtn.textContent = "Hide";
    } else {
      expandBtn.textContent = "Expand";
    }
    console.log(articleContent);
  });

  removeBtn.addEventListener("click", () => {
    article.style.display = "none";
  });

  return article;
}

//Code from the original assignment:
// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
//     // create a reference to the ".expandButton" class.
//     this.expandButton = this.domElement.querySelector(".expandButton");
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.textContent = "expand";
//     // console.log(this.expandButton); -- confirms 4 buttons with text "expand" exists

//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     this.expandButton.addEventListener("click", () => this.expandArticle());

//     this.closeBtn = this.domElement.querySelector(".close");
//     console.log(this.closeBtn);
//     this.closeBtn.addEventListener("click", () => this.closeArticle());
//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     this.domElement.classList.toggle("article-open");
//   }

//   closeArticle() {
//     this.domElement.style.display = "none";
//   }
// }

// /* START HERE:

// - Select all classes named ".article" and assign that value to the articles variable.

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

// */

// let articles = document.querySelectorAll(".article");

// articles.forEach(function(article) {
//   const closeBtn = document.createElement("button");
//   closeBtn.textContent = "Close";
//   closeBtn.className = "article close";
//   closeBtn.style.height = "25px";
//   article.append(closeBtn);
//   return new Article(article);
// });
