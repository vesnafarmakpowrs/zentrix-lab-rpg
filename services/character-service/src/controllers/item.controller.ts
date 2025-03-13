import {Response, Request} from 'express'

// GET /api/items - List all items 
export const getAllItems = async (res: Response, req: Request)=>{
  try {
    
  } catch (error) {
    res.status(500).json({message:'Error fetching items'});
  }
};

// POST /api/items - Create a new item
export const createItem = async(res: Response, req: Request) =>{
    try{

    }catch(error){
       res.status(500).json({message:'Error creating item'})
    }
}

// GET /api/items/:id - Retrieve item details and update name based on highest bonus stat
export const getItemById = async(res: Response, req: Request)=> {
    try {
        
    } catch (error) {
        res.status(500).json({message:'Item not found'})
    }
}

// POST /api/items/grant - Assigns an item to a character
export const grantItem = async(res: Response, req: Request)=> {
    try {
        
    } catch (error) {
        res.status(500).json({message:'Error granting item'})
    }
}

// POST /api/items/gift - Transfers an item from one character to another
export const giftItem= async(res: Response, req: Request)=> {
    try {
        
    } catch (error) {
        res.status(500).json({message:'Error transferring item'})
    }
}