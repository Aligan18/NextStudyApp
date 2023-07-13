import React, { ForwardedRef, forwardRef } from "react";
import classes from "./InputElement.module.scss";
import cn from "classnames";
import { IInputElement } from "./InputElement.props";

export const InputElement = forwardRef(
  (
    {
      handleKeyDown,
      children,
      setValue,
      value,
      className,
      error,
      ...props
    }: IInputElement,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cn(classes.wrapper)}>
        <div>
          {value !== undefined && setValue !== undefined ? (
            <input
              ref={ref}
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown && handleKeyDown(event)
              }
              className={cn(className, classes.input)}
              placeholder={typeof children === "string" ? children : undefined}
              {...props}
            />
          ) : (
            <input
              ref={ref}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown && handleKeyDown(event)
              }
              className={classes.input}
              placeholder={typeof children === "string" ? children : undefined}
              {...props}
            />
          )}
        </div>

        {error && <span className={classes.error}>{error.message}</span>}
      </div>
    );
  }
);
