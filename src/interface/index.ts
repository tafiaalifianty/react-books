export interface IRating {
    rate: number,
    count: number
}

export interface IBook {
    id?: number,
    title: string,
    price: number,
    description?: string,
    category?: string,
    image: string,
    rating: IRating
}