export class Utils {
  public static getRandomNumber(maxNumber: number): number {
    return Math.round(Math.random() * maxNumber);
  }

  public static getImgSrc(): string {
    let number = this.getRandomNumber(6);
    return `assets/img/agencia-${number}.jpg`;
  }
}
