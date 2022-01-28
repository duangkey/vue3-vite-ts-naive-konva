import axios from 'axios'

/**
 * 获取svg图片大小
 * @param url
 * @returns
 */
export async function getSvgNaturalSize(url: string) {
  const { data } = await axios.get(url)
  const viewbox = data.match(/viewBox="([^"]+)"/)[1]
  const items = viewbox.split(' ').map((item: number) => +item)
  return { width: items[2], height: items[3] }
}

export const getIamge = (name: string = '', format: string = 'png'): string => {
  const imageModules = import.meta.globEager('/public/images/*')
  const path = `/public/images/${name}.${format}`
  return imageModules[path].default
}
