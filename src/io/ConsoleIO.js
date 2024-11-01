import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../services/index.js';
import { tryAgain } from '../utils/validateUtils.js';

class ConsoleIO {
  constructor() {
    this.validator = new Validator();
  }

  async processMoneyInput(query) {
    return await tryAgain(async () => {
      const moneyString = await this.readInput(query);
      this.validator.validateMoneyString(moneyString);
      return Number(moneyString);
    });
  }

  async processMainInput(query) {
    return await tryAgain(async () => {
      const mainNumberString = await this.readInput(query);
      const mainNumbers = mainNumberString.split(',');
      return mainNumbers;
    });
  }

  async processBonusInput(query) {
    return await tryAgain(async () => {
      const BonusNumberString = await this.readInput(query);
      return Number(BonusNumberString);
    });
  }

  async readInput(query) {
    ConsoleIO.printNewline();
    return await Console.readLineAsync(query);
  }

  static print(query) {
    Console.print(query);
  }

  static printNewline() {
    Console.print('');
  }
}

export default ConsoleIO;
