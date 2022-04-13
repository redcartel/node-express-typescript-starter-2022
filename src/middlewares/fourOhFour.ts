import { NextFunction, Request, Response } from "express";

/**
 * JSON 404 response
 */
 const fourOhFour = (req : Request, res : Response, next : NextFunction) => {
    res.status(404).json({
        name: 'Not Found',
        message: 'resource not found',
        stack: ''
    })
};

export default fourOhFour;