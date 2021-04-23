import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ArtDirection from "./ArtDirection";
import getDato from "../services/getDato";

const query = `{
  artDirection {
    pageTitle
    pageDescription
    mainSquareMontage {
      largeImageLeft {
        url
      }
      largeImageRight {
        url
      }
      smallImages {
        url
      }
      title
      description
    }
  }
  recentWork {
    leftImage {
      responsiveImage {
        src
      }
    }
    rightImage {
      responsiveImage {
        src
      }
    }
    centralImage {
      responsiveImage {
        src
      }
    }
  }
}
`;

const MainContent = ({ content }) => {
  const [loading, setLoading] = useState(true);
  const [datoResponse, setDatoResponse] = useState({});

  useEffect(() => {
    getDato(query).then(res => {
      setDatoResponse(res);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  const { recentWork, artDirection } = datoResponse;

  return (
    <div className="w-full flex flex-col p-2">
      {content === "home" && <HomePage recentWork={recentWork} />}
      {content === "art-direction" && (
        <ArtDirection artDirection={artDirection} />
      )}
    </div>
  );
};

export default MainContent;
