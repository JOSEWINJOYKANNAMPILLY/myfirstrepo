class Vehicle {
    constructor(wheels) {
       this.wheels = wheels;
    }
    toString() {
       return '(' + this.wheels + ')';
    }
 }
 class Car extends Vehicle {
    constructor(color) {
       super(4);
       this.color = color;
    }
    toString() {
       return super.toString() + ' colored: ' + this.color;
    }
 }
 let car = new Car('blue');
 car.toString();
 console.log(car instanceof Car);
 console.log(car instanceof Vehicle);

 


 const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
      this.books.forEach(book => console.log(book + 'by ' +
         this.fullName));
    }
 }



 function iterateVar() {
    for(var i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }
 function iterateLet() {
    for(let i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }


 function add(x, y = 0) {
    return x + y;
 }
 add(1);
 add(1,2);



 function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + 'friends');
 }
 userFriends('User', 'Bob', 'Alice');



 function userTopFriends(firstFriend, secondFriend, 
    thirdFriends) {
       console.log(firstFriend);
       console.log(secondFriend);
       console.log(thirdFriends);
    }
    userTopFriends(...['Alice', 'Bob', 'Michelle']);



    function parent() {
        const message = 'Hello World';
        function child() {
           alert (message);
        }
        child();
     }
     parent();

     

     function parent() {
        const message = 'Hello World';
        function child() {
           alert (message);
        }
        return child;
     }
     const childFN = parent();
     childFN();

     
