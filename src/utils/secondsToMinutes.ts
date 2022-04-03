import { zeroLeft } from './zeroLeft';

export function secondsToMinutes(seconds: number): string {
  // função que busca os minutos
  const min = zeroLeft((seconds / 60) % 60);

  // função que busca os segundos
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
