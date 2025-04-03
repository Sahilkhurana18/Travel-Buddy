import { GoogleGenerativeAI } from "@google/generative-ai";


  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a JSON-formatted travel plan for a couple visiting Las Vegas on a cheap budget for 3 days. I've focused on free or low-cost activities and budget-friendly hotel options.  I will provide realistic pricing based on research but remember that prices fluctuate, especially in Las Vegas. Always check current prices before booking.\n\n```json\n{\n  \"tripName\": \"Las Vegas on a Budget: 3-Day Couple's Getaway\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"location\": \"Las Vegas, Nevada\",\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"averageNightly\": 40\n      },\n      \"hotelImageUrl\": \"https://www.casino.org/news/wp-content/uploads/2023/07/circa-las-vegas-header.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1264,\n        \"longitude\": -115.1681\n      },\n      \"rating\": 3.5,\n      \"description\": \"Known for its affordability, Circus Circus offers basic rooms, a casino, and the Adventuredome Theme Park. A good option if you want to be on the Strip without breaking the bank.\",\n       \"amenities\": [\"Free Parking\", \"Pool\", \"Casino\", \"Adventuredome Theme Park\", \"Free Circus Shows\"]\n    },\n    {\n      \"hotelName\": \"Stratosphere Casino, Hotel & Tower\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"averageNightly\": 45\n      },\n      \"hotelImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/8c/2b/3d/the-strat-hotel-casino.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1472,\n        \"longitude\": -115.1575\n      },\n      \"rating\": 3.7,\n      \"description\": \"Located at the north end of the Strip, the Stratosphere offers incredible views from its tower. Rooms are generally affordable, but consider transportation costs to reach other parts of the Strip.\",\n       \"amenities\": [\"Tower Access\", \"Pool\", \"Casino\", \"Thrill Rides\", \"Restaurants\"]\n    },\n    {\n      \"hotelName\": \"Sahara Las Vegas\",\n      \"hotelAddress\": \"2535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"averageNightly\": 60\n      },\n      \"hotelImageUrl\": \"https://images.trvl-media.com/lodging/1000000/530000/527800/527795/52361496_y.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1451,\n        \"longitude\": -115.1554\n      },\n      \"rating\": 4.0,\n      \"description\": \"A more modern option further up the Strip.  It offers a good balance of price and amenities.\",\n      \"amenities\": [\"Pool\", \"Casino\", \"Restaurants\", \"Monorail Access\"]\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Central Strip and Free Attractions\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A stunning indoor garden that changes seasonally. It's free to enter and offers beautiful photo opportunities.\",\n          \"placeImageUrl\": \"https://www.wheretraveler.com/sites/default/files/images/BellagioConservatory_Main_Web_0.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1743\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.8,\n          \"bestTimeToVisit\": \"Morning (less crowded)\",\n          \"travelTimeFromHotel\": \"15-30 minutes (depending on hotel location and transportation - bus, walk)\"\n        },\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Iconic water show set to music. Free to watch and runs frequently throughout the day and evening.\",\n          \"placeImageUrl\": \"https://www.planetware.com/wpimages/2019/11/las-vegas-best-attractions-bellagio-fountains.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1129,\n            \"longitude\": -115.1741\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.9,\n          \"bestTimeToVisit\": \"Evening (for the lights and ambiance)\",\n          \"travelTimeFromHotel\": \"15-30 minutes (depending on hotel location and transportation - bus, walk)\"\n        },\n        {\n          \"placeName\": \"Walk the Las Vegas Strip\",\n          \"placeDetails\": \"Simply walking the Strip is an experience in itself. Enjoy the sights, sounds, and free attractions like the Volcano at the Mirage (check showtimes).\",\n          \"placeImageUrl\": \"https://media.cntraveler.com/photos/5d3f91d3946c260008a8956a/16:9/w_2560%2Cc_limit/Las-Vegas_GettyImages-996603880.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1728\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.5,\n          \"bestTimeToVisit\": \"Evening (for the full Vegas experience)\",\n          \"travelTimeFromHotel\": \"Varies (depending on how much you walk)\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Downtown Las Vegas's pedestrian mall featuring a light show on a giant LED canopy. Free to enter, but consider the cost of transportation.\",\n          \"placeImageUrl\": \"https://vegasexperience.com/wp-content/uploads/2023/06/fremont-street-experience-1024x683.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1700,\n            \"longitude\": -115.1421\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.6,\n          \"bestTimeToVisit\": \"Evening (for the Viva Vision light show)\",\n          \"travelTimeFromHotel\": \"30-45 minutes (bus or ride-sharing)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Exploring South Strip and some paid attraction\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"An iconic Las Vegas landmark. Free to visit and take photos.\",\n          \"placeImageUrl\": \"https://www.lasvegasadvisor.com/wp-content/uploads/2014/06/las-vegas-sign.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0828,\n            \"longitude\": -115.1724\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.7,\n          \"bestTimeToVisit\": \"Morning (less crowded, better light)\",\n          \"travelTimeFromHotel\": \"15-30 minutes (bus or ride-sharing)\"\n        },\n         {\n          \"placeName\": \"M&M's World\",\n          \"placeDetails\": \"A multi-story retail store dedicated to M&M's candies. Free to browse and take photos, but you'll likely be tempted to buy some candy.\",\n          \"placeImageUrl\": \"https://images.squarespace-cdn.com/content/v1/5a761d706f4ca32717061e11/1547666191236-B4X0C49C764V9QO4YEY7/M%26Ms+Store+-+Las+Vegas\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1098,\n            \"longitude\": -115.1749\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.3,\n          \"bestTimeToVisit\": \"Afternoon\",\n          \"travelTimeFromHotel\": \"15-30 minutes (bus or ride-sharing)\"\n        },\n        {\n          \"placeName\": \"Eiffel Tower Viewing Deck\",\n          \"placeDetails\": \"View of the Las Vegas Strip from the replica of the Eiffel Tower. Tickets can be purchased online in advance for a cheaper price.\",\n          \"placeImageUrl\": \"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/5b/37.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1122,\n            \"longitude\": -115.1719\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 27\n          },\n          \"rating\": 4.5,\n          \"bestTimeToVisit\": \"Evening (for the lights)\",\n          \"travelTimeFromHotel\": \"15-30 minutes (bus or ride-sharing)\"\n        },\n                {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Get panoramic views of the Las Vegas Strip and surrounding area from the High Roller. The cabins have comfortable seating and climate control.\",\n          \"placeImageUrl\": \"https://caesars.com/content/dam/clv/Things%20to%20Do/high-roller/2023_high_roller_attraction_desktop.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1161,\n            \"longitude\": -115.1648\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 37\n          },\n          \"rating\": 4.6,\n          \"bestTimeToVisit\": \"Evening (for the lights)\",\n          \"travelTimeFromHotel\": \"15-30 minutes (bus or ride-sharing)\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Nature Escape and Relaxation\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A beautiful natural area with hiking trails and scenic drives.  Entrance fee required per vehicle. Pack water and snacks.\",\n          \"placeImageUrl\": \"https://www.blm.gov/sites/default/files/styles/1600x900/public/images/gallery/red-rock-canyon-scenic-loop-drive-4867.jpg?itok=D4fW3Rj_\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1458,\n            \"longitude\": -115.4158\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 15\n          },\n          \"rating\": 4.8,\n          \"bestTimeToVisit\": \"Morning (cooler temperatures)\",\n          \"travelTimeFromHotel\": \"30-45 minutes (car or ride-sharing)\"\n        },\n        {\n          \"placeName\": \"Pool Time at your Hotel\",\n          \"placeDetails\": \"Most Vegas hotels have pools.  Relax, soak up the sun, and enjoy a refreshing swim. This is a free activity if you're staying at the hotel.\",\n          \"placeImageUrl\": \"https://vegasfoodandfun.com/wp-content/uploads/2022/05/Resort-Pools-in-Las-Vegas-scaled.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 0.0,\n            \"longitude\": 0.0\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.0,\n          \"bestTimeToVisit\": \"Afternoon\",\n          \"travelTimeFromHotel\": \"N/A\"\n        },\n         {\n          \"placeName\": \"LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping, dining, and entertainment district located in the heart of the Las Vegas Strip.\",\n          \"placeImageUrl\": \"https://media.cntraveler.com/photos/5b89a34bc8b2e1475d004d67/16:9/w_2560%2Cc_limit/LINQ-High-Roller-Las-Vegas-GettyImages-476641926.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1163,\n            \"longitude\": -115.1695\n          },\n          \"ticketPricing\": {\n            \"currency\": \"USD\",\n            \"adult\": 0\n          },\n          \"rating\": 4.5,\n          \"bestTimeToVisit\": \"Afternoon\",\n          \"travelTimeFromHotel\": \"15-30 minutes (bus or ride-sharing)\"\n        }\n      ]\n    }\n  },\n  \"notes\": [\n    \"Transportation: Utilize the Las Vegas Monorail or the Deuce bus for affordable transportation along the Strip. Walking is also a great option.\",\n    \"Food: Look for budget-friendly dining options like fast food, food courts, and happy hour deals.  Consider bringing snacks and drinks to save money.\",\n    \"Entertainment: Take advantage of free attractions and shows. Check for free events and concerts happening during your visit.\",\n    \"Gambling: Set a budget for gambling and stick to it.  Remember that gambling is entertainment, not a source of income.\",\n    \"Hydration: Drink plenty of water, especially during the hot summer months.\"\n  ]\n}\n```\n\n**Important Notes and Considerations:**\n\n*   **Prices are Estimates:** Hotel and attraction prices can vary greatly depending on the season, day of the week, and demand. *Always check current pricing before booking anything.*\n*   **Hotel Fees:** Be aware of resort fees, which are often added to the room rate.  Factor these into your overall budget. Some hotels may waive resort fees, so inquire about this when booking.\n*   **Transportation:** The Deuce bus is a cost-effective way to travel up and down the Strip. Ride-sharing services like Uber and Lyft are also available, but can be more expensive during peak hours. Walking is a great option, but distances can be deceiving, especially in the heat.\n*   **Flexibility:** This is just a suggested itinerary. Feel free to adjust it based on your interests and energy levels.\n*   **Deals and Discounts:** Look for deals and discounts on attractions and shows online.  Websites like Groupon, LivingSocial, and Travelzoo often have deals for Las Vegas.\n*   **Water:**  Las Vegas is in a desert environment.  Stay hydrated by drinking plenty of water.\n*   **Weather:**  Be prepared for extreme temperatures, especially in the summer.  Wear sunscreen, a hat, and comfortable shoes.\n\nThis detailed plan should provide a solid foundation for your budget-friendly Las Vegas trip. Have a fantastic time!\n"},
          ],
        },
      ],
    });
  
    