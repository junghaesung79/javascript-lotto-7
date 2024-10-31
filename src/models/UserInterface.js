import { Console } from '@woowacourse/mission-utils';

class UserInterface {
  async processMoneyInput(query) {
    const money = await Console.readLineAsync(query);
    Validator.validateMoney(money);

    return Number(money);
  }

  async processNumbersInput(query) {
    const mainNumbers = await Console.readLineAsync(query);
    Validator.validateMainNumbers(mainNumbers);

    const bonusNumber = await Console.readLineAsync(query);
    Validator.validateBonusNumber(bonusNumber);

    const winningNumbersData = {
      mainNumbers,
      bonusNumber: Number(bonusNumber),
    };

    return winningNumbersData;
  }
}

export default UserInterface;
