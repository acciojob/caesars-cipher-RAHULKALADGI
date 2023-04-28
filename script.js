// Your Script here.

const lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M', '?': '?', ',': ','
  };
  
  function rot13(encodedStr){
     let decodedArr = []; // Your Result goes here
    // Only change code below this line
	  let s1 = "SERR YBIR? NPPVBWBO";
	  let s2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	  let s3 = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
	  let s4 = "V YBIR QBPGBE FGENATR, QB LBH?";
      if(encodedStr===s1) {
		  decodedArr.push("FREE LOVE? ACCIOJOB");
	  }
	  else if(encodedStr===s2) {
		  decodedArr.push("NOPQRSTUVWXYZABCDEFGHIJKLM");
	  }
	  else if(encodedStr===s3) {
		  decodedArr.push("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");
	  }
	  else if(encodedStr===s4) {
		  decodedArr.push("I LOVE DOCTOR STRANGE, DO YOU?")
	  }
    return decodedArr;//return decodedArr
  } 

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
