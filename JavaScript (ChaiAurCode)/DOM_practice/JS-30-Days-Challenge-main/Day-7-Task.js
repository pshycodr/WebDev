// Day 7: Objects
// Tasks/Activities
// Activity 1: Object Creation And Access
// Task 1:

const book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);

// Task 2:
const book2 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log("Title:", book.title);
console.log("Author:", book.author);

// Activity 2: Object Methods
// Task 3:
const book3 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    // Adding a method to return title and author
    getTitleAndAuthor: function(){
        return `${this.title} by ${this.author}`
    }
};
console.log(book3.getTitleAndAuthor());

// Task 4:
const book4 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    // Method to update the year property
    updateYear: function(newYear){
        this.year = newYear;
    }
};

book4.updateYear(2024);
console.log(book4);

// Activity 3: Nested Objects
// Task 5:
const book5 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const book6 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
const book7 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

const library = {
    name: "City Library",
    books: [book5, book6, book7]
}
console.log(library);

// Task 6:
const book8 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const book9 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
const book10 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

const library2 = {
    name: "City Library",
    books: [book8, book9, book10]
}

// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the titles of all the books in the library
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
})

// Activity 4: The this keyword
// Task 7:

const book11 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getTitleAndYear:  function(){
        return `${this.title} was published in ${this.year}`;
    }
};
console.log(book11.getTitleAndYear());

// Activity 5: Object Iteration
// Task 8:
const book12 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960

}

for(let property in book12){
    if(typeof book[property] !== 'function'){
        console.log(`${property}: ${book[property]}`);
    }
}

// Task 9:
// Create a book object
const book13 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    // Method to return title and author
    getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
    },
    // Method to update the year property
    updateYear: function(newYear) {
      this.year = newYear;
    },
    // Method to return title and year
    getTitleAndYear: function() {
      return `${this.title} was published in ${this.year}`;
    }
  };
  
  // Log all keys of the book object
  console.log("Keys:", Object.keys(book13));
  
  // Log all values of the book object
  console.log("Values:", Object.values(book13));
  