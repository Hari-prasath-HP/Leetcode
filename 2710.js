
let num = "51230100"
let arr = num.split('');
  while(arr.length){
      if(arr[arr.length-1]==0){
          arr.pop()
      }else break;
  }
    console.log(arr.join(''))
