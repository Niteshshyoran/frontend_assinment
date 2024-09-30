function Library(name) {
    this.name = name;
    }
    
    Library.prototype.getBooks = function() {
        return `Library: ${this.name}, Books: 1000+`;
    };
    
    
    function PublicLibrary(name) {
        Library.call(this, name);
    }
    
    PublicLibrary.prototype = Object.create(Library.prototype);
    PublicLibrary.prototype.constructor = PublicLibrary;
    
    PublicLibrary.prototype.lendBook = function() {
        console.log("Lending a book...");
    };
    
    
    function UniversityLibrary(name) {
        Library.call(this, name);
    }
    
    UniversityLibrary.prototype = Object.create(Library.prototype);
    UniversityLibrary.prototype.constructor = UniversityLibrary;
    
    UniversityLibrary.prototype.addResearchPapers = function() {
        console.log("Adding new research papers...");
    };
    

    const publicLibrary = new PublicLibrary("City Library");
    const universityLibrary = new UniversityLibrary("Uni Library");
    
    console.log(publicLibrary.getBooks());
    publicLibrary.lendBook();
    
    console.log(universityLibrary.getBooks());
    universityLibrary.addResearchPapers();
    