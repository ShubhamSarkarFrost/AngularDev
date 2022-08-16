export class Receipe {
  public name: string;
  public description: string;
  public imagesPath: string;

  constructor(name:string, description:string, imagePath:string) {
   this.name = name;
   this.description = description;
   this.imagesPath = imagePath;
  }
}
