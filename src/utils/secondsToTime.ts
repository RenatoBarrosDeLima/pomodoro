import { zeroLeft } from './zeroLeft';

export function secondsToTime(seconds: number): string {
  // função que busca as horas
  const hours = zeroLeft((seconds / 3600) % 60);
  // função que busca os minutos
  const min = zeroLeft((seconds / 60) % 60);
  // função que busca os segundos
  const sec = zeroLeft((seconds % 60) % 60);
  return `${hours}:${min}:${sec}`;
}
