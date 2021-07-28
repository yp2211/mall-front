export default {
    name: 'CommonContents',
    data: {
        images: {

        },
        variables: {
            scrollSpeed: 500,
            phone: ["080-7699-7681"],
            address: ["2-11-13-1104 Shibakoen","Minato City, Tokyo, Japan"],
            email: ["rocyang81@gmail.com","yp2211@aliyun.com"],
            categories: [
                {id: 0, text: "All Categories"},
                {id: 1, text: "Accessories"},
                {id: 2, text: "Belts"},
                {id: 3, text: "Gloves"},
                {id: 4, text: "Bags"},
                {id: 5, text: "Game"},
                {id: 6, text: "Patio"},
                {id: 7, text: "Clothings"},
                {id: 8, text: "Jeckets"},
                {id: 9, text: "Bed Pillows"},
                {id: 10, text: "Hats"},
                {id: 11, text: "Beer Glasses"},
                {id: 12, text: "Cowboy"},
                {id: 13, text: "Jean’s Collection"},
                {id: 14, text: "Shaving"},
                {id: 15, text: "Shoes"},
                {id: 16, text: "Bags"}
            ],
        },
        api: {
            url: "/data/",
        }
    }
}