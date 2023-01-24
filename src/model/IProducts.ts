export interface Products {
    products?: (ProductsEntity)[] | null;
    count: number;
}

export interface ProductsEntity {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}
  