import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

export function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
}

export function useAxios(URL) {
  const [cards, setCards] = useState([]);
  const addCard = async (name = "") => {
    const response = await axios.get(URL + name);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  return [cards, addCard];
}
