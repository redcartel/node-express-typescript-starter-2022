import { NextFunction, Request, Response } from "express"
import config from 'src/config'

/**
 * Return 500 when errors are raised.
 */
const errorHandler = (err: any, req: Request, res: Response) => {
    console.error(err);
    if (config.nodeEnv === 'production') {
        return res.status(500).json({message: 'unknown error'});
    }
    else {
        return res.status(500).json({message: `${err}`});
    }
}

export default errorHandler