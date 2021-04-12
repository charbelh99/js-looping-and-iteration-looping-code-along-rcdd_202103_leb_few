// Code your solutions in this file

function writeCards(x,y){
  const salamo = [];
  for (let i = 0; i < x.length; i++) {
    salamo.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`);
  }
  return salamo;
  
}

 const writeCard = ['Lisa', 'Kaitlin', 'Jan'];
 
 writeCards(writeCard,"surprise");

/* function countDown(x){
   let count = x;
   while (count>=0){
     console.log(`${count}`);
    // if(count === x){
      // console.log()
     //}
     count--;
     
   }
 }*/
// countDown(4);
// countDown(10);
 
 