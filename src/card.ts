export { ICard, Card };

interface ICard {
  index: number;
  suit: number;
  value: number;
}

class Card implements ICard {
  
  public index: number;
  public suit: number;
  public value: number;

  constructor (index: number, suit: number, value: number) {
    this.index = index;
    this.suit = suit;
    this.value = value;
  }
  
}