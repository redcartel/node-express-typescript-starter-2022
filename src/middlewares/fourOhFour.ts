import { NextFunction, Request, Response } from "express";

/**
 * JSON 404 response
 */
 const fourOhFour = (req : Request, res : Response, next : NextFunction) => {
    throw {status: 404, message: 'not found'};
};

export default fourOhFour;