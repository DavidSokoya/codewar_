// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
function abbrevName(name){
  //   Split the names into two
  let [firstName, lastName]  = name.split(' ')

  //  Get the first letter of each names
 let firstInitial =  firstName.charAt(0).toUpperCase();
 let secondInitial = lastName.charAt(0).toUpperCase();
  
  let initials = firstInitial + '.' + secondInitial 
  
  return initials;

  //   Join the two names with .
}

function abbrevName(name){
  
    return name.split(' ').map(name => name[0].toUpperCase()).join('.')
  
  }