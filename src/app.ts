import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import errorHandler from './middlewares/errorHandler'
import fourOhFour from './middlewares/fourOhFour'
import root from './routes/root'

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))

// Apply routes before error handling
app.use('/', root)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app