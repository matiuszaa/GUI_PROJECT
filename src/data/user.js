import headphones from "./photos/sluchawki.png"
import whisky from "./photos/whisky.png"
import mikrofon from "./photos/mikrofon.png"
import pasta from "./photos/pasta.png"
import buty from "./photos/buty.png"
import man1 from "./photos/man1.png"
import man2 from "./photos/man2.jpg"
import man3 from "./photos/man3.png"
export const accountNames = ["FIRST", "EMPTY"]
export const FirstAccountData =
{
feedbackData : {
        best: [
        {
        rating: 4.5,
        avatar: man1,
        text: 'This product is great! akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolisakonstantyopolisakonstantyopolis',
        author: 'John Smith',
        date: new Date('2022-01-01')
        },
        {
        rating: 4,
        avatar: man2,
        text: 'It works as expectedsssssssssssssssssssssssssssssssssssssssssssssssssss s.lfasfsa',
        author: 'Jane Doe',
        date: new Date('2022-07-31')
        },
        {
        rating: 5,
        avatar: man3,
        text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
        author: 'Robert Johnson',
        date: new Date('2021-12-17')
        },
            {
            rating: 4.5,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnso',
            date: new Date('2021-12-17')
        },
        ],
        worst: [
            {
            rating: 1.5,
            text: 'This product is great! akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolisakonstantyopolisakonstantyopolis',
            author: 'John Smith',
            date: new Date('2023-01-01')
            },
            {
            rating: 1,
            text: 'It works as expectedsssssssssssssssssssssssssssssssssssssssssssssssssss s.lfasfsa',
            author: 'Jane Doe',
            date: new Date('2022-07-31')
            },
            {
            rating: 1,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnsnon',
            date: new Date('2022-02-17')
            },
                {
                rating: 0.5,
                text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
                author: 'Robert Johnjson',
                date: new Date('2021-12-17')
            },
            {
                rating: 0.5,
                text: 'I am not very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary',
                author: 'Robert Jtfohnson',
                date: new Date('2021-11-17')
            },
            ],
    
    },
    
    offerRankingData : {
        bestOffers : [
            {
            id: 1,
            name: 'Offer 1',
            image: headphones,
            piecesSold: 100,
            moneyGained: 1000,
            },
            {
            id: 2,
            name: 'Offer 2',
            image: mikrofon,
            piecesSold: 50,
            moneyGained: 500,
            },
            {
            id: 3,
            name: 'Offer 3',
            image: pasta,
            piecesSold: 25,
            moneyGained: 250,
            },
        ],
        
        worstOffers : [
            {
            id: 1,
            name: 'Offer 1',
            image: buty,
            piecesSold: 100,
            viewTimes: 1000,
            },
            {
            id: 2,
            name: 'Offer 2',
            image: whisky,
            piecesSold: 50,
            viewTimes: 500,
            },
            {
            id: 3,
            name: 'Offer 3',
            image: '/path/to/image3.jpg',
            piecesSold: 25,
            viewTimes: 250,
            },
        ],
    },
    orders: {
        unpaid: 120,
        notsend: 50,
        returned: 10,
    },
    qualityMark: [
        {
            size: 100,
            name: 'qualitySales',
            current: 63,
        },
        {
            size: 70,
            name: 'qualityClients',
            current: 22,
        },
        {
            size: 60,
            name: 'qualityReturn',
            current: 23,
        },
        {
            size: 30,
            name: 'qualityService',
            current: 21,
        },
        {
            size: 10,
            name: 'qualityPrices',
            current: 6,
        }
    ],

    salesChartData : {
        dataDays: [
        { name: 'Mon',currentAmount: 20, previousAmount: 51, piecesSold: 200, previousPiecesSold: 50},
        { name: 'Tue',currentAmount: 60, previousAmount: 18,piecesSold: 300, previousPiecesSold: 39 },
        { name: 'Wed',currentAmount: 40, previousAmount: 22,piecesSold: 65, previousPiecesSold: 28 },
        { name: 'Thu',currentAmount: 17, previousAmount: 30,piecesSold: 40 , previousPiecesSold: 45 },
        { name: 'Fri',currentAmount: 45, previousAmount: 90,piecesSold: 32, previousPiecesSold: 12  },
        { name: 'Sat',currentAmount: 90, previousAmount: 33,piecesSold: 17, previousPiecesSold: 39  },
        { name: 'Sun',currentAmount: 110, previousAmount: 64,piecesSold: 44 , previousPiecesSold: 30 }
        ],
        dataMonths: [
            { name: 'Jan',currentAmount: 20,previousAmount: 21, piecesSold: 44  , previousPiecesSold: 50 },
            { name: 'Feb',currentAmount: 60,previousAmount: 31, piecesSold: 11  , previousPiecesSold: 66 },
            { name: 'Mar',currentAmount: 40,previousAmount: 19, piecesSold: 50  , previousPiecesSold: 33 },
            { name: 'Apr',currentAmount: 17,previousAmount: 82, piecesSold: 20  , previousPiecesSold: 31 },
            { name: 'May',currentAmount: 45,previousAmount: 44, piecesSold: 40  , previousPiecesSold: 28 },
            { name: 'Jun',currentAmount: 90,previousAmount: 17, piecesSold: 100 , previousPiecesSold: 44},
            { name: 'Jul',currentAmount: 110,previousAmount: 22, piecesSold: 105 , previousPiecesSold: 140},
            { name: 'Aug',currentAmount: 25,previousAmount: 39, piecesSold: 120 , previousPiecesSold: 120},
            { name: 'Sep',currentAmount: 31,previousAmount: 41, piecesSold: 135 , previousPiecesSold: 130},
            { name: 'Oct',currentAmount: 45,previousAmount: 27, piecesSold: 142 , previousPiecesSold: 170},
            { name: 'Nov',currentAmount: 61,previousAmount: 30, piecesSold: 158 , previousPiecesSold: 150},
            { name: 'Dec',currentAmount: 28,previousAmount: 85, piecesSold: 16 , previousPiecesSold: 160},
        ],
        dataHours: [
            { name: '0', currentAmount: 25, previousAmount: 30,piecesSold: 15 ,previousPiecesSold: 11 },
            { name: '1', currentAmount: 17, previousAmount: 90,piecesSold: 17  ,previousPiecesSold: 27 },
            { name: '2', currentAmount: 30, previousAmount: 100,piecesSold: 30  ,previousPiecesSold: 14 },
            { name: '3', currentAmount: 41, previousAmount: 80,piecesSold: 43  ,previousPiecesSold: 71 },
            { name: '4', currentAmount: 58, previousAmount: 10,piecesSold: 38  ,previousPiecesSold: 22 },
            { name: '5', currentAmount: 120, previousAmount: 20,piecesSold: 64  ,previousPiecesSold: 60 },
            { name: '6', currentAmount: 33, previousAmount: 90,piecesSold: 55  ,previousPiecesSold: 70 },
            { name: '7', currentAmount: 44, previousAmount: 20,piecesSold: 10 ,previousPiecesSold: 130 },
            { name: '8', currentAmount: 58, previousAmount: 45,piecesSold: 6  ,previousPiecesSold: 68 },
            { name: '9', currentAmount: 22, previousAmount: 100,piecesSold: 21  ,previousPiecesSold: 34 },
            { name: '10',currentAmount: 11, previousAmount: 58, piecesSold: 53 ,previousPiecesSold: 61 },
            { name: '11',currentAmount: 46, previousAmount: 100, piecesSold: 44 ,previousPiecesSold: 62 },
            { name: '12',currentAmount: 35, previousAmount: 30, piecesSold: 21 ,previousPiecesSold: 57 },
            { name: '13',currentAmount: 30, previousAmount: 22, piecesSold: 32,previousPiecesSold: 34 },
            { name: '14',currentAmount: 28, previousAmount: 11, piecesSold: 20,previousPiecesSold: 21 },
            { name: '15',currentAmount: 30, previousAmount: 120, piecesSold: 50,previousPiecesSold: 55 },
            { name: '16',currentAmount: 40, previousAmount: 38, piecesSold: 10,previousPiecesSold: 17 },
            { name: '17',currentAmount: 22, previousAmount: 28, piecesSold: 39,previousPiecesSold: 42 },
            { name: '18',currentAmount: 21, previousAmount: 48, piecesSold: 40,previousPiecesSold: 55 },
            { name: '19',currentAmount: 30, previousAmount: 55, piecesSold: 30,previousPiecesSold: 30 },
            { name: '20',currentAmount: 75, previousAmount: 60, piecesSold: 100 ,previousPiecesSold: 140 },
            { name: '21',currentAmount: 44, previousAmount: 30, piecesSold: 101 ,previousPiecesSold: 111 },
            { name: '22',currentAmount: 33, previousAmount: 22, piecesSold: 13 ,previousPiecesSold: 130 },
            { name: '23',currentAmount: 19, previousAmount: 19, piecesSold: 12 ,previousPiecesSold: 125 },
        ],
    }
}

