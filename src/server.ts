import express from 'express'
import cors from 'cors';

import { addRSVP } from './app/handlers/guestRsvp'

const app = express()

app.use(cors());

app.use(express.json());
app.get('/', (req: any, res: any) => {
    res.status(200)

})


app.post('/sendRsvp', addRSVP)

app.listen(7000, () => {
    console.log('hello on http://localhost:7000')
})

export default app