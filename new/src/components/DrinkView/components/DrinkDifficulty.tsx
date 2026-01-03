import type { Difficulty } from '@/types/drink';

const DrinkDifficulty = ({ difficulty }: { difficulty?: Difficulty }) => {
  const options = {
    BEGINNER: 'Iniciante',
    EASY: 'Fácil',
    MEDIUM: 'Médio',
    HARD: 'Difícil',
    VERY_HARD: 'Muito difícil',
  };
  return difficulty ? <>{options[difficulty]}</> : null;
};

export default DrinkDifficulty;
