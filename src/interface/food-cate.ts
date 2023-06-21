export interface FoodCate {
  id: number,
  name: string,
  description: null | string,
  status: boolean,
  deleted: boolean,
  updated_at: string,
  created_at: string,
  branch: any
}
export interface IFood {
  id: number,
  name: string,
  description: string,
  status: boolean,
  deleted: boolean,
  updated_at: string,
  created_at: string,
  media?: { original_url: string, id:number },
  branch: any;
  food_cate?: FoodCate
}