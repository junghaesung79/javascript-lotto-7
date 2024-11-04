import { MESSAGES, PRIZE_MESSAGES } from '../constants/index.js';
import { calculateEarningsRate, calculateTicketCount, generateLottoNumbers } from '../utils/LottoUtils.js';
import { InputHandler, Printer } from '../io/index.js';
import { Lotto, LottoChecker } from '../models/index.js';
import { InputStore } from './index.js';

class LottoGame {
  #tickets;

  constructor() {
    this.console = new InputHandler();
    this.store = new InputStore();
    this.lottoChecker = new LottoChecker();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(MESSAGES.moneyInput);

    this.store.setMoney(money);

    const ticketCount = calculateTicketCount(money);
    this.#issueTickets(ticketCount);

    Printer.print(MESSAGES.howManyBought(ticketCount));
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(MESSAGES.mainNumbers);
    const bonusNumber = await this.console.processBonusInput(MESSAGES.bonusNumber);
    this.store.setMainNumbers(mainNumbers);
    this.store.setBonusNumber(bonusNumber);
  }

  presentResult() {
    const lottoResults = this.#tickets.map((lotto) => this.lottoChecker.checkLotto(lotto));
    const earningsRate = this.#calculateLottoEarningsRate(lottoResults);

    this.#printStatistics(lottoResults);
    Printer.print(MESSAGES.earningsRateIs(earningsRate));
  }

  #issueTickets(ticketCount) {
    this.#tickets = Array.from({ length: ticketCount }, () => {
      const numbers = generateLottoNumbers();
      return new Lotto(numbers);
    });
  }

  #printStatistics(lottoResults) {
    const rankCount = Object.fromEntries(Object.keys(RANKS).map((rank) => [rank, 0]));
    lottoResults.forEach((result) => (rankCount[result.getRanking()] += 1));

    Printer.print(MESSAGES.prizeStatistics);

    for (const [rankingName, count] of Object.entries(rankCount)) {
      Printer.print(PRIZE_MESSAGES.howManyMatchAndCount(rankingName, count));
    }
  }

  #calculateLottoEarningsRate(lottoResults) {
    const totalPrizeMoney = lottoResults.reduce((acc, cur) => acc + cur.getPrizeMoney(), 0);
    const investmentMoney = this.store.getMoney();
    return calculateEarningsRate(totalPrizeMoney, investmentMoney);
  }
}

export default LottoGame;
