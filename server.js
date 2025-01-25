// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }
*/

// Define the GET endpoint for /assistant/greet
app.get('/assistant/greet', (req, res) => {
  // Get the 'name' query parameter or default to 'Guest'
  const name = req.query.name || "Guest";

  // Define messages for specific days
  const dayMessages = {
    Monday: "Happy Monday! Start your week with energy!",
    Friday: "It's Friday! The weekend is near!",
  };

  // Get the current day of the week
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });

  // Provide a default message for other days
  const cheerfulMessage = dayMessages[currentDay] || "Have a wonderful day!";

  // Send the JSON response
  res.json({
    welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
    dayMessage: cheerfulMessage,
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
})

