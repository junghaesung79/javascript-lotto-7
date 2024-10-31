import { Console } from '@woowacourse/mission-utils';

class LottoService {
  #money;
  #tickets;

  purchaseTickets(money) {
    this.#money = money;
    this.#tickets = new Tickets(money);
    return this.#tickets.getNumbersOfTickets();
  }

  requestAnalyze({ mainNumbers, bonusNumber }) {
    const winningDatas = this.#tickets.map((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchCount = lottoNumbers.reduce((acc, cur) => acc + Number(mainNumbers.includes(cur)), 0);
      const isBonusMatch = lottoNumbers.includes(bonusNumber);
      const ranking = getRanking(cur.matchCount);
      return {
        matchCount,
        isBonusMatch,
        ranking,
      };
    });

    const totalPrize = winningDatas.reduce((acc, cur) => {
      const prizeMoney = getPrizeMoney(cur.ranking);
      return acc + prizeMoney;
    }, 0);

    const earningRate = `${((totalPrize / this.#money) * 100).toFixed(1)}%`;

    return {
      winningDatas,
      earningRate,
    };
  }

  showTicketNumbers(data) {
    Console.print(data);
  }

  showReport(data) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${data.winningDatas.ranking}개`);
    Console.print(`4개 일치 (50,000원) - ${data.winningDatas.ranking}개`);
    Console.print(`5개 일치 (1,500,000원) - ${data.winningDatas.ranking}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${data.winningDatas.ranking}개`);
    Console.print(`6개 일치 (2,000,000,000원) - 0${data.winningDatas.ranking}개`);
    Console.print(`총 수익률은 ${data.earningRate}입니다.`);
  }
}

export default LottoService;
