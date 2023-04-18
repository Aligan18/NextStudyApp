export interface IMenuModel{
    _id: {
      secondCategory: string
    }
    pages: IPageItem[]
  }
  
  interface IPageItem {
    alias: string
    title: string
    _id: string
    category: string
  }