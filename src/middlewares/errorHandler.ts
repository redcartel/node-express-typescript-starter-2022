import { NextFunction, Request, Response } from "express";
import config from 'src/config';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('🛑 errorHandler middleware 🛑');
    console.error(err);
    try {
        if ('name' in err && config.nodeEnv !== 'production') {
            return res.status(500).json({
                name: err.name,
                message: err.message ? err.message : 'unknown error',
                stack: err.stack ? err.stack : null
            });
        }
    }
    catch (e) {
        // pass
    }
    return res.status(500).json({
        name: 'Error',
        message: 'unknown error',
        stack: null
    });
}

export default errorHandler;