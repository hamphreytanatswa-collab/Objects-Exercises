const car = {
  make: "Toyota",
  model: "Corolla",
  color: "blue",

  describe() {
    return `This is a ${this.color} ${this.make} ${this.model}.`;
  },

  updateColor(newColor) {
    this.color = newColor;
    console.log(`Color updated to ${this.color}.`);
  }
};

console.log(car.describe());

car.updateColor("red");

console.log(car.describe());


const car = {
  make: "Toyota",
  model: "Corolla",
  color: "blue",

  describe() {
    return `This is a ${this.color} ${this.make} ${this.model}.`;
  },

  updateColor(newColor) {
    this.color = newColor;
    console.log(`The car's color has been updated to ${newColor}.`);
  },
};

console.log(car.describe()); 
car.updateColor("red");
console.log(car.describe()); 


// Book Tracker
const bookTracker = {
  books: [],

  addBook(title, author) {
    this.books.push({
      title: title,
      author: author,
      isRead: false,
    });
  },


  markAsRead(title) {
    const book = this.books.find(book => book.title === title);

    if (book) {
      book.isRead = true;
    } else {
      console.log(`Book "${title}" not found.`);
    }
  },

  
  getUnreadBooks() {
    return this.books
      .filter(book => !book.isRead)
      .map(book => book.title);
  },
};

bookTracker.addBook("Dune", "Frank Herbert");
bookTracker.addBook("Educated", "Tara Westover");

bookTracker.markAsRead("Dune");

console.log(bookTracker.getUnreadBooks()); 


// Exercise 3
const bookTracker = {
  books: [],

  addBook(title, author) {
    this.books.push({ title, author, isRead: false });
  },

  markAsRead(title) {
    const book = this.books.find((b) => b.title === title);

    if (book) {
      book.isRead = true;
    } else {
      console.log(`Couldn't find a book called "${title}".`);
    }
  },

  getUnreadBooks() {
    return this.books
      .filter((b) => !b.isRead)
      .map((b) => b.title);
  },
};

bookTracker.addBook("Dune", "Frank Herbert");
bookTracker.addBook("Educated", "Tara Westover");
bookTracker.markAsRead("Dune");

console.log(bookTracker.getUnreadBooks()); 

const students = [
  { name: "Wei", score: 88 },
  { name: "Fatima", score: 95 },
  { name: "Diego", score: 72 },
  { name: "Nia", score: 64 },
  { name: "Sam", score: 91 },
];

function getAboveAverageStudents(students) {
  
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);


  const average = Number((totalScore / students.length).toFixed(2));

  console.log(`Class Average: ${average}`);


  return students
    .filter((student) => student.score > average)
    .map((student) => student.name);
}

console.log(getAboveAverageStudents(students));

