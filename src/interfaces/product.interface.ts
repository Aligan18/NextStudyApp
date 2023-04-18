export interface IProductModel {
    _id: string
    categories: string[]
    tags: string[]
    title: string
    image: string
    description: string
    link: string
    price: number
    credit: number
    oldPrice: number
    characteristics: IProductCharacteristic[]
    advantages: string
    initialRating: number
    createdAt: Date
    updatedAt: Date
    __v: number
    html: string
    blog: IProductBlog
    companyId: string
    clicks: number
    reviews: ReviewModel[]
    reviewCount: number
    reviewAvg: number
  }
  
  export interface IProductCharacteristic {
    name: string
    value: string
  }
  
  export interface IProductBlog {
    text: string
    _id: string
  }
  
  export interface ReviewModel {
    _id: string
    name: string
    title: string
    description: string
    rating: number
    productId: string
    createdAt: Date
    updatedAt: Date
    __v: number
  }
  