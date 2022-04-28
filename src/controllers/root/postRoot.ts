import { RequestHandler } from 'express'
import app from '../../app'

/**
 * Echo endpoint
 */
const postRoot : RequestHandler = (req, res) => {
    const json = req.body
    res.json(json)
}

export default postRoot