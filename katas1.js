function oneThroughTwenty() {

  let meuRetorno1 = []
    
  for(let i = 1; i <= 20; i++ ) {

    meuRetorno1.push(i)

  } 

  console.log(meuRetorno1)

}
oneThroughTwenty()

function evensToTwenty() {

  let meuRetorno2 = []

  for(let i = 0; i <= 20; i++ ) {

    if (i % 2 == 0) {

      meuRetorno2.push(i)
      
      
    }

  }

  console.log(meuRetorno2)
  return meuRetorno2
}
evensToTwenty()
//call function evensToTwenty

function oddsToTwenty() {
    
  let meuRetorno3 = []

  for(let i = 0; i <= 20; i++ ) {

    if (i % 2 == 1) {
      meuRetorno3.push(i)
    }

  }

  console.log(meuRetorno3)
  return meuRetorno3
}

oddsToTwenty()

function multiplesOfFive() {

  let meuRetorno4 = []
    
  for(let i = 1; i <= 100; i++) {

    if(i % 5 == 0) {

      meuRetorno4.push(i)

    }



  }
  console.log(meuRetorno4)
  return meuRetorno4
}

multiplesOfFive()

function squareNumbers() {

  let meuRetorno5 = []
    
  for(let i = 1; i <=100; i++){

    if(Math.sqrt(i) % 1 == 0) {

      meuRetorno5.push(i)

    }

  }
  console.log(meuRetorno5)
  return meuRetorno5
}
squareNumbers()

function countingBackwards() {

  let meuRetorno6 = []
    
  for(let i = 20;i >= 1; i--) {

    meuRetorno6.push(i)

  }

  console.log(meuRetorno6)

}
countingBackwards()

function evenNumbersBackwards(arr) {

  let meuRetorno7 = []
    
  for (let i = 20; i >= 1; i-- ) {

    if(i % 2 == 0) {

      meuRetorno7.push(i)


    }
  }
 
  console.log(meuRetorno7)
  return meuRetorno7
}

evenNumbersBackwards()

function oddNumbersBackwards() {

  let meuRetorno8 = []
    
  for(let i = 20; i >=1; i--){

    if(i % 2 == 1) {

      meuRetorno8.push(i)

    }
  }

  console.log(meuRetorno8)
  return meuRetorno8
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {

  let meuRetorno9 = []
    
  for(let i = 100; i >= 1; i--) {

    if(i % 5 == 0) {

      meuRetorno9.push(i)


    }

  }
  console.log(meuRetorno9)
  return meuRetorno9
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
    
  let meuRetorno10 = []

  for(let i = 100; i >= 1; i--) {

    if (Math.sqrt(i) % 1 == 0) {

      meuRetorno10.push(i)

    }



  }
  console.log(meuRetorno10)
  return meuRetorno10
}

squareNumbersBackwards()


