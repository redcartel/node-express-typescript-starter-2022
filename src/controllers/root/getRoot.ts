import { Request, Response } from 'express'
import config from 'src/config'

/**
 * Health check endpoint
 */
const getRoot = (req : Request, res : Response) => {
    if (config.nodeEnv === 'production') {
        res.status(200).send()
    }
    else {
        res.json({ 'environment': config.nodeEnv ?? 'undefined' })
    }
}

export default getRoot