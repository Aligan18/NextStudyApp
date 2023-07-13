import { IMenuContext, MenuContextProvider } from "@/context/menu.context";
import { SearchProvider } from "@/context/search.context";
import { Layout } from "@/layout";

import { FunctionComponent } from "react";

export const withLayout = <T extends Record<string, unknown> & IMenuContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <MenuContextProvider
        menu={props.menu}
        firstCategory={props.firstCategory}
      >
        <SearchProvider isFocused={false} setIsFocused={() => {}}>
          <Layout>
            <Component {...props} />
          </Layout>
        </SearchProvider>
      </MenuContextProvider>
    );
  };
};
