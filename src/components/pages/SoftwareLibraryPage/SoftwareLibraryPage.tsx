import React from "react";
import { Container, Typography } from "@mui/material";
import SoftwareLibraryCard from "../../molecules/SoftwareLibraryCard/SoftwareLibraryCard";
import AnimatedPage from "../AnimatedPage";
import AudioComparisonMatrix from "../../molecules/AudioComparisonMatrix/AudioComparisonMatrix";
import VideoComparisonMatrix from "../../molecules/VideoComparisonMatrix/VideoComparisonMatrix";

export default function SoftwareLibraryPage() {
  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center mt-12">
        <Typography variant="h4" className="underline">
          Evaluation
        </Typography>
        <Container>
          <SoftwareLibraryCard
            text={
              "Audacity is a free program you can use to edit and record audio on your computer. It works on Windows, Mac, and Linux. You can use it to record sounds from your microphone or other sources, like music or videos. Then, you can cut, copy, and paste parts of the sound, or add effects like noise reduction, equalization, or reverb. Audacity also has tools to help you see what your sound looks like and to work with multiple tracks at the same time. It's easy to use and popular with podcasters, musicians, and sound editors."
            }
            image={"image/logo/Audacity.svg"}
            imageDirection={"left"}
          />

          <br />
          <SoftwareLibraryCard
            text={
              "Adobe Audition is a professional audio editing software used by creators and professionals to record, edit, and mix audio files. It has a range of features such as multi-track recording, noise reduction, audio effects, and audio restoration tools. Audition is commonly used for music production, podcasting, and sound design. It's a powerful tool for audio editing and is available for both Windows and Mac operating systems."
            }
            image={"image/logo/Adobe_Audition.png"}
            imageDirection={"right"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "Logic Pro X is a digital audio workstation software designed for Mac users. It allows users to create, record, edit, and mix music, podcasts, and other audio projects. The software includes a range of features such as virtual instruments, effects, and mixing tools to help users create high-quality audio productions. Logic Pro X is used by musicians, producers, and sound engineers for professional music and audio production."
            }
            image={"image/logo/Logic_Pro_X.png"}
            imageDirection={"left"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "Pro Tools is a digital audio workstation software used for recording, editing, and mixing music and audio. It's a popular tool used by musicians, audio engineers, and producers in the professional music and audio industry. The software includes a range of features such as virtual instruments, effects, and mixing tools to help users create high-quality audio productions. Pro Tools is available for both Mac and Windows operating systems."
            }
            image={"image/logo/Pro_Tools.png"}
            imageDirection={"right"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "Ableton Live is a digital audio workstation software used by musicians, producers, and DJs for music creation and live performances. It includes features such as virtual instruments, effects, and mixing tools that allow users to create, edit, and produce music. Ableton Live is known for its unique session view which lets users arrange and trigger musical clips and loops in real-time. The software is available for both Mac and Windows operating systems."
            }
            image={"image/logo/Ableton_Live.png"}
            imageDirection={"left"}
          />
          <br />
          <AudioComparisonMatrix />
          <br />
          <SoftwareLibraryCard
            text={
              "Adobe Premiere Pro is a professional video editing software used by filmmakers, video editors, and content creators to edit and manipulate video footage. It offers a wide range of features including timeline-based editing, color correction, audio editing, visual effects, and transitions. With Premiere Pro, users can create high-quality videos for various purposes such as films, television shows, social media, and online content."
            }
            image={"image/logo/Adobe_Premiere_Pro.png"}
            imageDirection={"left"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "Final Cut Pro X is a professional video editing software exclusively available for Apple's macOS operating system. It offers a range of advanced video editing tools and features, including support for multiple cameras, advanced color grading, and special effects. It is widely used in the film and video production industry."
            }
            image={"image/logo/Final_Cut_Pro_X.png"}
            imageDirection={"right"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "Avid Media Composer is a professional video editing software used for film and television production. It provides a comprehensive set of tools for video editing, such as cutting, trimming, merging, and adding effects and audio. It offers advanced features like support for multiple cameras, advanced color grading, and special effects. It is widely used in the media industry and is available for both macOS and Windows operating systems."
            }
            image={"image/logo/Avid_Media_Composer.png"}
            imageDirection={"left"}
          />
          <br />
          <SoftwareLibraryCard
            text={
              "HitFilm Pro is a professional video editing software that provides a comprehensive set of tools for video editing, compositing, and visual effects. It includes advanced features such as support for 3D compositing, particle simulation, and advanced color grading. It is widely used in the film and video production industry and is available for both macOS and Windows operating systems."
            }
            image={"image/logo/HitFilm_Pro.svg"}
            imageDirection={"right"}
          />
          <br />
          <VideoComparisonMatrix />
          <br />
        </Container>
      </div>
    </AnimatedPage>
  );
}
