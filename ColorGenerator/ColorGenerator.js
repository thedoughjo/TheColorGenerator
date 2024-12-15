function getRandomColorHEX() {
    const hex = Math.floor(Math.random() * 16777216).toString(16); // Generate a random number up to 0xFFFFFF
    return `#${hex.padStart(6, '0')}`; // Ensure the result is always 6 digits
  }
  
  // Example usage
  console.log(getRandomColorHEX());
  