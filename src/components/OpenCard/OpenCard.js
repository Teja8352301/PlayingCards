import React from "react";
import classes from "./OpenCard.module.css";
import Club from "../../assests/Club.png";
import Diamond from "../../assests/Diamond.png";
import Heart from "../../assests/Heart.png";
import Spade from "../../assests/Spade.png";

const OpenCard = props => {
  let suit;
  switch (props.suits) {
    case "club": {
      suit = Club;
      break;
    }
    case "spade": {
      suit = Spade;
      break;
    }
    case "diamond": {
      suit = Diamond;
      break;
    }
    default: {
      suit = Heart;
      break;
    }
  }

  return (
    <div className={classes.FlipCard}>
      <div className={classes.FlipCardInner}>
        <div className={classes.FlipCardFront}>
          <span className={classes.Rank1}>
            <p>{props.rank}</p>
          </span>
          <div className={classes.CardInner}>
            <img src={suit} alt="club" className={classes.Image} />
          </div>
          <span
            className={classes.Rank2}
            style={{ transform: "rotate(180deg)" }}
          >
            <p>{props.rank}</p>
          </span>
        </div>
        <div className={classes.FlipCardBack}>
          <div className={classes.RangoliMainWrapper}>
            <div className={classes.RangoliWrapper}>
              <div className={classes.Rangoli}></div>
              <div className={classes.InsideDesign}></div>
              <span className={classes.RangoliDesign}></span>
              <span className={classes.RangoliDesignMediumRight}></span>
              <span className={classes.RangoliDesignMediumLeft}></span>
              <span className={classes.RangoliDesignLargeRight}></span>
              <span className={classes.RangoliDesignLargeLeft}></span>
            </div>
            <div className={classes.RangoliWrapper}>
              <div className={classes.Rangoli}></div>
              <div className={classes.InsideDesign}></div>
              <span className={classes.RangoliDesign}></span>
              <span className={classes.RangoliDesignMediumRight}></span>
              <span className={classes.RangoliDesignMediumLeft}></span>
              <span className={classes.RangoliDesignLargeRight}></span>
              <span className={classes.RangoliDesignLargeLeft}></span>
            </div>
            <div className={classes.RangoliWrapper}>
              <div className={classes.Rangoli}></div>
              <div className={classes.InsideDesign}></div>
              <span className={classes.RangoliDesign}></span>
              <span className={classes.RangoliDesignMediumRight}></span>
              <span className={classes.RangoliDesignMediumLeft}></span>
              <span className={classes.RangoliDesignLargeRight}></span>
              <span className={classes.RangoliDesignLargeLeft}></span>
            </div>
            <div className={classes.RangoliWrapper}>
              <div className={classes.Rangoli}></div>
              <div className={classes.InsideDesign}></div>
              <span className={classes.RangoliDesign}></span>
              <span className={classes.RangoliDesignMediumRight}></span>
              <span className={classes.RangoliDesignMediumLeft}></span>
              <span className={classes.RangoliDesignLargeRight}></span>
              <span className={classes.RangoliDesignLargeLeft}></span>
            </div>
            <div className={classes.RangoliWrapper}>
              <div className={classes.Rangoli}></div>
              <div className={classes.InsideDesign}></div>
              <span className={classes.RangoliDesign}></span>
              <span className={classes.RangoliDesignMediumRight}></span>
              <span className={classes.RangoliDesignMediumLeft}></span>
              <span className={classes.RangoliDesignLargeRight}></span>
              <span className={classes.RangoliDesignLargeLeft}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
