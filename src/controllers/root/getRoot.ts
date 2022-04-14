import { RequestHandler } from 'express'
import config from 'src/config'

/**
 * Health check endpoint
 */
const getRoot: RequestHandler = (req, res) => {
    res.status(200).json({
        name: config.name,
        description: config.description
    });
}

export default getRoot