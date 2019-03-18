class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let newSent = []
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = sentence.split(' ')
    for(let i = 0; i < words.length; i++) {
      console.log(word)
      let word = words[i]
        if (i === 0) {
          newSent.push(word[0].toUpperCase() + word.slice(1))
        } else if (except.includes(word)) {
          newSent.push(word)
        } else {
          newSent.push(word[0].toUpperCase() + word.slice(1))
        }
      }
    console.log(newSent.join(' '))
    return newSent.join(' ')
  }
}
