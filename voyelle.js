// function getVowels(str) {
//      var m = str.match(/[aeiou]/gi); return m === null ? 0 : m.length;
//       } 

function getCount(words) {
    let answer = {vowels: 0};
    if( typeof words !== 'string') { return answer }
  
    let vowel  = 'aeiouéèAEIOUÉÈ'
  
    for(char of words){
    //   if(char === ' ') { continue }
      
      if (vowel.indexOf(char) !== -1){  // is a vowel
        answer.vowels += 1
      }
    }
    return answer
  }

  console.log(getCount("Je métriserai javascript d'içi peu, et vous en serait témoins vous verrez!"))