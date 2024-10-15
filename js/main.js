for (let i=1; i<100; i++){

    let num = i + 1;

    let output = num;
    const div3 = num % 3 === 0;
    const div5 = num % 5 === 0;
    if (div3 && !div5) {
        output = "Fizz";
      }
      else if (div5 && !div3) {
        output = "Buzz";
      }
    
      // SE il numero corrente è divisibile per 3 e divisibile per 5 assegno alla stringa di output il valore 'FizzBuzz'
      else if (div3 && div5) {
        output = "FizzBuzz";
      }
    
      // ! OUTPUT
      // STAMPO la stringa di output all'interno del ciclo per farla stampare ogni volta
      console.log(output);
      
}
