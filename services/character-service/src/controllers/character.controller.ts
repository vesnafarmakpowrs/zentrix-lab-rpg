import {Request, Response } from 'express'

export const getAllCharacters = async (req: Request, res: Response) =>{
    try{
       
        return res.json({character: ''});
    }
    catch (error){
        return res.status(500).json({message: 'Error fetching characters'});
    }
}

export const getCharacterById = async (req: Request, res: Response) => {
    try{
       const {id} = req.params;
    }
    catch (error){
        return res.status(500).json({message: 'Character not found'});
    }
}

export const createCharacter = async(req: Request, res: Response) => {
    try{

    }
    catch(error){
      res.status(500).json({message: 'Error creating character'});
    }
}