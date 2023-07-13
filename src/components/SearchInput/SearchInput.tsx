import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchInput.module.scss";
import cn from "classnames";

import { ISearchProps } from "./SearchInput.props";
import { EButtonType } from "../Button/Button.props";
import { InputElement } from "../index";
import { useRouter } from "next/router";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useSearchContext } from "@/context/search.context";

export const SearchInput = ({
  className,
  children,
  ...props
}: ISearchProps) => {
  const route = useRouter();
  const { isFocused, setIsFocused } = useSearchContext();

  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(value);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
      setIsFocused(false);
    }
  }, [isFocused]);

  const goToSearch = () => {
    route.push({
      pathname: "/search",
      query: {
        value: value,
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, classes.wrapper)} {...props}>
      <InputElement
        className={cn({
          [classes.focused]: route.asPath === "/courses",
        })}
        ref={inputRef}
        handleKeyDown={handleKeyDown}
        value={value}
        setValue={setValue}
      >
        {children}
      </InputElement>

      <ButtonIcon
        icon="search"
        onClick={goToSearch}
        className={classes.button}
        appearance={EButtonType.PRIMARY}
      />
    </div>
  );
};
