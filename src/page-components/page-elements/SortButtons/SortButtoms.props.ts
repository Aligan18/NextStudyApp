



export  enum ESortButtonType {
    RATING ="RATING",
    PRICE ="PRICE",
    NONE="NONE",
}
export interface ISortButton {
    selecte: ESortButtonType;
    setSelecte: (type:ESortButtonType)=>void

}