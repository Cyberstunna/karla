import express from 'express'

const app = express()

app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log(`Server listening on 3000`)
})