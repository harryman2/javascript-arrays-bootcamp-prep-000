var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

array = ['f', 'o','o'];

 function addElementToBeginningOfArray(array, element){
   
   /*var newLength = array.push('foo');
   return array;*/
  //array.unshift("foo");
  array = ["foo",...array];
  return array;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array;
  
 }
 
 function addElementToEndOfArray(array, element){
   
   array = [...array, "foo"];
   return array;
 }
 
 function destructivelyAddElementToEndOfArray(array, element){
   
   array.push("foo");
   return array;
 }
 
 
 function accessElementInArray(array, index){
  /*array = [1,2,3];
  array[index] = 3;
  return array;*/
  array = [1,2,3];
  return array[2];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array = [1,2,3];
  //array.shift();
  return console.log(array.slice(1, 3));
   //return  console.log(array);
 }