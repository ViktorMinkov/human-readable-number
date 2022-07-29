module.exports = function toReadable (number) {
  const uniqueDigits = ['','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const commonDigits = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const stringOfNumber = String(number).split('');

  
  if(stringOfNumber[0] == 0) {    
    return 'zero';
  }else if(stringOfNumber.length === 1) {    
    return uniqueDigits[stringOfNumber];  
  }else if (stringOfNumber.length === 2) {
    if (stringOfNumber[0] == 1) {      
      return `${uniqueDigits[stringOfNumber[0] + stringOfNumber[1]]}`;
    }else if(stringOfNumber[1] == 0){
      return `${commonDigits[stringOfNumber[0]]}`;
   }else {      
      console.log(`${commonDigits[stringOfNumber[0]]} ${uniqueDigits[stringOfNumber[1]]}`)
    return `${commonDigits[stringOfNumber[0]]} ${uniqueDigits[stringOfNumber[1]]}`;
    };    
  }else if (stringOfNumber.length === 3) {
    if (stringOfNumber[1] == 1){      
      return `${uniqueDigits[stringOfNumber[0]]} hundred ${uniqueDigits[stringOfNumber[1] + stringOfNumber[2]]}`;
    }else if (stringOfNumber[1] == 0 && stringOfNumber[2] == 0) {
      return `${uniqueDigits[stringOfNumber[0]]} hundred`;
    }else if(stringOfNumber[1] == 0 ){      
      return `${uniqueDigits[stringOfNumber[0]]} hundred ${uniqueDigits[stringOfNumber[2]]}`;
    }else if (stringOfNumber[2] == 0) {     
      return `${uniqueDigits[stringOfNumber[0]]} hundred ${commonDigits[stringOfNumber[1]]}`;  
    }else {     
      return `${uniqueDigits[stringOfNumber[0]]} hundred ${commonDigits[stringOfNumber[1]]} ${uniqueDigits[stringOfNumber[2]]}`;
    }
  } 
  
}
