import headphones from "./photos/sluchawki.png"
export const accountNames = ["FIRST", "EMPTY"]
export const FirstAccountData =
{
feedbackData : {
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
            piecesSold: 100,
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
        { name: 'Mon',currentAmount: 30, previousAmount: 100, piecesSold: 5000, previousPiecesSold: 3000},
        { name: 'Tue',currentAmount: 30, previousAmount: 100,piecesSold: 600, previousPiecesSold: 300 },
        { name: 'Wed',currentAmount: 30, previousAmount: 100,piecesSold: 70, previousPiecesSold: 300 },
        { name: 'Thu',currentAmount: 30, previousAmount: 100,piecesSold: 80 , previousPiecesSold: 300 },
        { name: 'Fri',currentAmount: 30, previousAmount: 100,piecesSold: 90, previousPiecesSold: 300  },
        { name: 'Sat',currentAmount: 30, previousAmount: 100,piecesSold: 100, previousPiecesSold: 300  },
        { name: 'Sun',currentAmount: 30, previousAmount: 100,piecesSold: 110 , previousPiecesSold: 300 }
        ],
        dataMonths: [
            { name: 'Jan',currentAmount: 30,previousAmount: 100, piecesSold: 300  , previousPiecesSold: 500 },
            { name: 'Feb',currentAmount: 30,previousAmount: 100, piecesSold: 800  , previousPiecesSold: 600 },
            { name: 'Mar',currentAmount: 30,previousAmount: 100, piecesSold: 500  , previousPiecesSold: 700 },
            { name: 'Apr',currentAmount: 30,previousAmount: 100, piecesSold: 200  , previousPiecesSold: 800 },
            { name: 'May',currentAmount: 30,previousAmount: 100, piecesSold: 400  , previousPiecesSold: 900 },
            { name: 'Jun',currentAmount: 30,previousAmount: 100, piecesSold: 1000 , previousPiecesSold: 1000},
            { name: 'Jul',currentAmount: 30,previousAmount: 100, piecesSold: 110 , previousPiecesSold: 1100},
            { name: 'Aug',currentAmount: 30,previousAmount: 100, piecesSold: 100 , previousPiecesSold: 1200},
            { name: 'Sep',currentAmount: 30,previousAmount: 100, piecesSold: 1350 , previousPiecesSold: 1300},
            { name: 'Oct',currentAmount: 30,previousAmount: 100, piecesSold: 1420 , previousPiecesSold: 1400},
            { name: 'Nov',currentAmount: 30,previousAmount: 100, piecesSold: 1580 , previousPiecesSold: 1500},
            { name: 'Dec',currentAmount: 30,previousAmount: 100, piecesSold: 16 , previousPiecesSold: 1600},
        ],
        dataHours: [
            { name: '0', currentAmount: 30, previousAmount: 100,piecesSold: 15 ,previousPiecesSold: 11 },
            { name: '1', currentAmount: 30, previousAmount: 100,piecesSold: 17  ,previousPiecesSold: 27 },
            { name: '2', currentAmount: 30, previousAmount: 100,piecesSold: 30  ,previousPiecesSold: 14 },
            { name: '3', currentAmount: 30, previousAmount: 100,piecesSold: 43  ,previousPiecesSold: 71 },
            { name: '4', currentAmount: 30, previousAmount: 100,piecesSold: 38  ,previousPiecesSold: 22 },
            { name: '5', currentAmount: 30, previousAmount: 100,piecesSold: 64  ,previousPiecesSold: 60 },
            { name: '6', currentAmount: 30, previousAmount: 100,piecesSold: 55  ,previousPiecesSold: 70 },
            { name: '7', currentAmount: 30, previousAmount: 100,piecesSold: 10 ,previousPiecesSold: 130 },
            { name: '8', currentAmount: 30, previousAmount: 100,piecesSold: 6  ,previousPiecesSold: 68 },
            { name: '9', currentAmount: 30, previousAmount: 100,piecesSold: 21  ,previousPiecesSold: 34 },
            { name: '10',currentAmount: 30, previousAmount: 100, piecesSold: 53 ,previousPiecesSold: 61 },
            { name: '11',currentAmount: 30, previousAmount: 100, piecesSold: 44 ,previousPiecesSold: 62 },
            { name: '12',currentAmount: 30, previousAmount: 100, piecesSold: 21 ,previousPiecesSold: 57 },
            { name: '13',currentAmount: 30, previousAmount: 100, piecesSold: 32,previousPiecesSold: 34 },
            { name: '14',currentAmount: 30, previousAmount: 100, piecesSold: 20,previousPiecesSold: 21 },
            { name: '15',currentAmount: 30, previousAmount: 100, piecesSold: 50,previousPiecesSold: 55 },
            { name: '16',currentAmount: 30, previousAmount: 100, piecesSold: 10,previousPiecesSold: 17 },
            { name: '17',currentAmount: 30, previousAmount: 100, piecesSold: 39,previousPiecesSold: 42 },
            { name: '18',currentAmount: 30, previousAmount: 100, piecesSold: 40,previousPiecesSold: 55 },
            { name: '19',currentAmount: 30, previousAmount: 100, piecesSold: 30,previousPiecesSold: 30 },
            { name: '20',currentAmount: 30, previousAmount: 100, piecesSold: 100 ,previousPiecesSold: 140 },
            { name: '21',currentAmount: 30, previousAmount: 100, piecesSold: 101 ,previousPiecesSold: 111 },
            { name: '22',currentAmount: 30, previousAmount: 100, piecesSold: 13 ,previousPiecesSold: 130 },
            { name: '23',currentAmount: 30, previousAmount: 100, piecesSold: 12 ,previousPiecesSold: 125 },
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
        { name: 'Mon', piecesSold: 5000, previousPiecesSold: 3000},
        { name: 'Tue', piecesSold: 600, previousPiecesSold: 300 },
        { name: 'Wed', piecesSold: 70, previousPiecesSold: 300 },
        { name: 'Thu', piecesSold: 80 , previousPiecesSold: 300 },
        { name: 'Fri', piecesSold: 90, previousPiecesSold: 300  },
        { name: 'Sat', piecesSold: 100, previousPiecesSold: 300  },
        { name: 'Sun', piecesSold: 110 , previousPiecesSold: 300 }
        ],
        dataMonths: [
            { name: 'Jan', piecesSold: 300  , previousPiecesSold: 500 },
            { name: 'Feb', piecesSold: 800  , previousPiecesSold: 600 },
            { name: 'Mar', piecesSold: 500  , previousPiecesSold: 700 },
            { name: 'Apr', piecesSold: 200  , previousPiecesSold: 800 },
            { name: 'May', piecesSold: 400  , previousPiecesSold: 900 },
            { name: 'Jun', piecesSold: 1000 , previousPiecesSold: 1000},
            { name: 'Jul', piecesSold: 110 , previousPiecesSold: 1100},
            { name: 'Aug', piecesSold: 100 , previousPiecesSold: 1200},
            { name: 'Sep', piecesSold: 1350 , previousPiecesSold: 1300},
            { name: 'Oct', piecesSold: 1420 , previousPiecesSold: 1400},
            { name: 'Nov', piecesSold: 1580 , previousPiecesSold: 1500},
            { name: 'Dec', piecesSold: 16 , previousPiecesSold: 1600},
        ],
        dataHours: [
            { name: '0', piecesSold: 15 ,previousPiecesSold: 11 },
            { name: '1', piecesSold: 17  ,previousPiecesSold: 27 },
            { name: '2', piecesSold: 30  ,previousPiecesSold: 14 },
            { name: '3', piecesSold: 43  ,previousPiecesSold: 71 },
            { name: '4', piecesSold: 38  ,previousPiecesSold: 22 },
            { name: '5', piecesSold: 64  ,previousPiecesSold: 60 },
            { name: '6', piecesSold: 55  ,previousPiecesSold: 70 },
            { name: '7', piecesSold: 10 ,previousPiecesSold: 130 },
            { name: '8', piecesSold: 6  ,previousPiecesSold: 68 },
            { name: '9', piecesSold: 21  ,previousPiecesSold: 34 },
            { name: '10', piecesSold: 53 ,previousPiecesSold: 61 },
            { name: '11', piecesSold: 44 ,previousPiecesSold: 62 },
            { name: '12', piecesSold: 21 ,previousPiecesSold: 57 },
            { name: '13', piecesSold: 32,previousPiecesSold: 34 },
            { name: '14', piecesSold: 20,previousPiecesSold: 21 },
            { name: '15', piecesSold: 50,previousPiecesSold: 55 },
            { name: '16', piecesSold: 10,previousPiecesSold: 17 },
            { name: '17', piecesSold: 39,previousPiecesSold: 42 },
            { name: '18', piecesSold: 40,previousPiecesSold: 55 },
            { name: '19', piecesSold: 30,previousPiecesSold: 30 },
            { name: '20', piecesSold: 100 ,previousPiecesSold: 140 },
            { name: '21', piecesSold: 101 ,previousPiecesSold: 111 },
            { name: '22', piecesSold: 13 ,previousPiecesSold: 130 },
            { name: '23', piecesSold: 12 ,previousPiecesSold: 125 },
        ],
    }
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
