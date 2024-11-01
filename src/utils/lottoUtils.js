import { Random } from '@woowacourse/mission-utils';
import { COUNT_OF_LOTTO_BALLS, MAX_BALL_NUMBER, MIN_BALL_NUMBER } from '../constants/lottoConfig';

export const generateNumberInRange = ({ start, end, count = 1 }) => {
  return Random.pickUniqueNumbersInRange(start, end, count);
};

export const generateLottoNumbers = () => {
  const randomConfig = {
    start: MAX_BALL_NUMBER,
    end: MIN_BALL_NUMBER,
    count: COUNT_OF_LOTTO_BALLS,
  };

  const sortAscending = (a, b) => a - b;
  return generateNumberInRange(randomConfig).sort(sortAscending);
};