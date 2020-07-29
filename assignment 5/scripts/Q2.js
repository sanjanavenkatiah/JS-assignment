class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    

}

class Moderator extends User
{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user){
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
        return user;
    }
    deleteCoins(user){
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`);
        return user;
    }
   
}

class Admin extends Moderator
{
   addCourse(user,course)
   {
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course)
   {
       user.courses.pop(course);
       console.log(user);
   }
   
}
let user1 = new User('Sanjana',21,'sanjana@gmail.com')
let user2 = new User('Namitha',24,'namitha@gmai.com')
let user3 = new User('Nandini',22,'namitha@gmai.com')
let mod1 = new Moderator('Nikil',23,'nikil@gmail.com','Moderator');
let mod2 = new Moderator('Kushal',23,'kushal@gmail.com','Moderator');
let admin = new Admin('Nikhil',25,'nikhil@gmail.com');

admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'C++');
admin.addCourse(user2,'Python');
admin.addCourse(user3,'Cadd');
admin.deleteCourse(user2,'Python')


//debugger;
 user1.login()
 mod1.addCoins(user1);
mod2.addCoins(user1);
 mod1.addCoins(user2);
mod1.deleteCoins(user1);
user1.logout();