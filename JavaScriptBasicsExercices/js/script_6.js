// 2.4.1. Code la vie

function arnToProt(arn) {
    arr = []
    for(let i = 0; i < arn.length; i+=3) {
      arr.push(arn.substring(i, i+3))
    }
    
    for(let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        // UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
          arr[i] = "Sérine"
        break;
        // CCU ou CCC ou CCA ou CCG => Proline
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          arr[i] = "Proline"
        break;
        // UUA ou UUG => Leucine
        case 'UUA':
        case 'UUG':
          arr[i] = "Leucine"
        break;
        // UUU ou UUC => Phénylalanine
        case 'UUU':
        case 'UUC':
          arr[i] = "Phénylalaline"
        break;
        // CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'AGA':
        case 'AGG':
          arr[i] = "Arginine"
        break;
        // UAU ou UAC => Tyrosine
        case 'UAU':
        case 'UAC':
          arr[i] = "Tyrosine"
        break;
      }
    }
    console.log(arr.join('-'))
  }
  arn = "CCGUCGUUGCGCUACAGC"
  arnToProt(arn)