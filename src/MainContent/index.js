import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ArtDirection from "./ArtDirection";
import GraphicDesign from "./GraphicDesign";
import SocialAndVideo from "./SocialAndVideo";
import UxAndUi from "./UX";
import getDato from "../services/getDato";

const query = `{
  artDirection {
    pageTitle
    pageDescription
    mainSquareMontage {
      largeImageLeft {
        url(imgixParams: {w: "600", fit: crop})
        alt
      }
      largeImageRight {
        url(imgixParams: {w: "600", fit: crop})
        alt
      }
      smallImages {
        url(imgixParams: {w: "300", fit: crop})
        alt
      }
      title
      description
      id
    }
    fashionArtDirectionCarousel {
      carouselImages {
        url(imgixParams: {w: "1200", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
  graphicDesign {
    pageTitle
    pageDescription
    mainImageBlock {
      images {
        url(imgixParams: {w: "1200", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
  recentWork {
    leftImage {
      url(imgixParams: {w: "1200", fit: crop})
      alt
    }
    rightImage {
      url(imgixParams: {w: "1200", fit: crop})
      alt
    }
    centralImage {
      url(imgixParams: {w: "1200", fit: crop})
      alt
    }
  }
  socialAndVideo {
    pageTitle
    pageDescription
    mainSocialMontage {
      largeImageLeft {
        url(imgixParams: {w: "400", h: "800", fit: crop})
        alt
      }
      largeImageRight {
        url(imgixParams: {w: "400", h: "800", fit: crop})
        alt
      }
      smallImages {
        url(imgixParams: {w: "400", h: "800", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
  uxAndUi {
    pageTitle
    pageDescription
    largeImageBlocks {
      largeImage {
        url(imgixParams: {w: "1200", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
}`;

const MainContent = ({ content }) => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState({});

  useEffect(() => {
    getDato(query).then(res => {
      console.log(res);
      setDatoResponse(res);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  const {
    recentWork,
    artDirection,
    graphicDesign,
    socialAndVideo,
    uxAndUi
  } = datoResponse;

  return (
    <div className="w-full flex flex-col p-2">
      {content === "home" && <HomePage recentWork={recentWork} />}
      {content === "art-direction" && (
        <ArtDirection artDirection={artDirection} />
      )}
      {content === "graphic-design" && (
        <GraphicDesign graphicDesign={graphicDesign} />
      )}
      {content === "social-and-video" && (
        <SocialAndVideo socialAndVideo={socialAndVideo} />
      )}
      {content === "ux-and-ui" && <UxAndUi uxAndUi={uxAndUi} />}
    </div>
  );
};

export default MainContent;
