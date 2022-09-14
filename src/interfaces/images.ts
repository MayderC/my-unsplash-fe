export interface ImageResponse {
  _id: string
  name: string
  url: string
  createdAt: string
  updatedAt: string

}


export interface ImageRequest {
  name: string
  url : string
}