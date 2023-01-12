import React from "react";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Section, { Grid, SectionHeading, Item } from "./videosection.style";
import parallaxBg from "common/assets/image/webAppMinimal/parallax-1.png";
import { Carousel, Dot } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const VideoSection = () => {
  const carouselHeight = "100%";
  const carouselWidth = "100%";
  const isBreakpoint = useMediaQuery(997);
  return (
    <div>
      {isBreakpoint ? (
        <Section bgImage={parallaxBg?.src} bgImageAlt="the cat" strength={200}>
          <Container width="1400px">
            <SectionHeading>
              <Heading content="Writing With Ai Creatives" />
            </SectionHeading>
            <Carousel swipeable={true} autoPlay={true}>
              <div>
                <iframe
                  height={carouselHeight}
                  width={carouselWidth}
                  src="https://www.youtube.com/embed/84CP3EBjVoo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  height={carouselHeight}
                  width={carouselWidth}
                  src="https://www.youtube.com/embed/hsfQn_KQNqM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  height={carouselHeight}
                  width={carouselWidth}
                  src="https://www.youtube.com/embed/kA1Z5UWtbg4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  height={carouselHeight}
                  width={carouselWidth}
                  src="https://www.youtube.com/embed/Pekak73Ae0Q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Carousel>
          </Container>
        </Section>
      ) : (
        <Section bgImage={parallaxBg?.src} bgImageAlt="the cat" strength={200}>
          <Container width="1400px">
            <SectionHeading>
              <Heading content="Writing With Ai Creatives" />
            </SectionHeading>
            <Carousel swipeable={true} autoPlay={true}>
              <div
                class="carousel"
                style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}
              >
                <div
                  class="slide"
                  style={{
                    display: "grid",
                    "grid-template-columns": "1fr 1fr",
                  }}
                >
                  <iframe
                    height={carouselHeight}
                    width={carouselWidth}
                    src="https://www.youtube.com/embed/84CP3EBjVoo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    height={carouselHeight}
                    width={carouselWidth}
                    src="https://www.youtube.com/embed/hsfQn_KQNqM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div
                  class="slide"
                  style={{
                    display: "grid",
                    "grid-template-columns": "1fr 1fr",
                  }}
                >
                  <iframe
                    height={carouselHeight}
                    width={carouselWidth}
                    src="https://www.youtube.com/embed/kA1Z5UWtbg4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    height={carouselHeight}
                    width={carouselWidth}
                    src="https://www.youtube.com/embed/Pekak73Ae0Q"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Carousel>
          </Container>
        </Section>
      )}
    </div>
  );
};

export default VideoSection;
