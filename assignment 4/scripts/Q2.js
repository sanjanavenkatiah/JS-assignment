const student = {
    name : "helsinki",
    age : 24,
    projects :{
        dicegame:"two player dice game using javascript"
    }
}
 const {name,projects:{dicegame},age} = student
 console.log(name)
 console.log(age)
 console.log(dicegame)