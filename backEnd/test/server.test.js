const expect = require("chai").expect
const highestHand= require("../server.js")
console.log("highestHand")

describe("1) logic test", function(){
  describe('best highest()', function(){
    it('should return the highest card',function(){
      const hand1 = ['Kd','Js','Td','9h','8c','4d','3s']
      // const hand2 = ['Ad','Qs','Td','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      // const hand4 = ['Qd','Js','Td','9h','7c','4d','3s']
      const hand5 = ['Ad','Js','Td','9h','8c','4d','3s']
      // const hand6 = ['As','Js','Td','9h','8c','4d','3s']
      const hands= [hand1,hand3,hand5]
      let result =[]
      result.push(hand5)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
    it('should return multiple winners',function(){
      const hand1 = ['Kd','Js','Td','9h','8c','4d','3s']
      // const hand2 = ['Ad','Qs','Td','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      // const hand4 = ['Qd','Js','Td','9h','7c','4d','3s']
      const hand5 = ['Ad','Js','Td','9h','8c','4d','3s']
      const hand6 = ['As','Js','Td','9h','8c','6d','3s']
      const hands = [hand1,hand3,hand5,hand6]
      let result =[]
      result.push(hand5,hand6)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
  })
  describe('highest pair', function(){
    it('should return the highest pair',function(){
      const hand1 = ['Kd','Js','Td','9h','8c','4d','3s']
      const hand2 = ['Ad','As','Jd','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
      const hand5 = ['Ad','Js','Td','9h','8c','4d','3s']
      const hand6 = ['As','Ah','Td','9h','8c','4d','3s']
      const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
      let result =[]
      result.push(hand2)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
    it('should return tie',function(){
      const hand1 = ['Kd','Js','Td','9h','8c','4d','3s']
      const hand2 = ['Ad','As','Js','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
      const hand5 = ['Ad','As','Jd','9h','8c','4d','3s']
      const hand6 = ['As','Ah','Js','9h','8c','4d','3s']
      const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
      let result =[]
      result.push(hand6,hand5,hand2)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
  })
  describe('highest Two pair', function(){
    it('should return the highest Two pair',function(){
      const hand1 = ['Kd','Js','9d','9h','4c','4d','3s']
      const hand2 = ['Ad','As','Jd','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
      const hand5 = ['Ad','Js','Td','9h','8c','4d','3s']
      const hand6 = ['As','Ah','Td','9h','8c','4d','3s']
      const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
      let result =[]
      result.push(hand1)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
    it('should return tie in highest 2 pair',function(){
      const hand1 = ['Kd','Js','Td','9h','9c','4d','4s']
      const hand2 = ['Ad','As','Js','9h','8c','4d','3s']
      const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
      const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
      const hand5 = ['Ks','Qs','Jd','9h','9c','4d','4s']
      const hand6 = ['As','Ah','Js','9h','8c','4d','3s']
      const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
      let result =[]
      result.push(hand5,hand1)
      expect(highestHand.highestHand(hands)).to.deep.equal(result)
    })
  })
  // describe('highest Three of a kind', function(){
  //   it('should return the highest Two pair',function(){
  //     const hand1 = ['Kd','Js','9d','9h','4c','4d','3s']
  //     const hand2 = ['Ad','Ks','Jd','9h','4c','4d','4s']
  //     const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ad','Js','Td','9h','8c','4d','3s']
  //     const hand6 = ['As','Ah','Td','9h','8c','4d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return highest 3 of a kind',function(){
  //     const hand1 = ['Kd','Js','Td','9h','4c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ks','Qs','Jd','9h','9c','4d','4s']
  //     const hand6 = ['As','Ah','Js','9h','8c','4d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return tie for more than 1 3 of a kind with equal value',function(){
  //     const hand1 = ['Kd','Js','Td','9h','4c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Js','Td','9h','7c','4d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ks','Qs','Jd','9h','9c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand6,hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe('straight wins!',function(){
  //
  //   it('should return straight',function(){
  //     const hand1 = ['Kd','Js','Td','9h','4c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Js','Td','9h','8c','7d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ks','Qs','Jd','9h','9c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand3)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return highest straight',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Js','Td','9h','8c','7d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ks','Qs','Jd','9h','9c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand1)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return tie in straight',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Js','Td','9h','8c','7d','3s']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','5d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand5,hand1)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe("'flush' the competition", function(){
  //   it('should return winning flush',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ad','As','Ac','9h','8c','4d','3s']
  //     const hand3 = ['Kd','Jd','Td','9h','8c','7d','3d']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand3)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return highest flush',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand3 = ['Kd','Jd','Td','9h','8c','7d','3d']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return tie',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand3,hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe("Full house now on VHS", function(){
  //   it('should return fullhouse',function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return highest fullhouse',function(){
  //     // const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     // const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     // const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Qd','Qs','Qh','9h','9c','4d','4s']
  //     // const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand2,hand5]
  //     let result =[]
  //     result.push(hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it('should return tie',function(){
  //     // const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     // const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     // const hand4 = ['Qd','Js','Td','Th','9h','7c','3s']
  //     const hand5 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     // const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand2,hand5]
  //     let result =[]
  //     result.push(hand5,hand2)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe("Four of a kind", function(){
  //   it("should return four of a kind wins",function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','9h','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand4)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it("should return highest four of a kind",function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['As','Ah','Ac','Ad','8c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand6)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it("should return tie",function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand6 = ['Qs','Qh','Qc','Qd','9c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand6,hand4)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe("straight flushing them hoes", function(){
  //   it("should return straight flush wins",function(){
  //     const hand1 = ['Qd','Js','Td','9h','8c','4d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Kd','Jd','Td','9d','8d','7d','4s']
  //     const hand6 = ['Qs','Qh','Qc','Qd','9c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand5)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it("should return highest straight flush wins",function(){
  //     const hand1 = ['Qd','Jd','Td','9d','8d','7d','4s']
  //     const hand2 = ['Ah','As','Qh','Qd','Qc','4h','3h']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Kd','Jd','Td','9d','8d','7d','4s']
  //     const hand6 = ['Qs','Qh','Qc','Qd','9c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand1)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it("should return tie",function(){
  //     const hand1 = ['Qd','Jd','Td','9d','8d','6d','4s']
  //     const hand2 = ['Qd','Jd','Td','9d','8d','7d','4s']
  //     const hand3 = ['Ah','As','Qh','9h','8c','4h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Kd','Jd','Td','9d','8d','7d','4s']
  //     const hand6 = ['Qs','Qh','Qc','Qd','9c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand2,hand1)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
  // describe("royally flushing the competition",function(){
  //   it("should return royal flush wins",function(){
  //     const hand1 = ['Qd','Jd','Td','9d','8d','6d','4s']
  //     const hand2 = ['Qd','Jd','Td','9d','8d','7d','4s']
  //     const hand3 = ['Ac','Kc','Qc','Jc','Tc','9h','3h']
  //     const hand4 = ['Qd','Qs','Qh','Qc','9h','7c','3s']
  //     const hand5 = ['Kd','Jd','Td','9d','8d','7d','4s']
  //     const hand6 = ['Qs','Qh','Qc','Qd','9c','5d','3s']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand3)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  //   it("should return higher royal flush wins",function(){
  //     const hand1 = ['Ac','Kc','Qc','Jc','Tc','4h','2h']
  //     const hand2 = ['Ac','Kc','Qc','Jc','Tc','6h','5h']
  //     const hand3 = ['Ac','Kc','Qc','Jc','Tc','8d','4s']
  //     const hand4 = ['Ac','Kc','Qc','Jc','Tc','8h','3h']
  //     const hand5 = ['Ac','Kc','Qc','Jc','Tc','7h','3c']
  //     const hand6 = ['Ac','Kc','Qc','Jc','Tc','8c','3d']
  //     const hands= [hand1,hand2,hand3,hand4,hand5,hand6]
  //     let result =[]
  //     result.push(hand6,hand5,hand4,hand3,hand2,hand1)
  //     expect(highestHand.highestHand(hands)).to.deep.equal(result)
  //   })
  // })
})
