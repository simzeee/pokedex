export function cleanInput(input: string): string[] {
  input = input.trim();
  let splitString = input.split(" ");
  splitString.forEach((word, index) => {
    splitString[index] = word.toLowerCase();
  });
  splitString = splitString.filter((word) => word.length > 0);
  return splitString;
}
