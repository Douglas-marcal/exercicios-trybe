import { Request, Response } from 'express';
import plantService from '../service/plant';

async function getPlants(_request: Request, response: Response): Promise<void> {
  const plants = await plantService.getPlants();

  response.status(200).json(plants);
}

export default {
  getPlants,
};
