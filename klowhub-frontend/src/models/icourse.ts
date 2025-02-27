export interface Course{
    id: number,
    title: string,
    description: string,
    price: number,
    categoryId: number,
    thumbnail: string,
    sellerId: number,
    createdAt: string,
    updatedAt: string,
    seller: {
      id: number,
      name: string,
      lastName: string,
      avatarUrl: string
    }
}