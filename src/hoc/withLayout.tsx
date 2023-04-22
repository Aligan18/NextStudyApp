import { IMenuContext, MenuContextProvider } from "@/context/menu.context"
import Layout from "@/layout/Layout"
import { FunctionComponent } from "react"


export const withLayout = <T extends Record <string,unknown>& IMenuContext> (Component : FunctionComponent<T>) =>{

    return function withLayoutComponent (props:T) {
        return <MenuContextProvider menu={props.menu} firstCategory={props.firstCategory} >
            <Layout>
                    <Component {...props} />
            </Layout>
        </MenuContextProvider>
    }
}