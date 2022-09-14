import type { ImageRequest, ImageResponse } from "@/interfaces/images"
const BASE_URL = import.meta.env.BASE_URL

export const getImages = async () : Promise<ImageResponse[]> => {
  const res = await fetch('http://localhost:3000/api/image')
  return await res.json()
}

export const saveImage = async (image: ImageRequest): Promise<ImageResponse> => {

  const res = await  fetch('http://localhost:3000/api/image', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json',
    },
    body: JSON.stringify(image)
  })

  return await res.json()
}

export const deleteImage = async (id: string) : Promise<void> => {

   await  fetch('http://localhost:3000/api/image/' + id, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json',
    },
  })

  return 
}