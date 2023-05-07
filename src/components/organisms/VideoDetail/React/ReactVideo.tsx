import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import React from "react";
import StoryBoardItem from "../../../molecules/StoryBoardItem/StoryBoardItem";
import "./../VideoDetail.css";
import "./ReactVideo.css";
import AnimatedPage from "../../../pages/AnimatedPage"; 

export default function ReactVideo() {
  return (
    <AnimatedPage>
      <div className="page-container w-full">
        <div className="title-wrapper">
          <Fade right>
            <Typography variant="h1" className="title">
              Search Engine Optimization
            </Typography>
            <div className="seo-line" />
          </Fade>
        </div>

        <div className="video-description">
          <p className="video-description-text">
            Search Engine Optimization (SEO) ist eine der wichtigsten Methoden,
            um die Online-Präsenz von Unternehmen, Marken und Websites zu
            verbessern. SEO umfasst eine Reihe von Techniken, die darauf
            abzielen, das Ranking einer Website in den organischen
            Suchergebnissen von Suchmaschinen wie Google zu verbessern. Durch
            eine effektive SEO-Strategie kann eine Website mehr Traffic
            generieren, ihre Sichtbarkeit erhöhen und letztendlich mehr
            potenzielle Kunden erreichen. In diesem Artikel werden wir die
            Grundlagen von SEO erläutern und aufzeigen wie Sie Ihre Website
            analyseren lassen kön·nen.
          </p>
        </div>

        <div className="main-content grid lg:grid-cols-2 md:grid-cols-1 ">
          <div className="video">
            <iframe
              className="video-thumbnail "
              src="https://www.youtube.com/embed/KLP_Fk_aJYc"
              title="So bringst du DEINE Webseite auf das nächste Level!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div>
            <Fade bottom>
              <Typography className="video-thumbnail-description row-span-2 col-span-1">
                In diesem Video wird dir erkl&auml;rt was SEO ist und warum auch
                Sie Ihre Webseite optimieren sollten. Zusaetzlich gehen wir
                darauf ein wie du deine Webseite analysieren lassen kannst um
                herauszufinden wie gut sie Optimiert ist, nach der Analyse folgt
                eine kurze Auflistung mit Tipps welche zu einem besseren
                Ergebnis f&uuml;hren werden.
              </Typography>
            </Fade>
          </div>
        </div>

        <div className="divider"></div>

        {/* Story boards below  */}
        <Fade left>
          <div className="video-production-title">
            <Typography variant="h2"> Videoproduktion </Typography>
          </div>
          <div className="small-line" />
        </Fade>
        <div className="mb-20"></div>
        <div className="storyboard-title-wrapper">
          <Typography variant="h3">3 Frames Methode</Typography>
        </div>
        <object
          data="/image/videos/SEO/3-Frames-SEO.pdf"
          width="100%"
          height="800px"
        ></object>

        <div className="divider"></div>
        <div className="storyboard-title-wrapper">
          <Typography variant="h3">Story Board</Typography>
        </div>

        <object
          data="/image/videos/SEO/Storyboard-SEO.pdf"
          width="100%"
          height="800px"
        ></object>
      </div>
    </AnimatedPage>
  )
}
