import {Request, Response} from 'express'

export const initiateChallenge = async(res: Response, req:Request)=> {
    try{

    }
    catch(error){
        res.status(500).json({message:''});
    }
}

export const attack = async(res: Response, req: Request) => {
    try{

    }
    catch(error){
        res.status(500).json({message:'Error processing attack.'});
    }
}

export const castSpell = async (req: Request, res: Response) => {
  try {

   }
  catch(error){
      res.status(500).json({message:'Error processing cast.'});
  }
}

export const heal  = async (req: Request, res: Response) => {
    try {
  
     }
    catch(error){
        res.status(500).json({message:'Error processing heal.'});
    }
  }

