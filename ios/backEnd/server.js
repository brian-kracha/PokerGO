const express = require("express")
const app = express()
const server= require("http").createServer(app)
const pokerEval = require("poker-evaluator")
server.listen(process.env.PORT || 3000)
const hand1 = ['Ac','Kc','Qc','Jc','Tc','4h','2h']
const hand2 = ['Ac','Kc','Qc','Jc','Tc','6h','5h']
const hand3 = ['Ac','Kc','Qc','Jc','Tc','8d','4s']
const hand4 = ['Ac','Kc','Qc','Jc','Tc','8h','3h']
const hand5 = ['Ac','Kc','Qc','Jc','Tc','7h','3c']
const hand6 = ['Ac','Kc','Qc','Jc','Tc','8c','3d']
const hands = [hand1,hand2,hand3,hand4,hand5,hand6]

const highestHand=(hands)=>{
  let array =[]
  for(let i = 0;i <hands.length;i++){
    const evalOutput = pokerEval.evalHand(hands[i])
    // console.log('evalOutput = ', evalOutput)
    array.push([i, evalOutput])
  }

  var sortedArray  = array.sort(function(a,b){
    return b[1].value - a[1].value
  })
  const result= []
  // console.log('sortedArray',sortedArray.length)
  for(let i = 1; i < sortedArray.length; i++){
    if(sortedArray[i-1][1].value > sortedArray[i][1].value){
      // console.log(sortedArray[i-1][0])
      result.push(hands[sortedArray[i-1][0]])
      break
    }
    if(sortedArray[i-1][1].value == sortedArray[i][1].value){
      // console.log(sortedArray[i-1][0])
      result.push(hands[sortedArray[i-1][0]])
      if(i === 5){
        result.push(hands[sortedArray[5][0]])
        break
      }
    }
  }
  // console.log('result',result)
  return result
}

app.get("/hands",(req,res,next)=>{
  let arrayOfHands = highestHand(hands)
  // console.log(arrayOfHands)
  res.status(200).send({hands:arrayOfHands})
})
module.exports = {
  highestHand
}

// const maximumScore = Math.max( hands.map( hand => scoreForHand(hand) ) )
//
// const handsWithIndex = hands.map( (hand, i) => {index: i, hand: hand} )
//
// const handsWithHighestScore = handsWithIndex.filter(
//   handWithIndex => scoreForHand(handWithIndex.hand) == maximumScore )
// )
//
// [
//   {index: 5, hand: [...] },
//   {index: 8, hand: [...] }
// ]
