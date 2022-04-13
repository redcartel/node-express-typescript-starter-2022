import { NextFunction, Request, Response } from "express";
import config from '../config';


const errorHandler = (err : any, req : Request, res : Response, next: NextFunction) => {
    try {
        // handle error of form (throw { status, message })
        if (err.hasOwnProperty('status')) {
            return res.status(err.status).json({
                message: err.message ?? ''
            });
        }
        // handle numeric error (throw http code)
        else if (parseInt(`${err}`) >= 200 && parseInt(`${err}`) < 600) {
            return res.status(parseInt(`${err}`)).json({ message: `${err}` });
        }
        // handle generic error
        else {
            if (config.nodeEnv === 'production') {
                console.error(`${err}`.slice(0, 512));
            }
            else {
                console.error(err);
            }
            return res.status(500).json({ message: '' });
        }
    }
    catch (e) {
        console.error('An error happened while processing an error');
        console.error(e)
        console.error('')
        console.error(err);
        return res.status(500).json({ message: '' });
    }
}

export default errorHandler;