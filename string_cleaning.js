function stringClean(s){
  ns = s.split('')
  
  let clean = ''
  
  for (let i = 0; i < ns.length; i++) {
    if ( isNaN(ns[i])){
      clean += ns[i]
    }else if (ns[i] == ' '){
      clean += ' '
    }else{
      clean += ''
    }
  }
  return clean
}
