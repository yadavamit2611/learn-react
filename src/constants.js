export const logoUrl = "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=740";
export const cities = ["Saarbrücken","Berlin","Schmalkalden","konstanze"];
export const HEADER = {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-country-code": "de",
        "x-language-code": "en",
        "x-requested-with": "XMLHttpRequest",
        "x-session-id": "1ab4962f-6fea-4e5d-ac5c-e6e2e3cd55ee"
      }
  };

export const FETCH_MENU_URL = "https://cw-api.takeaway.com/api/v33/restaurant?slug=";
export const restaurantList = [
    {
        name: "Burger King",
        image: "https://www.in-n-out.com/ResourcePackages/INNOUT/content/images/menu/double-double-meal.png?package=INNOUT&v=2023",
        cuisines: ["Burger", "American"],
        key: "r1",
        rating: "4.2"
    },
    {
        name: "Pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJ-madnJ894CUTTo1KcXDILrtKG7XKrpGrQ&usqp=CAU",
        cuisines: ["Pizza", "Italy"],
        key: "r2",
        rating: "4.0"
    },
    {
        name: "Noodles",
        image: "https://olo-images-live.imgix.net/ce/ce9f2d562e7c46cea57e1a32208d4c08.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1800&h=1800&fit=crop&fm=png32&s=9986359421b2d10c94084da689d11f34",
        cuisines: ["Noodles", "Japanese"],
        key: "r3",
        rating: "4.1"
    },
]