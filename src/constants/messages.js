export const MESSAGES = Object.freeze({
  moneyInput: '구입금액을 입력해 주세요.\n',
  mainNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  winningStatistics: '\n당첨 통계\n---',
  howManyBought: (count) => `${count}개를 구매했습니다.`,
  earningsRateIs: (earningsRate) => `총 수익률은 ${earningsRate}%입니다.`,
});

export const PRIZE_MESSAGES = Object.freeze({
  place5: '3개 일치 (5,000원) - ',
  place4: '4개 일치 (50,000원) - ',
  place3: '5개 일치 (1,500,000원) - ',
  place2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  place1: '6개 일치 (2,000,000,000원) - ',
  howManyMatchAndCount: (rankingName, count) => `${PRIZE_MESSAGES[rankingName]}${count}개`,
});
