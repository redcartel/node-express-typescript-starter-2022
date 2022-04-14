import { RequestHandler } from 'express'
import config from 'src/config'

/**
 * Health check endpoint
 */
const getRoot: RequestHandler = (req, res) => {
    res.status(200).json({
        'environment': config.nodeEnv === 'production' ?
            undefined :
            config.nodeEnv
    });
}

export default getRoot