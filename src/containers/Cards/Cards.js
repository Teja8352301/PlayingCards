import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Card from "../../components/Card/Card";
import classes from "./Cards.module.css";
import { Spinner } from "../../components/Spinner/Spinner";
import { Button } from "../../components/Button/Button";
import OpenCard from "../../components/OpenCard/OpenCard";

let suits = ["spade", "club", "heart", "diamond"];
let rank = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let cardsArray = [];
suits.forEach(suiting => {
  rank.forEach(ranking => {
    cardsArray.push({ rank: ranking, suits: suiting });
  });
});
export const Cards = () => {
  const [elementsState, setElementsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drawedCard, setDrawedCard] = useState([]);
  useEffect(() => {
    setDrawedCard([]);
    setElementsState(cardsArray);
    setIsLoading(false);
    return () => {
      setIsLoading(true);
    };
  }, []);

  let cards;
  if (elementsState.length > 0) {
    cards = elementsState.map(card => {
      return <Card rank={card.rank} suits={card.suits} key={uuid()} />;
    });
  }
  const drawCards = () => {
    if (elementsState.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        for (var i = 0; i < 5; i++) {
          drawedCard.push(
            elementsState.splice(
              parseInt(Math.random() * elementsState.length),
              1
            )
          );
        }
        setDrawedCard([...drawedCard]);
      }, 200);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  };
  let drawedCards = [];
  if (drawedCard.length) {
    drawedCards = drawedCard.map(card => {
      if (card[0]) {
        return (
          <OpenCard
            rank={card[0]["rank"]}
            suits={card[0]["suits"]}
            key={uuid()}
          />
        );
      }
    });
  }

  return (
    <div>
      {isLoading ? (
        <div
          className={classes.Spinner}
          style={{ height: window.innerHeight, width: window.innerWidth }}
        >
          <Spinner />
        </div>
      ) : (
        <div>
          <div className={classes.Cards}>{cards}</div>
          <div> </div>
          {elementsState.length ? (
            <div className={classes.Button}>
              <Button clicked={drawCards}>Draw Cards</Button>
            </div>
          ) : null}

          <div className={classes.DrawedCards}>
            {drawedCard.length ? drawedCards : null}
          </div>
        </div>
      )}
    </div>
  );
};