export const EmptyAccountData =
    { feedbackData : {
        best: [
        {
        rating: 4.5,
        text: 'This product is great! akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolisakonstantyopolisakonstantyopolis',
        author: 'John Smith',
        date: new Date('2022-01-01')
        },
        {
        rating: 4,
        text: 'It works as expectedsssssssssssssssssssssssssssssssssssssssssssssssssss s.lfasfsa',
        author: 'Jane Doe',
        date: new Date('2022-07-31')
        },
        {
        rating: 5,
        text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
        author: 'Robert Johnson',
        date: new Date('2021-12-17')
        },
            {
            rating: 4.5,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnso',
            date: new Date('2021-12-17')
        },
        ],
        worst: [
            {
            rating: 1.5,
            text: 'This product is great! akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolisakonstantyopolisakonstantyopolis',
            author: 'John Smith',
            date: new Date('2023-01-01')
            },
            {
            rating: 1,
            text: 'It works as expectedsssssssssssssssssssssssssssssssssssssssssssssssssss s.lfasfsa',
            author: 'Jane Doe',
            date: new Date('2022-07-31')
            },
            {
            rating: 1,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnsnon',
            date: new Date('2022-02-17')
            },
                {
                rating: 0.5,
                text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
                author: 'Robert Johnjson',
                date: new Date('2021-12-17')
            },
            {
                rating: 0.5,
                text: 'I am not very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary',
                author: 'GRZEGGG Jtfohnson',
                date: new Date('2021-11-17')
            },
            ],
    
    },
    
    offerRankingData : {
        bestOffers : [
            {
            id: 1,
            name: 'lala 1',
            image: headphones,
            piecesSold: 100,
            moneyGained: 1000,
            },
            {
            id: 2,
            name: 'Offer 2',
            image: '/path/to/image2.jpg',
            piecesSold: 50,
            moneyGained: 500,
            },
            {
            id: 3,
            name: 'Offer 3',
            image: '/path/to/image3.jpg',
            piecesSold: 25,
            moneyGained: 250,
            },
        ],
        
        worstOffers : [
            {
            id: 1,
            name: 'Offer 1',
            image: '/path/to/image1.jpg',
            piecesSold: 2137,
            viewTimes: 1000,
            },
            {
            id: 2,
            name: 'Offer 2',
            image: '/path/to/image2.jpg',
            piecesSold: 50,
            viewTimes: 500,
            },
            {
            id: 3,
            name: 'Offer 3',
            image: '/path/to/image3.jpg',
            piecesSold: 25,
            viewTimes: 250,
            },
        ],
        
    },

    salesChartData : {
        dataDays: [
        { name: 'Mon',},
        { name: 'Tue',  },
        { name: 'Wed', },
        { name: 'Thu',  },
        { name: 'Fri',  },
        { name: 'Sat',   },
        { name: 'Sun',  }
        ],
        dataMonths: [
            { name: 'Jan', },
            { name: 'Feb', },
            { name: 'Mar', },
            { name: 'Apr', },
            { name: 'May', },
            { name: 'Jun',},
            { name: 'Jul',},
            { name: 'Aug',},
            { name: 'Sep',},
            { name: 'Oct',},
            { name: 'Nov',},
            { name: 'Dec',},
        ],
        dataHours: [
            { name: '0', },
            { name: '1',  },
            { name: '2',  },
            { name: '3',  },
            { name: '4',  },
            { name: '5',  },
            { name: '6',  },
            { name: '7',  },
            { name: '8', },
            { name: '9',  },
            { name: '10',  },
            { name: '11',  },
            { name: '12',  },
            { name: '13', },
            { name: '14', },
            { name: '15', },
            { name: '16', },
            { name: '17', },
            { name: '18', },
            { name: '19', },
            { name: '20',  },
            { name: '21',  },
            { name: '22', },
            { name: '23', },
        ],
    },
    orders: {
        unpaid: 0,
        notsend: 0,
        returned: 0,
    },
    qualityMark: [
        {
            size: 0,
            name: 'qualitySales',
            current: 0,
        },
        {
            size: 0,
            name: 'qualityClients',
            current: 0,
        },
        {
            size: 0,
            name: 'qualityReturn',
            current: 0,
        },
        {
            size: 0,
            name: 'qualityService',
            current: 0,
        },
        {
            size: 0,
            name: 'qualityPrices',
            current: 0,
        }
    ]
} 

export class DataMock {
    getOfferRankingData(account) {
      if (account === "FIRST") {
        return FirstAccountData;
    }
    else {
        return EmptyAccountData;
    }
}
}
