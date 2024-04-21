//compares the two values and returns the true/false value
//comparison operators: <,  >, <=, >=, !=, 

//loose equlaity(==): It checks the equality of two values but not checks the type of two values
console.log(5==5);//prints true
console.log(5=='5');//prints true, but one is number and another is string 
console.log(0==null);
console.log(0==false);
console.log(undefined==null);
console.log(1!='1');//false

console.log('---------------------------------------------')

//strict equlaity(===): It checks the equality of two values and checks the type of two values
console.log(5===5);//prints true
console.log(5==='5');//false
console.log(0===false);//true
console.log(undefined==null);//
console.log(1!=='1');//true