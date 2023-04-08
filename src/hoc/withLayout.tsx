import Layout from "@/layout/Layout"
import { FunctionComponent } from "react"


export const withLayout = <T extends Record <string,unknown>> (Component : FunctionComponent<T>) =>{

    return function withLayoutComponent (props:T) {
        return <Layout>
                <Component {...props} />
        </Layout>
    }
}