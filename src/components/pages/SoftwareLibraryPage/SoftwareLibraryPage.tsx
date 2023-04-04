import React from "react";
import { Container, Typography } from "@mui/material";
import SoftwareLibraryCard from "../../molecules/SoftwareLibraryCard/SoftwareLibraryCard";
import AnimatedPage from "../AnimatedPage";
import ComparisonMatrix from "../../molecules/ComparisonMatrix/ComparisonMatrix";

export default function SoftwareLibraryPage() {
  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center mt-12">
        <Typography variant="h4" className="underline">
          Evaluation
        </Typography>
        <Container>
          <br />

          {/*<div className='w-full rounded-l-full rounded-r-full' style={{backgroundColor: '#EBB5B5'}}>*/}
          {/*    <div className='flex flex-row'>*/}
          {/*        <div*/}
          {/*            className='bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center'>*/}
          {/*            <img style={{maxWidth: 'none', objectFit: 'fill'}}*/}
          {/*                 className='mr-[2rem] h-[22rem] w-80 rounded-3xl z-20'*/}
          {/*                 src='https://source.unsplash.com/random/?Tree'/>*/}
          {/*        </div>*/}
          {/*        <div className='p-12 pr-64'>*/}
          {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In*/}
          {/*            hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*            Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie*/}
          {/*            congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor*/}
          {/*            suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna*/}
          {/*            venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi*/}
          {/*            a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat*/}
          {/*            nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non*/}
          {/*            ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.*/}
          {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In*/}
          {/*            hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*            Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie*/}
          {/*            congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor*/}
          {/*            suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna*/}
          {/*            venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi*/}
          {/*            a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat*/}
          {/*            nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non*/}
          {/*            ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}

          {/*<br/>*/}

          {/*<div className='w-full rounded-l-full rounded-r-full' style={{backgroundColor: '#EBB5B5'}}>*/}
          {/*    <div className='flex flex-row'>*/}
          {/*        <div className='p-12 pl-64'>*/}
          {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In*/}
          {/*            hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*            Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie*/}
          {/*            congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor*/}
          {/*            suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna*/}
          {/*            venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi*/}
          {/*            a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat*/}
          {/*            nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non*/}
          {/*            ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.*/}
          {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In*/}
          {/*            hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
          {/*            Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie*/}
          {/*            congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor*/}
          {/*            suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna*/}
          {/*            venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi*/}
          {/*            a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat*/}
          {/*            nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non*/}
          {/*            ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.*/}
          {/*        </div>*/}
          {/*        <div*/}
          {/*            className='bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center justify-center'>*/}
          {/*            <img style={{maxWidth: 'none', objectFit: 'fill'}}*/}
          {/*                 className='mx-[2rem] h-80 w-80 rounded-3xl z-20'*/}
          {/*                 src='https://source.unsplash.com/random/?Tree'/>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}

          {/*<br/>*/}

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
          <ComparisonMatrix />
          <br />
        </Container>
      </div>
    </AnimatedPage>
  );
}
