const apiKey = process.env.REACT_APP_GIPHY_API_KEY
const baseUrl = 'https://api.giphy.com/v1'

export type SearchParams = {
    query: string,
    limit: number,
    offset: number,
    rating: 'g' | 'pg' | 'pg-13' | 'r'
}

export type SearchResponse = {
    data: Array<{
        id: string,
        title: string,
        images: {
            downsized_medium: {
                url: string
            }
        }
    }>
}

export type GiphyImage = {
    id: string,
    title: string,
    url: string
}

export const useGiphy = () => {
    const search = async ({query, limit, offset, rating}: SearchParams): Promise<Array<GiphyImage>> => {
        const response = (await fetch(`${baseUrl}/stickers/search?q=${query}&limit=${Math.round(limit)}&offset=${Math.round(offset)}&rating=${rating}&api_key=${apiKey}`).then(res => res.json())) as SearchResponse
        console.log(response)
        return response.data.map(item => ({ id: item.id, title: item.title, url: item.images.downsized_medium.url }));
    }

    return { search }
}