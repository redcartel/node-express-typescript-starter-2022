import { NextFunction, Request, Response } from "express";

 const fourOhFour = (req : Request, res : Response, next : NextFunction) => {
    throw {status: 404, message: 'not found'};
};

export default fourOhFour;