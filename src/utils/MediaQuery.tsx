export const Tablets = {
  portrait: (css: string) =>
    `@media (min-width: 768px) and (max-width: 1024px) {${css}}`,
  landscape: (css: string) =>
    `@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {${css}}`,
  portraitLowRes: (css: string) =>
    `@media (min-width: 481px) and (max-width: 767px) {${css}}`
};

export const Mobile = {
  portrait: (css: string) =>
    `@media (min-width: 320px) and (max-width: 480px) {${css}}`,
  landscape: (css: string) =>
    `@media (min-width: 768px) and (max-width: 1024px) {${css}}`,
  landscapeLowRes: Tablets.portraitLowRes
};

export const Desktop = (css: string) => `@media (min-width: 1281px) {${css}}`;
