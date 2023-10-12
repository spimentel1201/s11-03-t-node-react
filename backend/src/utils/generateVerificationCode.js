export function generateVerificationCode() {
  // Genera un número aleatorio de 4 dígitos entre 1000 y 9999
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
