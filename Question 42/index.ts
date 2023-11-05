//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
  }
  
  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  const greatMagicians = make_great(magicianNames);
  
  console.log("Original Magicians:");

  
  console.log("\nGreat Magicians:");