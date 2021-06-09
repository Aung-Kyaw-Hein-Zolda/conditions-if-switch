let yourAge = +prompt('Welcome From Our Restaurant! This is our promotion. The younger the age, the more promotion you can get.',''); 
  switch(yourAge) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      alert('100% discount. Congratulation');
      break;
      
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
      alert('75% discount. Welcome Buddy');
      break;
      
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
      alert('50% discount. Still Cheaper');
      break;
      
    case '16':
    case '17':
    case '18':
      alert('25% discount. Here we go xD');
      break;
      
    default:
      alert('10% for adults. Enjoy your day');
  }
