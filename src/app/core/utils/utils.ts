export class Utils {
  static getRandomNumber(maxNumber: number) {
    return Math.round(Math.random() * maxNumber);
  }

  static getImgSrc() {
    let number = this.getRandomNumber(6);
    return `assets/img/agencia-${number}.jpg`;
  }
}
