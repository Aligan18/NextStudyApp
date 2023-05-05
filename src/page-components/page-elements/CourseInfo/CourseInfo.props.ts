import { IProductCharacteristic} from "@/interfaces/product.interface";

export interface ICourseInfoProps {
    title: string;
    image: string;
    categories:string[]
    price: number;
    description: string;
    characteristics:IProductCharacteristic[];
    advantages:string;
    initialRating:number
}