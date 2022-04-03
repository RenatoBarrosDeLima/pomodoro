// função que recebe um númeor, arredonda usando a função floor,
// e se o número for menor que 10 adiciona os ZEROS à esquerda e informa o número de cadas
const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');

export { zeroLeft };
