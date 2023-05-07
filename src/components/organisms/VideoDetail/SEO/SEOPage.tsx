import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import React from "react";
import StoryBoardItem from "../../../molecules/StoryBoardItem/StoryBoardItem";
import "./../VideoDetail.css";
import "./SEOStyle.css";
import AnimatedPage from "../../../pages/AnimatedPage";

function SEOPage() {
  const storyboardItems = [
    "Bowsprit jib keel loot weigh anchor gabion heave down brig six pounders lugsail. Gangway ahoy Spanish Main jib gaff fathom clipper sutler Blimey landlubber or just lubber. Port ballast boom Admiral of the Black tackle hang the jib sutler no prey, no pay execution dock loaded to the gunwalls. Driver Blimey pressgang squiffy man-of-war measured fer yer chains broadside carouser chase guns gangplank. Code of conduct bounty landlubber or just lubber bilge rat ho man-of-war league keelhaul run a rig skysail. Hornswaggle chase guns swing the lead Arr nipper trysail coxswain fire ship poop deck weigh anchor.",
    "Starboard marooned topmast hempen halter list loaded to the gunwalls schooner grapple log stern. Warp Privateer weigh anchor barque brig bilge water Shiver me timbers yo-ho-ho Yellow Jack handsomely. Piracy shrouds barque snow mizzen knave rutters galleon Plate Fleet fore. Belaying pin gaff swab grapple cutlass shrouds knave loot ballast spirits. Bring a spring upon her cable draft me wherry Davy Jones' Locker case shot snow jack smartly fathom. Man-of-war hogshead salmagundi Chain Shot trysail Privateer ahoy provost log lookout.",
    "Flogging squiffy scuttle broadside snow scallywag quarterdeck lee spanker ballast. Knave dead men tell no tales dance the hempen jig weigh anchor lanyard loot bilge water topgallant rope's end parley. Salmagundi lookout line schooner spirits jack prow deadlights hearties coffer. Deadlights measured fer yer chains boatswain splice the main brace hang the jib lee bowsprit hogshead interloper no prey, no pay. Driver gangplank jib hearties interloper no prey, no pay draught list measured fer yer chains avast. Bowsprit keel wherry sutler mizzen matey scurvy ye fire ship bucko.",
  ];

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

        <div className="seo-divider"></div>

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

        <div className="seo-divider"></div>
        <div className="storyboard-title-wrapper">
          <Typography variant="h3">Story Board</Typography>
        </div>

        <object
          data="/image/videos/SEO/Storyboard-SEO.pdf"
          width="100%"
          height="800px"
        ></object>
      </div>
      <div className="seo-divider"></div>

    </AnimatedPage>
  );
}

export default SEOPage;
