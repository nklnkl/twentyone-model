import { Card } from './card';

export { IHand, Hand };

interface IHand {
  cards: Array<Card>;
}

class Hand implements IHand {

  public cards: Array<Card>;

  constructor (cards?: Array<Card>) {
    if (cards)
      this.cards = cards;
    else
      this.cards = new Array<Card>();
  }

  public add (card: Card) {
    this.cards.push(card);
  }

  public getTotalValue (): number {

    let total: number = 0;

    this.cards.forEach((card: Card) => {

      // If the card is an ace.
      if (card.value == 1) {

        // If the hand total is less than 11, add 11.
        if (total < 11)
          total += 11;
        // Else just add 1.
        else
          total += 1;

      }

      else
        total += card.value;

    });

    return total;
  }

  public canSplit(): boolean {
    // If the hand only has two cards and they are equal value.
    if (this.cards.length == 2 && this.cards[0].value == this.cards[1].value) {
      return true;
    }
    else
      return false;
  }

  public split (): Array<Hand> {
    let hands: Array<Hand> = new Array<Hand>();

    hands.push(new Hand());
    hands[0].add(this.cards[1]);
    this.cards.pop();
    
    hands.push(new Hand());
    hands[1].add(this.cards[0]);
    this.cards.pop();

    return hands;
  }


}