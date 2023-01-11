
export const feedbackData = {
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
        author: 'Robert Johnson',
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
          author: 'Robert Johnson',
          date: new Date('2022-02-17')
        },
            {
            rating: 0.5,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnson',
            date: new Date('2021-12-17')
          },
          {
            rating: 0.5,
            text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
            author: 'Robert Johnson',
            date: new Date('2021-11-17')
          },
        ],
    all: [
      {
        date: new Date(2021, 11, 17, 12, 34, 3),
        value: 3.5,
        title: "W porządku",
        text:
          "Kupiony sprzęt działa bez zarzutu, jednak opakowanie było mocno powgniatane",
        clientName: "Jagoda Mróz"
      },
      {
        date: new Date(2021, 11, 16, 14, 21, 5),
        value: 1,
        title: "Tragedia...",
        text:
          "Zamówiony laptop nie przychodził przez 2 tygodnie, próbowałem się skontaktować ze sprzedawcą, odpisał dopiero po kilku dniach, że otrzymał informację o dostarczeniu przesyłki, więc nie wie z czym mam problem i dodatkowo",
        clientName: "Joachim Przybylski"
      },
      {
        date: new Date(2021, 11, 16, 12, 56, 0),
        value: 3,
        title: "Słaby kontakt",
        text:
          "Chciałam dokonać reklamacji słuchawek, sprzedawca odpisywał na każdą moją wiadomość dopiero po kilku dniach. Ostatecznie reklamację udało się przeprowadzić, jednak całe to oczekiwanie było bardzo irytujące",
        clientName: "Anna Giermek"
      },
      {
        date: new Date(2021, 11, 15, 20, 12, 3),
        value: 5,
        title: "Wspaniały!",
        text: "Super realizacja zamówienia, paczka dotarła na drugi dzień.",
        clientName: "Zuzanna Krupa"
      },
      {
        date: new Date(2021, 11, 15, 18, 24, 0),
        value: 2.5,
        title: "Niezgodność z opisem",
        text:
          "Zamówiona bluza miała być w 100% z bawełny, jest 40% poliestru, kolor także pozostawia wiele do życzenia",
        clientName: "Andrzej Figa"
      }
    ]
  };
  
export const offerRankingData = {
    bestOffers : [
        {
          id: 1,
          name: 'Offer 1',
          image: '/path/to/image1.jpg',
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
    
  };

export const salesChartData = {
    dataDays: [
    { name: 'Mon', piecesSold: 5000, piecesSold2: 3000},
    { name: 'Tue', piecesSold: 600, piecesSold2: 300 },
    { name: 'Wed', piecesSold: 70, piecesSold2: 300 },
    { name: 'Thu', piecesSold: 80 , piecesSold2: 300 },
    { name: 'Fri', piecesSold: 90, piecesSold2: 300  },
    { name: 'Sat', piecesSold: 100, piecesSold2: 300  },
    { name: 'Sun', piecesSold: 110 , piecesSold2: 300 }
    ],
    dataMonths: [
        { name: 'Jan', piecesSold: 500  , piecesSold2: 500 },
        { name: 'Feb', piecesSold: 600  , piecesSold2: 600 },
        { name: 'Mar', piecesSold: 700  , piecesSold2: 700 },
        { name: 'Apr', piecesSold: 800  , piecesSold2: 800 },
        { name: 'May', piecesSold: 900  , piecesSold2: 900 },
        { name: 'Jun', piecesSold: 1000 , piecesSold2: 1000},
        { name: 'Jul', piecesSold: 1100 , piecesSold2: 1100},
        { name: 'Aug', piecesSold: 1200 , piecesSold2: 1200},
        { name: 'Sep', piecesSold: 1300 , piecesSold2: 1300},
        { name: 'Oct', piecesSold: 1400 , piecesSold2: 1400},
        { name: 'Nov', piecesSold: 1500 , piecesSold2: 1500},
        { name: 'Dec', piecesSold: 1600 , piecesSold2: 1600},
    ],
    dataHours: [
        { name: '0', piecesSold: 30 ,piecesSold2: 30 },
        { name: '1', piecesSold: 10  ,piecesSold2: 10 },
        { name: '2', piecesSold: 25  ,piecesSold2: 25 },
        { name: '3', piecesSold: 71  ,piecesSold2: 71 },
        { name: '4', piecesSold: 22  ,piecesSold2: 22 },
        { name: '5', piecesSold: 60  ,piecesSold2: 60 },
        { name: '6', piecesSold: 70  ,piecesSold2: 70 },
        { name: '7', piecesSold: 130 ,piecesSold2: 130 },
        { name: '8', piecesSold: 68  ,piecesSold2: 68 },
        { name: '9', piecesSold: 34  ,piecesSold2: 34 },
        { name: '10', piecesSold: 61 ,piecesSold2: 61 },
        { name: '11', piecesSold: 62 ,piecesSold2: 62 },
        { name: '12', piecesSold: 57 ,piecesSold2: 57 },
        { name: '13', piecesSold: 34,piecesSold2: 34 },
        { name: '14', piecesSold: 21,piecesSold2: 21 },
        { name: '15', piecesSold: 55,piecesSold2: 55 },
        { name: '16', piecesSold: 17,piecesSold2: 17 },
        { name: '17', piecesSold: 42,piecesSold2: 42 },
        { name: '18', piecesSold: 55,piecesSold2: 55 },
        { name: '19', piecesSold: 30,piecesSold2: 30 },
        { name: '20', piecesSold: 140 ,piecesSold2: 140 },
        { name: '21', piecesSold: 111 ,piecesSold2: 111 },
        { name: '22', piecesSold: 13 ,piecesSold2: 130 },
        { name: '23', piecesSold: 12 ,piecesSold2: 125 },
      ],
}