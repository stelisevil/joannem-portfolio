import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ArtDirection from "./ArtDirection";
import Campaigns from "./Campaigns";
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
        url(imgixParams: {w: "600", h: "600", fit: crop})
        alt
      }
      largeImageRight {
        url(imgixParams: {w: "600", h: "600", fit: crop})
        alt
      }
      smallImages {
        url(imgixParams: {w: "300", h: "300", fit: crop})
        alt
      }
      title
      description
      id
    }
    fashionArtDirectionCarousel {
      carouselImages {
        url(imgixParams: {w: "1200", h: "800", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
  campaign {
    pageTitle
    pageDescription
    campaignMontage {
      largeImageLeft {
        url(imgixParams: {w: "490", h: "800", fit: crop})
        alt
        mimeType
      }
      largeImageRight {
        url(imgixParams: {w: "490", h: "800", fit: crop})
        alt
        mimeType
      }
      smallImages {
        url(imgixParams: {w: "245", h: "400", fit: crop})
        alt
        mimeType
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
        url(imgixParams: {w: "600", h: "400", fit: crop})
        alt
      }
      title
      description
      id
    }
    squareMontage {
      largeImageLeft {
        url(imgixParams: {w: "600", h: "600", fit: crop})
        alt
      }
      largeImageRight {
        url(imgixParams: {w: "600", h: "600", fit: crop})
        alt
      }
      smallImages {
        url(imgixParams: {w: "300", h: "300", fit: crop})
        alt
      }
      title
      description
      id
    }
  }
  recentWork {
    leftImage {
      url(imgixParams: {w: "800", h: "800", fit: crop})
      alt
    }
    rightImage {
      url(imgixParams: {w: "800", h: "800", fit: crop})
      alt
    }
    centralImage {
      url(imgixParams: {w: "800", h: "800", fit: crop})
      alt
    }
  }
  socialAndVideo {
    pageTitle
    pageDescription
    mainSocialMontage {
      largeImageLeft {
        url(imgixParams: {w: "490", h: "800", fit: crop})
        alt
        mimeType
        video {
          mp4Url
          thumbnailUrl
        }
      }
      largeImageRight {
        url(imgixParams: {w: "490", h: "800", fit: crop})
        alt
        mimeType
        video {
          mp4Url
          thumbnailUrl
        }
      }
      smallImages {
        url(imgixParams: {w: "245", h: "400", fit: crop})
        alt
        mimeType
        video {
          mp4Url
          thumbnailUrl
        }
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
        mimeType
        video {
          mp4Url
          thumbnailUrl
        }
      }
      title
      description(markdown: true)
      id
    }
  }
}`;

const MainContent = ({ content, setContent }) => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState({});

  useEffect(() => {
    getDato(query).then((res) => {
      setDatoResponse(res);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  const {
    recentWork,
    artDirection,
    campaign,
    graphicDesign,
    socialAndVideo,
    uxAndUi,
  } = datoResponse;

  return (
    <div className="w-full flex flex-col p-2 mt-7">
      {content === "home" && (
        <HomePage recentWork={recentWork} setContent={setContent} />
      )}
      {content === "art-direction" && (
        <ArtDirection artDirection={artDirection} />
      )}
      {content === "campaigns" && <Campaigns campaign={campaign} />}
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
