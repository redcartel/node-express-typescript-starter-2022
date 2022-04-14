import { RequestHandler } from 'express'
import packageJson from 'package.json';
import config from 'src/config'

/**
 * Health check endpoint
 */
const getRoot: RequestHandler = (req, res) => {
    if (config.nodeEnv !== 'production') {
        res.status(200).json({
            'environment': config.nodeEnv,
            'version': packageJson.version
        })
    }
    else {
        res.status(200).json({})
    }
}

export default getRoot