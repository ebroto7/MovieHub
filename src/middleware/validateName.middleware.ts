import { NextFunction, Request, Response } from "express";

export const validateName = (req: Request, res: Response, next: NextFunction) => {
    const {name} = req.body
    if (name.length < 4) {
        return res 
            .status(400)
            .json({message: 'Name must be at least 4 characters long'})
            
    }
    next()
}


