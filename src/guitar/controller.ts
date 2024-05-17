import {
  getGuitar,
  getGuitarbyId,
  guitarByCategory,
  Guitar,
} from "../guitar/model";

export async function getGuitarAll(): Promise<Guitar[]> {
  return await getGuitar();
}

export async function getGuitarById(id: number): Promise<Guitar> {
  return (await getGuitarbyId(id)) as Guitar;
}

export async function getGuitarByCategory(category: string): Promise<Guitar[]> {
  return await guitarByCategory(category);
}
