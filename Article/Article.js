//Refactor original assignment using functional components only

const articles = document.querySelector(".articles");

articles.appendChild(createArticle("test title", "testcontent"));

function createArticle(title, content) {
  //define new elements
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const date = document.createElement("p");
  const articleContent = document.createElement("div");
  const expandBtn = document.createElement("button");
  const removeBtn = document.createElement("button"); //for stretch button to make articles disappear

  //set up structure of elements
  article.appendChild(articleTitle);
  article.appendChild(articleContent);
  article.appendChild(date);
  article.appendChild(expandBtn);
  article.appendChild(removeBtn);

  //set class names

  //set text content
  expandBtn.textContent = "Expand";
  removeBtn.textContent = "Remove";
  articleTitle.textContent = title;
  articleContent.textContent = content;

  //button events

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
