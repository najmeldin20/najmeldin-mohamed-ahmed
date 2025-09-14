
export enum Category {
  NEWS = 'news',
  INTERNATIONAL = 'international',
  ISLAMIC = 'islamic',
  KIDS = 'kids',
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  streamUrl: string;
  category: Category;
  genre: string[];
}

export interface Section {
    id: Category;
    title: string;
}