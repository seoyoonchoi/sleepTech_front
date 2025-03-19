

//! === 프로젝트 구현 ===
//? Book 클래스: 각 책의 정보 저장 & 대여 및 반납 기능 정의
class Book {

  constructor(id, title, author) {
    
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true; 
  }

  //? 책 대여 기능
  rentBook() {
    if (this.isAvailable) {
      // 대여 가능
      this.isAvailable = false;
      console.log(`${this.title} has been rented`);
    } else {
      console.log(`${this.title} is currently not available`);
    }
  }

  //? 책 반납 기능
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned`);
  }
}

//# Library 클래스 
// : Book 객체 목록 관리 & 추가 기능 구현
class Library {
  constructor() {
    this.books = [];
    this.nextBookId = 1;
  }

  // cf) 클래스의 메서드 정의 시 : function 키워드 생략

  addBook(title, author) {
    const newBook = new Book(this.nextBookId, title, author);
    this.books.push(newBook);

    console.log(`${title} 책이 도서관에 추가되었습니다. (저자: ${author})`);
    this.nextBookId++;
  }

  displayBooks() {
    console.log('=== Library ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? '대여 가능' : '대여 중'}`
      );
    })
  }

  //? 특정 id 책 대여 & 반납
  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.rentBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  //? 특정 id의 책 정보 수정
  updateBook(id, newTitle, newAuthor) {
    // find메서드
    // : 배열에서 제공된 콜백함수를 만족하는 첫 번째 요소를 반환
    // : 만족하는 값이 없으면 undefined를 반환
    const book = this.books.find(book => book.id === id);

    if (!book) {
      console.log('해당 책을 찾을 수 없습니다.');
      return; // 메서드 종료
    }

    const isNewTitleValid = newTitle && newTitle.trim().length > 0;
    const isNewAuthorValid = newAuthor && newAuthor.trim().length > 0;

    if (!isNewTitleValid && !isNewAuthorValid) { // 두 가지의 값이 모두 제공되지 않은 경우
      console.log('제목 또는 저자 중 하나는 반드시 수정되어야 합니다.');
      console.log('현재는 수정된 값이 없습니다.');
      return;
    }

    book.title = newTitle || book.title;
    book.author = newAuthor || book.author;
    console.log(`책 (id: ${id}) 정보가 업데이트되었습니다 : 제목 - ${book.title}, 저자 - ${book.author}`);
  }

  //? 특정 id의 책 정보 삭제
  removeBook(id) {
    const index = this.books.findIndex(book => book.id === id);

    if (index !== -1) {
      // let arr = [1, 2, 3];
      // arr.splice(1, 2);
      // : 1번 인덱스 요소부터 2개 삭제
      // >> [2, 3]
      const removedBook = this.books.splice(index, 1)[0]; // [삭제할 요소]
      console.log(`${removedBook.title} (id: ${removedBook.id}) 책이 도서관에서 삭제되었습니다.`);
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  //# == 추가 기능 구현 == //
  // [필터링] 저자별 도서 필터링
  filterBooksByAuthor(author){
    const bookAuthor = this.books.filter((book) => book.author === author);
    console.log(bookAuthor);
  }

  // [필터링] 제목 키워드로 도서 필터링
  filterBooksByTitle(keyword){
    const bookKeyword = this.books.filter((book) => book.title.includes(keyword));
    console.log(bookKeyword);

  }

  // [필터링] 대여 가능 여부로 도서 필터링
  filterBooksByAvailable(isAvaible){
    const status = isAvaible ? '대여가능' : '대여중';
    const bookAvailable = this.books.filter((book) => status ==='대여가능');
    console.log(bookAvailable);
  }

  // [추가 기능] 대여 가능 도서 수 집계
  countAvailableBooks(){
    const count = this.books.filter(book => book.isAvailable).length;
    console.log(`총 ${count}권의 책이 대여 가능합니다.`);
    return count;

  }
}

//! === 프로젝트 실행 ===
const busanLibrary = new Library();

busanLibrary.addBook('SQLD 공부는 재밌어', '이승아');
busanLibrary.addBook('자바 공부는 재밌어', '이도경');
busanLibrary.addBook('자바스크립트 공부는 재밌어', '이지희');
busanLibrary.addBook('리액트 공부는 재밌어', '이지훈');
busanLibrary.addBook('스프링 공부는 재밌어', '이승아');

busanLibrary.displayBooks();

busanLibrary.rentBook(1);
busanLibrary.displayBooks();
busanLibrary.rentBook(1);

busanLibrary.returnBook(1);
busanLibrary.displayBooks();

busanLibrary.updateBook(2, '자바 공부는 어려워', null);
busanLibrary.updateBook(2, null, '이도갱이');
busanLibrary.removeBook(3);
busanLibrary.displayBooks();

// busanLibrary.filterBooksByAuthor('이승아');
busanLibrary.filterBooksByTitle('재밌어');
busanLibrary.countAvailableBooks();