import { RequestHandler } from 'express'

/**
 * Echo endpoint
 */
const postRoot : RequestHandler = (req, res) => {
    const json = req.body
    res.json(json)
}

export default postRoot