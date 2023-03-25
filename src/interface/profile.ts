export interface Profile {
  id: number,
  telephone: number,
  email: string,
  fullname: string,
  status: boolean,
  description: string,
  sex: boolean,
  full_address: string,
  ccid: number,
  deleted: boolean,
  created_at: string,
  updated_at: string,
  branch?: any,
  media?: {
    original_url: string
  }
}