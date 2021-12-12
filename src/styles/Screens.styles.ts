const Size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const Device = {
  mobileS: `only screen and (max-width: ${Size.mobileS})`,
  mobileM: `only screen and (max-width: ${Size.mobileM})`,
  mobileL: `only screen and (max-width: ${Size.mobileL})`,
  tablet: `only screen and (max-width: ${Size.tablet})`,
  laptop: `only screen and (min-width: ${Size.laptop})`,
  laptopL: `only screen and (max-width: ${Size.laptopL})`,
  desktop: `only screen and (max-width: ${Size.desktop})`
};

export default Device;
