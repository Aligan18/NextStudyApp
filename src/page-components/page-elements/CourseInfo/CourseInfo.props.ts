import { IProductCharacteristic} from "@/interfaces/product.interface";

export interface ICourseInfoProps {
    isOpen: boolean;
    setIsOpen:(open: boolean) => void;
    title: string;
    image: string;
    categories:string[]
    price: number;
    description: string;
    characteristics:IProductCharacteristic[];
    advantages:string;
    initialRating:number
    isOpenComments?:boolean
    setIsOpenComments?:(open: boolean) => void;
}