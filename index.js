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
}
