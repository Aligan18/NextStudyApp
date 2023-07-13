import React from "react";
import classes from "./HomePageComponent.module.scss";
import ManSvg from "../../assets/Man.svg";
import Woman from "../../assets/Woman.svg";
import { Button } from "@/components";
import { EButtonType } from "@/components/Button/Button.props";
import { useSearchContext } from "@/context/search.context";

const HomePageComponent = () => {
  const { setIsFocused } = useSearchContext();

  return (
    <div className={classes.homePage}>
      <div className={classes.left}>
        <ManSvg className={classes.svg} />
      </div>
      <div className={classes.mid}>
        <div className={classes.text_wrapper}>
          <div className={classes.left_text}>
            <h1>The</h1> <h1 className={classes.primary}>Best</h1>
            <h1>courses</h1>
          </div>
          <div className={classes.right_text}>
            <h1>in</h1> <h1 className={classes.primary}>One</h1> <h1>place</h1>
          </div>
        </div>

        <Button
          onClick={() => setIsFocused(true)}
          className={classes.button}
          appearance={EButtonType.PRIMARY}
        >
          Начать
        </Button>
      </div>
      <div className={classes.right}>
        <Woman className={classes.svg} />
      </div>
    </div>
  );
};

export default HomePageComponent;
