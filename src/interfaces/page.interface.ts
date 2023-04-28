export enum ETopLevelCategory {
    Courses= 0,
    Services =1,
    Books =2,
    Products=3
}


export interface ITopPageModel {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: ETopLevelCategory
    advantages: ITopPageAdvantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: HhData
    qas: any[]
    addresses: any[]
    categoryOn: string
    blog: ITopPageBlog
    sravnikus: ITopPageSravnikus
    learningclub: ITopPageLearningClub
  }
  
  export interface ITopPageAdvantage {
    title: string
    description: string
    _id: string
  }
  
  export interface HhData {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
  }
  
  export interface ITopPageBlog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
  }
  
  export interface ITopPageSravnikus {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
  }
  
  export interface ITopPageLearningClub {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
  }
  