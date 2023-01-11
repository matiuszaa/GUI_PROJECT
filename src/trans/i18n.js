import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            salesChart: "Sales Chart",
            offerRanking: "Offer Ranking",
            customerFeedback: "Customer Feedback",
            salesAdvice: "Sales Advice",
            turnover: "turnover",
            amount: "amount",
            bestOffers: "best",
            worstOffers: "worst",
            positiveOpinion: "positive",
            negativeOpinion: "negative",
            allOpinions: "all",
            ago: "days ago",
            piecesTitle: "Pieces sold",
            offer: "Offers",
            rank: "Number",
            Jan: "Jan",
            Feb: "Feb",
            Mar: "Mar",
            Apr: "Apr",
            May: "May",
            Jun: "Jun",
            Jul: "Jul",
            Aug: "Aug",
            Sep: "Sep",
            Oct: "Oct",
            Nov: "Nov",
            Dec: "Dec",
          
            Mon: "Mon",
            Tue: "Tue",
            Wed: "Wed",
            Thu: "Thu",
            Fri: "Fri",
            Sat: "Sat",
            Sun: "Sun",
            moneyGained: "Money Gained",
            viewTimes: "Times Viewed",
            current: "current",
            previous: "previous",
            day: "day",
            week: "week",
            year: "year"
        }
      },
      pl: {
        translation: {
            day: "dzień",
            week: "tydzień",
            year: "rok",
            salesChart: "Wykres Sprzedaży",
            offerRanking: "Ranking Ofert",
            customerFeedback: "Opinia Klientów",
            salesAdvice: "Porady Sprzedażowe",
            turnover: "obrót",
            amount: "ilość",
            bestOffers: "najlepsze",
            worstOffers: "najgorsze",
            positiveOpinion: "pozytywne",
            negativeOpinion: "negatywne",
            allOpinions: "wszystkie",
            ago: "dni temu",
            piecesTitle: "sprzedane",
            offer: "Oferta",
            Jan: "Sty",
            Feb: "Lut",
            Mar: "Mar",
            Apr: "Kwi",
            May: "Maj",
            Jun: "Cze",
            Jul: "Lip",
            Aug: "Sie",
            Sep: "Wrz",
            Oct: "Paź",
            Nov: "Lis",
            Dec: "Gru",
            best: "najlepsze",
            worst: "najgorsze",
            Mon: "Pon",
            Tue: "Wt",
            Wed: "Śr",
            Thu: "Czw",
            Fri: "Pt",
            Sat: "Sob",
            Sun: "Ndz",
            viewTimes: "Widziano",
            moneyGained: "Zarobiono",
            current: "obecny",
            previous: "poprzedni",
            rank: "Numer"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
