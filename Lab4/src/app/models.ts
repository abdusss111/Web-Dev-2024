export class Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageLink: string;

  constructor(id: number, name: string, description: string, price: number, imageLink: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageLink = imageLink;
  }

}
