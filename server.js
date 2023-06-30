const express = require('express')

const app = express()

const magic8ballResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


//GREETING
app.get('/greeting/:name?', function (req, res) {
    const name = req.params.name || 'stranger'
    const greeting = `Well, hello there ${name}! It sure is great to see you.`
    
    res.send(greeting)
})

//TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', function (req, res) {
  const total = parseInt(req.params.total)
  const tipPercentage = parseInt(req.params.tipPercentage)
  const tipAmount = (total * tipPercentage) / 100

  res.send(tipAmount.toString())
})

//MAGIC 8 BALL
app.get('/magic/:question', function (req, res) {
  const question = req.params.question
  const randomResponse = magic8ballResponses[Math.floor(Math.random() * magic8ballResponses.length)]

  res.send(`<h1>Question: ${question}, Answer: ${randomResponse}</h1>`)
})

//FIBONACCI
app.get('/fibonacci/:number', (req, res) => {
    const number =  parseInt(req.params.number)
    const isFibonacci = number => {
        let num1 = 0
        let num2 = 1

        while (num2 <= number) {
            let temp = num2
            num2 = num1 + num2
            num1 = temp
        }
    
        return num2 === number
    }

    if (isFibonacci(number)) {
        res.send('very good. its a fibonacci eh.')
    } else {
        res.send('i can tell this is not a fibonacci eh')
    }
})

app.listen(3000, function () {
  console.log('Listening on port 3000')
})