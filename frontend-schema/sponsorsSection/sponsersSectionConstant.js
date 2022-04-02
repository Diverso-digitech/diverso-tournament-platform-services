const tournamentData = {
    data: [
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
        {
          imageUrl: "../../../assets/images/sl.png",
        },
      ],
      isLive: true,
      overLayProps:{
        topLeft: [
          {
            id:"one",
            title: "Live",
          }
        ],
        topRight: [
          {
            id:"one",
            title: "20K Watching",
          }
        ],
        // bottomLeft: [
        //   {
        //     id:"one",
        //     title: "Live",
        //   }
        // ],
        // bottomRight: [
        //   {
        //     id:"one",
        //     title: "Live",
        //   }
        // ],
        
      }
}

const sponsorsSectionSwiperProps = {
    swiperPropsSponsors: {
        SwiperProps:{
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: false,
        autoplay: true,
        slidesPerGroupSkip: 3,
        grabCursor: true,
        navigation: false,
        className: "mySwiper",
        modules: ["EffectFade", "Navigation"],
        breakpoints: {
          390: {
            slidesPerView: 2.5,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7.5,
            spaceBetween: 10,
          },
        },
      },
    }
}


export const sponsorsSectiondefaultItems = [
    {data: tournamentData.data, props: sponsorsSectionSwiperProps.swiperPropsSponsors, isLive: tournamentData.isLive, overLayProps:tournamentData.overLayProps }
]
