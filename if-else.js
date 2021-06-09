let yourAge = +prompt('Welcome From Our Restaurant! This is our promotion. The younger the age, the more promotion you can get.',''); 
  if ( yourAge<='5' ) {
    alert('100% discount. Congratulation');
  }
  else if( yourAge>'5' && yourAge<='10'){
    alert('75% discount. Welcome Buddy');
  }
  else if( yourAge>'10' && yourAge<='15'){
    alert('50% discount. Still Cheaper');
  }
  else if( yourAge>'15' && yourAge<=18){
    alert('25% discount. Here we go xD');
  }
  else{
    alert('10% for adults. Enjoy your day');
  }
