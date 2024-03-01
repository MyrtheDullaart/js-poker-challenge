const cardValues = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

function winningPair(pair1, pair2) {
  let winner = []
  const cards = areCardsTheSame(pair1, pair2)
  const cardScores = calculateCardScore(pair1, pair2)
  
  if (cards.pair1 && !cards.pair2) {
    winner = pair1
    return winner
  }

  if (!cards.pair1 && cards.pair2) {
  winner = pair2
  return winner
  }

  if (cardScores.pair1 > cardScores.pair2) {
    winner = pair1
  } else if (cardScores.pair1 < cardScores.pair2) {
    winner = pair2
  }

  return winner
}

function areCardsTheSame(pair1, pair2) {
  const sameCards = {pair1: false, pair2: false}
  if (pair1[0] === pair1[1]) {
    sameCards.pair1 = true
  }

  if (pair2[0] === pair2[1]) {
    sameCards.pair2 = true
  }
  return sameCards
}

function calculateCardScore (pair1, pair2) {
  const cards = areCardsTheSame(pair1, pair2)
  let cardScore = {}
  if (cards.pair1 && cards.pair2) {
    cardScore.pair1 = cardValues[pair1[0]]
    cardScore.pair2 = cardValues[pair2[0]]
  }

    return cardScore
  }

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
