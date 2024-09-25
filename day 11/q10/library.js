class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
   
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}, genre: ${this.genre}`;
    }
    }
  
 
    function createBook(title, author, year, genre) {
        return new Book(title, author, year, genre);
    }


    class Library {
        constructor() {
        this.books = []; 
        }
    
        
        addBook(book) {
        this.books.push(book);
        }
    
        
        filterBooksByYear(year) {
        return this.books.filter(book => book.year > year);
        }
    
        
        getAllBookTitles() {
        return this.books.map(book => book.title);
        }
    
       
        getTotalBooks() {
        return this.books.reduce((total, book) => total + 1, 0);
        }
    
       
        getAveragePublicationYear() {
        const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
        return totalYears / this.books.length;
        }
    }
   
    const myLibrary = new Library();

    
    const book1 = createBook("The White Tiger", "Aravind Adiga", 2008, "Fiction");
    const book2 = createBook("Train to Pakistan", "Khushwant Singh", 1956, "Historical Fiction");
    const book3 = createBook("God of Small Things", "Arundhati Roy", 1997, "Literary Fiction");

    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);


    console.log(book1.getInfo());


    console.log(myLibrary.filterBooksByYear(1950));


    console.log(myLibrary.getAllBookTitles());


    console.log(myLibrary.getTotalBooks());


    console.log(myLibrary.getAveragePublicationYear());
