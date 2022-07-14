import fs from 'fs/promises';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Plant from '../interface/plant';

const plantsFile = 'plantsData.json';

async function getPlants(): Promise<Plant[]> {
  const plantsRaw = await fs.readFile(plantsFile, { encoding: 'utf8' });
  const plants: Plant[] = JSON.parse(plantsRaw);
  return plants;
}

async function getPlantById(id: string): Promise<Plant | null> {
  const plantsRaw = await fs.readFile(plantsFile, { encoding: 'utf8' });
  const plants: Plant[] = JSON.parse(plantsRaw);

  const plantById = plants.find((plant) => plant.id === id);
  if (!plantById) return null;
  return plantById;
}

export default {
  getPlants,
  getPlantById,
};
