import type { ImageRequest, ImageResponse } from "@/interfaces/images"
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getImages = async () : Promise<ImageResponse[]> => {
  console.log(BASE_URL)
  const res = await fetch(BASE_URL)
  return await res.json()
}

export const saveImage = async (image: ImageRequest): Promise<ImageResponse> => {

  const res = await  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json',
    },
    body: JSON.stringify(image)
  })

  return await res.json()
}

export const deleteImage = async (id: string) : Promise<void> => {

   await  fetch(BASE_URL + id, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json',
    },
  })

  return 
}