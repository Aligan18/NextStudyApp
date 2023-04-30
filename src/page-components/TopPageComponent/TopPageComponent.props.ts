import { ETopLevelCategory, ITopPageModel } from "@/interfaces/page.interface"
import { IProductModel } from "@/interfaces/product.interface"

export interface ITopPageComponentProps   {
    firstCategory:ETopLevelCategory
    product:IProductModel[]
    page: ITopPageModel
}