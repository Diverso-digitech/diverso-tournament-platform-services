const homepageItemTypes = {
  CHIP: "CHIP",
  SWIPER: "SWIPER",
};

const homepageProperties = {
  swiper: {
    SwiperProps: {
      slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: false,
    // autoplay: true,
    slidesPerGroupSkip: 3,
    grabCursor: true,
    navigation: true,
    className: "mySwiper",
    modulesSupported: ["EffectFade", "Navigation"],
    breakpoints:{
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 10,
      }
    }
    }
    
  },
  swiperChips:{
    SwiperProps: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: false,
        // autoplay: true,
        slidesPerGroupSkip: 3,
        grabCursor: true,
        navigation: false,
        className: "mySwiper",
        modulesSupported: ["EffectFade", "Navigation"],
        breakpoints:{
          390: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 12,
            spaceBetween: 10,
          }
    } }
  }
}
const homepageData = {
  data: [
    {
      id: "1",
      gameName: "Bgmi",
      sampleImage: "../../assets/images/bgmiLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "2",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "3",
      gameName: "Bgmi",
      sampleImage: "../../assets/images/bgmiLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "4",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "5",
      gameName: "Bgmi",
      sampleImage: "../../assets/images/bgmiLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "6",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "7",
      gameName: "Bgmi",
      sampleImage: "../../assets/images/bgmiLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "8",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "9",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "10",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
    {
      id: "11",
      gameName: "Freefire",
      sampleImage: "../../assets/images/freeFireLogo.webp",
      buttonName: "See Tournament...",
    },
  ]
}

export const defaultItems = [
  {id: "forChipSection", heading: "", type: homepageItemTypes.CHIP, props: homepageProperties.swiperChips, data: homepageData.data },
  {id: "forSwiperSection", heading: "Trending Games", type: homepageItemTypes.SWIPER, props: homepageProperties.swiper, data: homepageData.data},
  {id: "forSwiperSection", heading: "Trending Games", type: homepageItemTypes.SWIPER, props: homepageProperties.swiper, data: homepageData.data},
];
