function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = []
  for (var i = 0; i < musicians.length; i++) {
    beatlesPlay.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesPlay
}

function johnLennonFacts(facts) {
  let i = 0
while (i < facts.length) {
  facts[i] += "!!!"
  i++
    }
    return facts
}

function iLoveTheBeatles(number) {
 var sentence = []
  do {
  sentence.push("I love the Beatles!");
  number++
} while (number<15)
return sentence
}
