export class Utils {
  public static getRandomNumber(maxNumber: number) {
    return Math.round(Math.random() * maxNumber);
  }

  public static getImgSrc() {
    let number = this.getRandomNumber(6);
    return `assets/img/agencia-${number}.jpg`;
  }
}
