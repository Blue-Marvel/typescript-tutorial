export interface Guitar {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const guitarsLists: Guitar[] = [
  {
    id: 1,
    name: "Gibson Les Paul Standard",
    description: "Gibson Les Paul Standard",
    price: 2000,
    image: "gibson-les-paul-standard.png",
    category: "electric",
  },
  {
    id: 2,
    name: "Fender Telecaster",
    description: "Fender Telecaster",
    price: 3000,
    image: "fender-telecaster.png",
    category: "electric",
  },
  {
    id: 3,
    name: "Fender Jazzmaster",
    description: "Fender Jazzmaster",
    price: 4000,
    image: "fender-jazzmaster.png",
    category: "electric",
  },
  {
    id: 4,
    name: "Gibson SG Standard",
    description: "Gibson SG Standard",
    price: 5000,
    image: "gibson-sg-standard.png",
    category: "acoustic",
  },
  {
    id: 5,
    name: "Fender Stratocaster",
    description: "Fender Stratocaster",
    price: 6000,
    image: "fender-stratocaster.png",
    category: "acoustic",
  },
  {
    id: 6,
    name: "Gibson SG Special",
    description: "Gibson SG Special",
    price: 7000,
    image: "gibson-sg-special.png",
    category: "acoustic",
  },
];

export function getGuitar(): Promise<Guitar[]> {
  return Promise.resolve(guitarsLists);
}

export function getGuitarbyId(id: number): Promise<Guitar | undefined> {
  return Promise.resolve(guitarsLists.find((guitar) => guitar.id === id));
}

export function guitarByCategory(category: string): Promise<Guitar[]> {
  return Promise.resolve(
    guitarsLists.filter((guitar) => guitar.category === category)
  );
}
