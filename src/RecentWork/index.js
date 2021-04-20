import React, { useState, useEffect } from "react";
import getDato from "../services/getDato";

const query = `{
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
}`;

const RecentWork = () => {
  const [recentWork, setRecentWork] = useState({});

  useEffect(() => {
    getDato(query).then(res => {
      console.log(res.recentWork);
      setRecentWork(res.recentWork);
    });
  }, []);

  return (
    <div className="mb-12">
      <p className="font-bold mb-4 text-xl">Recent work...</p>
      <div className="flex md:flex-row flex-col">
        <img
          src={recentWork?.leftImage?.responsiveImage?.src}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full"
        />
        <img
          src={recentWork?.centralImage?.responsiveImage?.src}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full md:px-2"
        />
        <img
          src={recentWork?.rightImage?.responsiveImage?.src}
          alt="recent work images"
          className="h-auto md:w-1/3 w-full"
        />
      </div>
    </div>
  );
};

export default RecentWork;
