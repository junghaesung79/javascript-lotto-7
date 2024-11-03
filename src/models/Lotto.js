import { Printer } from '../io/index.js';
import { LottoValidator } from '../services/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  #printNumbers() {
    Printer.print(`[${this.#numbers.join(', ')}]`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;