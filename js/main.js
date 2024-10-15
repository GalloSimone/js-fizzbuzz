for(i=0;i<100;i++){

    let num= i+1

    let output = num;

    const div3 = num % 3 === 0;
    const div5 = num % 5 === 0;
  
    if (div3 ) {
        output = "Fizz";
      }

      else if(div5 ){
        output = "buzz"
      }
      else if (div3 && div5) {
        output = "FizzBuzz";
      }
      console.log(output);
      
}