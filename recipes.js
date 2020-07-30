//Recipe 1: Stuffed Pork Tenderloin
// https://www.gordonramsay.com/gr/recipes/pork-stuffed-with-manchego-and-membrillo/

var pasta = new Recipe ({
	Recipe_Name: "Stuffed Pork Tenderloin",
	Recipe_Allergens: "Nuts",
  Recipe_Serves: 4;
	Recipe_Ingredients: [
                        "1kg pork loin roasting joint, skin scored",
                        "175g Manchego cheese, finely sliced",
                        "150g membrillo",
                        "2 sage sprigs",
                        "Olive oil, for drizzling",
                        "1 head of garlic, cut in half horizontally,
                        "1 thyme sprig,
                        "200ml medium-dry sherry,
                        "Sea salt and freshly ground pepper
                      ]
	Recipe_Procedure: [                 
    "1. Preheat the oven to 220°C/Gas 7.",
    "2. Lay the joint, skin side down, on a chopping board and cut three-quarters of the way into the flesh lengthways from top to bottom. Open the meat out to form a long rectangle and season with salt and pepper. ",
    "3. Arrange the slices of cheese and the membrillo along the centre of the meat. Scatter the leaves from 1 sage sprig on top, and roll the meat up to enclose the stuffing. Tie at 3cm intervals along the length of the meat with string. ",
    "4. Place the thyme and remaining sage in a hob-proof roasting tray with the garlic. Lay the pork on top, skin side up. Drizzle with olive oil and season generously with salt and pepper.",
    "5. Transfer the roasting tray to the preheated oven and cook for 20 minutes until the skin is crispy and golden. Turn the oven down to 180°/Gas 4 and cook for a further 50 minutes until the pork is just cooked through. Remove the pork from the tin and set aside on a serving dish to rest. ",
    "6. Put the roasting tray on the hob. Pour in the sherry and bring to the boil, scraping up any bits stuck in the bottom of the tray. Lower the heat, squash the garlic and remove the herbs. Add any resting juices from the meat. ",    
    "7. To serve, carve the pork into thick slices, strain the sauce and pour it over the meat."                          
                        ],
	Recipe_LowTime: 120,
	Recipe_HighTime: 150,
	Recipe_Cuisine: "Italian"
});

pasta.save;
