const { Fragment } = require("react");
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import background from "../../../common/assets/image/bg.svg";

import Section  from './services.style';

const ServicesSection = () => {
  const customStyle = {
    background: `url("https://localio.io/wp-content/uploads/2022/01/bg.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "150%",
    backgroundPosition: "center",
  };
  const services = [
    {
      icon: "https://www.svgrepo.com/show/157806/instagram.svg",
      name: "Instagram",
      rotation: "-2deg",
    },
    {
      icon: "https://www.svgrepo.com/show/303159/tiktok-icon-black-1-logo.svg",
      name: "TikTok Text",
      rotation: "-5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/157818/facebook.svg",
      name: "Facebook Ads",
      rotation: "-5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/95009/youtube.svg",
      name: "Youtube Text",
      rotation: "5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/134579/linkedin.svg",
      name: "Linkedin Text",
      rotation: "-3deg",
    },
    {
      icon: "https://www.svgrepo.com/show/223041/google.svg",
      name: "Google Ads",
      rotation: "3deg",
    },
    {
      icon: "https://www.svgrepo.com/show/335681/blog.svg",
      name: "Blog Posts",
      rotation: "2deg",
    },
    {
      icon: "https://www.svgrepo.com/show/160897/seo-tag.svg",
      name: "SEO Content",
      rotation: "-5deg",
    },

    {
      icon: "https://www.svgrepo.com/show/151094/location.svg",
      name: "GMB Content",
      rotation: "5deg",
    },

    {
      icon: "https://www.svgrepo.com/show/301680/coupon.svg",
      name: "Coupon Deal",
      rotation: "5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/196628/black-friday.svg",
      name: "Black Friday",
      rotation: "-5deg",
    },

    {
      icon: "https://www.svgrepo.com/show/134357/deal.svg",
      name: "Special Deals",
      rotation: "3deg",
    },
    {
      icon: "https://www.svgrepo.com/show/18894/group.svg",
      name: "SMBs",
      rotation: "5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/217792/yelp.svg",
      name: "Yelp Text",
      rotation: "-5deg",
    },
    {
      icon: "https://www.svgrepo.com/show/394504/ticket.svg",
      name: "Booking Text",
      rotation: "5deg",
    },
  ];
  return (
    <Section id="tools">
    <Fragment>
      <div style={customStyle}>
        <div className="lg:tw-w-[80%] tw-w-[90%] tw-m-auto tw-py-16 tw-space-y-5 ">
          <Heading
            className="lg:tw-text-4xl tw-text-2xl tw-text-center"
            content=" Access OVER 70+ A.I Copywriting Templates In Many Languages & 20
          Different Tone Of Voice"
          />

          <Text
            content="Here are just some of the most Popular"
            className="tw-text-center"
          />

          <div className="tw-grid lg:tw-grid-cols-5 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-10 md:tw-py-20 tw-py-10 tw-w-[80%] lg:tw-w-full tw-m-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                style={{
                  rotate: service.rotation,
                }}
                className=" tw-transition tw-ease-in-out tw-delay-50
                tw-cursor-pointer lg:hover:tw-scale-150 md:hover:tw-scale-[1.1] hover:tw-scale-[1.1] lg:tw-w-max tw-w-max tw-bg-gray-100 tw-py-2 tw-px-4 tw-w-max tw-rounded-lg tw-flex tw-item-center tw-space-x-4"
              >
                <div className="icon  tw-w-[20px] tw-h-[20px]">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="tw-w-full tw-h-full tw-object-contain tw-rounded-full"
                  />
                </div>

                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    </Section>
  );
};

export default ServicesSection;
