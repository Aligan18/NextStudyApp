
import { IProductModel } from "@/interfaces/product.interface";




export  enum ESortButtonType {
    RATING ="RATING",
    PRICE ="PRICE",
    NONE="NONE",
}
export interface ISortButton {
    sortedProducts: IProductModel[];
    setSortedProducts: (type:IProductModel[])=>void
     product:IProductModel[]
} 