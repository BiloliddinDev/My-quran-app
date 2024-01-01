export interface allSurah {
  data?: [];
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}

export interface useparapstype {
  params: { suraxId: string };
  locales: boolean;
  locale: boolean;
  defaultLocale: boolean;
}

export interface singlesuraxtype {
  result?: suraxytpe[];
}

export interface suraxytpe {
  id?: string;
  arabic_text?: string;
  aya?: string;
  footnotes?: string;
  sura?: string;
  translation?: string;
}
