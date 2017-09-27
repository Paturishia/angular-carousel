export class Slide {
  public title: string;
  public imagePath: string;
  public description: string;

  constructor(title: string, imagePath: string, description: string) {
    this.title = title;
    this.imagePath = imagePath;
    this.description = description;
  }
}