import { getInput, getUser } from "./utilities";

async function userInput() {
  console.log(`
   Profitable investments (4 week range):
    1. IFAHR
    2. ACICO
    3. Digitus `);
  const input = await getInput();

  // Show current stock prices based on user choice
  switch (input.trim()) {
    case "1":
      console.log("Current IFAHR stock price: 1.2KD");
      break;
    case "2":
      console.log("Current ACICO stock price: 0.26KD");
      break;
    case "3":
      console.log("Current Digitus stock price: 0.68KD");
      break;
    default:
      console.log("Invalid choice. Please select 1, 2, or 3.");
  }
}
userInput();
