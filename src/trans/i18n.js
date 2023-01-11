import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            saleschart: "Sales Chart",
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
            piecesTitle: "pieces sold",
            offer: "offer",
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
            moneyGained: "money gained",
            viewTimes: "times viewed",
            current: "current",
            previous: "previous"
        }
      },
      pl: {
        translation: {
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
            piecesTitle: "ile sprzedane",
            offer: "przedmiot",
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
          
            Mon: "Pon",
            Tue: "Wt",
            Wed: "Śr",
            Thu: "Czw",
            Fri: "Pt",
            Sat: "Sob",
            Sun: "Ndz",
            viewTimes: "wyświetleń",
            moneyGained: "obrót",
            current: "obecny",
            previous: "poprzedni"
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
