import { NextFunction, Request, Response } from "express"

/**
 * JSON 404 response
 */
 const fourOhFour = (req : Request, res : Response) => {
    return res.status(404).json({message: 'not found'});
}

export default fourOhFour