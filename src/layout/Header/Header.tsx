import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./Header.module.scss";
import { SideBar } from "../SideBar/SideBar";
import { IHomeProps } from "./Header.props";
import cn from "classnames";
import { SearchInput } from "@/components";
import { useRouter } from "next/router";
import { VarMobileMenu } from "./Header.animate";
import { useSearchContext } from "@/context/search.context";

export const Header = ({ className, ...props }: IHomeProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const route = useRouter();
  const { isFocused } = useSearchContext();
  useEffect(() => {
    if (isFocused) {
      setMenuOpen(true);
    }
  }, [isFocused]);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  return (
    <div className={cn(classes.wrapper, className)} {...props}>
      <SearchInput>Поиск...</SearchInput>
      <ButtonIcon
        className={classes.open_button}
        appearance="ghost"
        icon="menu"
        onClick={() => setMenuOpen(true)}
      />
      {menuOpen && (
        <motion.div
          variants={VarMobileMenu}
          initial={"hidden"}
          animate={menuOpen ? "visible" : "hidden"}
          className={classes.mobile_sidebar}
        >
          <SideBar />
          <ButtonIcon
            className={classes.close_button}
            appearance="ghost"
            icon="cross"
            onClick={() => setMenuOpen(false)}
          />
        </motion.div>
      )}
    </div>
  );
};
