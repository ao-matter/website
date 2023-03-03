import React from 'react';
import IIconProps from '@/models/entities/shared/IIconProps';

const VideoCameraIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M77.5 40C77.5 19.29 60.71 2.5 40 2.5C19.8263 2.5 3.37875 18.4325 2.53875 38.4C2.52875 38.645 2.52625 38.8937 2.52125 39.14C2.515 39.4275 2.5 39.7125 2.5 40V40.1263C2.5 60.7675 19.29 77.5 40 77.5C60.71 77.5 77.5 60.7675 77.5 40.1263L77.4975 40.065L77.5 40ZM47.4875 74.1888C46.8313 73.8325 46.2013 73.2487 45.945 72.4538C45.4813 71.0137 45.84 69.8962 46.3725 68.5963C46.7975 67.555 46.2262 66.3525 46.5088 65.2625C47.06 63.1413 47.725 60.8425 47.52 58.5638C47.3925 57.165 47.0825 57.1012 46.0475 56.2938C44.9563 55.4375 44.9562 54.2262 44.2262 53.1437C43.565 52.16 45.345 48.4225 44.8488 48.195C44.2925 47.9388 43.0275 48.2738 42.6275 47.7425C42.1975 47.17 41.8975 46.4938 41.3062 46.05C40.925 45.7638 39.2388 44.8062 38.7887 44.8737C36.5225 45.2125 34.0675 43.0025 32.6213 41.5612C31.625 40.5725 31.21 39.4637 30.48 38.32C29.8625 37.3512 28.9275 37.2675 28.4688 36.0662C27.9875 34.8113 28.2738 33.2038 28.1275 31.8838C27.9688 30.465 27.2638 30.0125 26.3825 28.9275C24.4975 26.5988 23.8037 23.1238 20.2275 23.1238C18.3062 23.1238 18.4425 27.3088 16.895 26.7475C15.145 26.1138 12.4375 29.1112 12.4762 28.7075C12.6812 26.615 14.83 25.5975 15.04 24.9738C15.7262 22.9263 11.9738 23.4163 12.455 21.7088C12.69 20.8688 15.0775 20.2575 14.5837 19.7563C14.435 19.6038 12.6088 18.3225 12.6988 18.2588C13.0375 18.0213 14.51 18.7738 14.19 17.7963C14.0825 17.4713 13.9087 17.1725 13.7437 16.8713C14.5027 16.0094 15.3037 15.1855 16.1438 14.4025C17.4113 14.2987 18.7262 14.3775 19.2025 14.47C22.2225 15.065 23.2725 16.5938 26.2925 15.4625C27.745 14.92 33.0988 15.8612 33.8663 17.3837C34.2838 18.2162 35.8387 16.88 36.445 16.79C37.095 16.6925 38.5638 17.6937 39.0112 17.08C40.19 15.4662 38.2562 14.7963 40.54 16.0388C42.0713 16.8725 45.0637 13.2063 44.1162 17.515C43.4325 20.6213 40.92 20.69 39.0775 22.7137C37.2637 24.7062 42.6662 25.2488 42.805 27.0487C43.205 32.2313 45.9688 26.6262 45.2287 24.7837C43.7975 21.215 46.8575 22.195 48.09 24.4625C48.7738 25.7212 49.2938 24.6613 50.1312 24.2225C50.81 23.8687 50.9912 25.785 51.1375 26.1188C51.6188 27.2275 53.2 27.5587 52.9325 28.9862C52.635 30.56 51.5163 30.0875 50.4225 30.3538C49.2013 30.65 50.62 31.6775 50.4425 32.0525C50.25 32.4625 48.7775 32.6325 48.385 32.865C47.23 33.545 47.9362 34.8713 47.0325 35.5837C46.4125 36.0737 45.7875 35.755 45.6675 36.6725C45.5262 37.7537 43.5337 38.1012 43.7925 39.135C43.8638 39.4188 44.4375 41.5387 44.0763 41.6512C43.91 41.705 42.5963 39.8075 42.2375 39.6175C41.5275 39.2412 38.3 39.5487 37.885 41.685C37.6162 43.0662 39.8388 45.2475 40.405 43.345C41.1063 41.0037 41.44 44.7087 41.2712 44.8537C41.6062 45.1462 43.5662 44.3725 42.985 45.7288C42.7388 46.3025 43.2262 47.7987 44.0963 47.3375C44.46 47.145 45.3975 47.725 45.5613 47.4137C45.7966 47.0552 46.1147 46.7586 46.4888 46.5487C47.365 46.0362 48.6763 46.5175 49.6362 46.5737C50.2225 46.6075 55.0275 49.2288 55.0537 49.755C55.1587 51.7238 58.7912 51.4675 59.3488 52.1712C60.8475 54.0788 60.3862 53.11 59.2925 55.5537C58.7412 56.7838 59.2212 58.2925 57.8862 59.1838C57.2437 59.6113 56.46 59.3975 55.8887 60.0025C55.3737 60.5487 55.5762 61.2012 55.2637 61.8325C54.8875 62.5837 49.8312 67.1275 49.4975 68.2262C49.3312 68.7775 47.8225 69.2575 49.095 69.7862C49.835 70.0037 47.4563 72.2525 48.6 73.1838C48.8787 73.41 49.0613 73.6012 49.1988 73.7725C48.6275 73.925 48.0613 74.0638 47.4875 74.1888ZM44.4925 5.29625C44.4438 5.4775 44.5175 5.69125 44.8313 5.9C45.5388 6.36875 44.6287 7.41 43.6525 6.73875C42.6788 6.0675 40.4888 7.04 40.64 7.54375C40.7887 8.0475 41.465 8.2475 42.51 7.84625C43.5525 7.44375 43.9825 7.90625 44.1575 8.38375C44.2775 8.7075 44.1575 8.8875 44.1237 9.32375C44.0925 9.76 42.8787 9.4575 41.87 9.52625C40.8587 9.59375 39.7825 9.32375 39.8138 8.7525C39.8475 8.1825 38.7375 7.14125 38.075 6.70625C37.4137 6.27125 38.365 5.33125 39.2425 6.035C40.1162 6.74 40.1513 5.90125 41.1613 5.63375C41.735 5.48125 41.505 5.2525 41.31 5.035C42.385 5.0725 43.445 5.1625 44.4925 5.29625ZM48.8887 16.3825C49.645 16.5875 50.9587 17.5438 50.9587 17.9963C50.9587 18.45 50.3625 19.0175 50.0987 18.9525C48.195 18.4887 46.59 16.61 45.7062 15.5813C44.1637 13.7875 44.2612 15.325 41.8175 14.5487C41.1925 14.3488 40.2013 12.41 40.8575 11.4538C41.5138 10.4975 42.2712 10.3462 42.8762 10.6C43.4812 10.85 45.2487 9.79375 45.655 11.0525C46.0575 12.3112 47.1687 13.9175 48.18 14.3475C49.1925 14.775 48.13 16.1775 48.8887 16.3825ZM49.495 22.2237C49.7975 22.8275 47.6763 21.5188 47.1712 20.915C46.6688 20.3125 45.9088 18.9513 46.5175 18.3475C47.1225 17.745 48.48 19.6038 49.1937 20.01C50.605 20.8162 49.1925 21.6212 49.495 22.2237ZM38.7525 13.08C38.8988 12.8787 39.2087 13.3825 39.485 13.8863C39.7612 14.39 39.38 15.1 38.7525 14.9925C38.125 14.8875 38.4013 13.5725 38.7525 13.08ZM38.7525 8.015C38.7525 8.015 39.3438 9.4575 38.7525 9.2225C38.1613 8.9875 38.1325 8.38375 38.7525 8.015ZM38.8725 12.5775C38.7038 12.1763 38.665 10.5275 39.075 10.0275C39.68 9.29 40.6575 10.7325 40 11.3025C39.3438 11.8737 39.04 12.9813 38.8725 12.5775ZM31.2762 14.3463C30.1775 14.2675 30.1537 13.3175 30.0012 12.8138C29.8487 12.31 28.9388 13.77 28.0188 12.8138C27.0988 11.8575 28.2337 10.6 28.0312 9.84375C27.8287 9.08875 30.2013 9.84375 30.5562 9.84375C30.9112 9.84375 31.87 11.4038 32.1213 11.3775C32.375 11.3525 33.7375 12.6112 33.7375 12.1075C33.7375 11.605 33.945 10.7475 34.9 10.6475C36.365 10.4962 35.0513 12.2587 35 12.945C34.9512 13.6313 36.1138 14.825 36.54 15.3287C36.97 15.8325 35.4562 16.1863 35.2025 15.8825C34.9513 15.58 34.2937 15.8825 33.7375 16.285C33.1838 16.6875 31.6675 15.7313 30.9612 15.4288C30.2537 15.1275 32.375 14.4237 31.2762 14.3463ZM35.2025 6.40375C36.1787 6.74 36.7337 7.04125 37.2137 6.40375C37.6775 5.78875 38.0312 7.745 37.695 8.28125C37.3575 8.82 36.7188 8.68625 36.6162 8.28125C36.5163 7.88125 34.2263 6.0675 35.2025 6.40375ZM36.6162 12.4775C36.2812 12.04 36.2475 11.5375 36.6162 11.1688C36.9875 10.8 36.8675 10.3637 37.5275 10.23C37.8525 10.1625 37.8962 10.665 37.8962 11.135C37.8962 11.605 38.3013 12.2087 37.8962 12.945C37.4925 13.6812 36.9538 12.9125 36.6162 12.4775ZM39.3725 5.01625C39.3575 5.10875 39.2962 5.16375 39.1425 5.14875C39.0368 5.13082 38.9362 5.09032 38.8475 5.03C39.0238 5.02375 39.1962 5.01875 39.3725 5.01625ZM31.7362 6.4375C32.51 6.4375 32.41 6.96 33.05 7.33625C33.69 7.71125 33.3525 5.39625 33.79 6.26875C34.2275 7.14 35.5262 8.34875 34.9012 8.5825C34.3637 8.78625 32.1087 9.65625 31.9062 9.50625C31.7037 9.35625 31.435 8.71875 30.895 8.5825C30.355 8.44875 29.7838 7.17375 29.4125 7.2075C29.2713 7.22 29.2588 6.9775 29.3513 6.655C30.0005 6.44599 30.6558 6.25632 31.3162 6.08625C31.3888 6.28375 31.4988 6.4375 31.7362 6.4375ZM48.635 43.9688C47.8288 44.8013 46.44 43.3887 45.4812 43.4388C44.5225 43.4888 44.0413 42.4825 43.2088 42.5838C42.3738 42.6825 43.4363 41.525 44.5975 42.1313C45.7563 42.735 49.2925 43.2875 48.635 43.9688ZM64.7975 15.3013C64.5625 15.6013 64.295 15.8113 64.0387 16.0325C63.2825 16.6875 61.8688 16.6375 61.6663 17.09C61.4637 17.5425 60.9588 18.9513 59.1912 18.9575C57.4238 18.9625 57.9287 21.6212 57.7775 22.38C57.6263 23.1388 57.2238 24.0362 56.7175 23.3813C56.2125 22.7275 56.01 22.9775 54.4475 21.065C52.885 19.1525 53.485 18.0963 53.9912 17.5425C54.4963 16.99 54.6987 15.68 53.9912 15.8813C53.2838 16.0825 52.88 15.6287 53.0312 15.0025C53.1825 14.3763 53.94 13.9188 53.0312 13.25C52.1225 12.5825 52.6262 10.1937 51.92 8.01375C51.2125 5.8325 50.2525 7.37625 48.6875 7.46C47.1225 7.54375 46.8688 6.36875 47.5763 5.83125C54.1046 7.27492 60.0816 10.5617 64.7975 15.3013Z" fill="#FD8977" fill-opacity="0.8" />
    </svg>

  );
};

export default VideoCameraIcon;