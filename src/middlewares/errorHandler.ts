import { ErrorRequestHandler } from "express"
import config from 'src/config'

/**
 * 500 response & log when errors are raised.
 */
const errorHandler : ErrorRequestHandler = (err, req, res) => {
    console.error('');
    if (config.nodeEnv === 'production') {
        return res.status(500).json({message: 'unknown error'});
    }
    else {
        return res.status(500).json({message: `${err}`});
    }
}

export default errorHandler