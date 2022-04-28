import { ErrorRequestHandler } from 'express'
import config from '../config'

/**
 * 500 response & log when errors are raised.
 */
const errorHandler: ErrorRequestHandler = (err, req, res) => {
    console.error(err);
    return res.status(500).json({
        message: config.nodeEnv === 'production' ?
            'unknown error' :
            `${err}`
    })
}

export default errorHandler