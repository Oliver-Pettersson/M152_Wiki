import React from "react";
import "./MediaCodexPage.css";
import AnimatedPage from "../AnimatedPage";

function MediaCodexPage() {
    return (
        <AnimatedPage>
            <div className={"flex flex-col items-center justify-center mt-6 mx-12"}>
                <h1 className={"text-4xl font-bold"}>Audio Formats</h1>
                <table>
                    <thead>
                    <tr className={"text-xl"}>
                        <th>Audio Format</th>
                        <th>Compression</th>
                        <th>Quality</th>
                        <th>Application</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>WAV</td>
                        <td className="uncompressed">Uncompressed</td>
                        <td className="very-high">Very high</td>
                        <td>Professional audio</td>
                    </tr>
                    <tr>
                        <td>MP3</td>
                        <td className="lossy">Lossy</td>
                        <td className="good">Good</td>
                        <td>Music and podcasts</td>
                    </tr>
                    <tr>
                        <td>AAC</td>
                        <td className="lossy">Lossy</td>
                        <td className="better-than-mp3">Better than MP3</td>
                        <td>Streaming and mobile devices</td>
                    </tr>
                    <tr>
                        <td>FLAC</td>
                        <td className="lossless">Lossless</td>
                        <td className="very-high">Very high</td>
                        <td>Audiophile listening</td>
                    </tr>
                    <tr>
                        <td>WMA</td>
                        <td className="lossy">Lossy</td>
                        <td className="good">Good</td>
                        <td>Windows-based applications</td>
                    </tr>
                    <tr>
                        <td>OGG</td>
                        <td className="lossy">Lossy</td>
                        <td className="good">Good</td>
                        <td>Open-source alternative to MP3</td>
                    </tr>
                    <tr>
                        <td>AIFF</td>
                        <td className="uncompressed">Uncompressed</td>
                        <td className="very-high">Very high</td>
                        <td>Professional audio and music production</td>
                    </tr>
                    <tr>
                        <td>ALAC</td>
                        <td className="lossless">Lossless</td>
                        <td className="very-high">Very high</td>
                        <td>Apple ecosystem and iTunes</td>
                    </tr>
                    <tr>
                        <td>DSD</td>
                        <td className="lossless">Lossless</td>
                        <td className="extremely-high">Extremely high</td>
                        <td>Super Audio CDs and high-end music systems</td>
                    </tr>
                    </tbody>
                </table>

                <h1 className={"text-4xl font-bold mt-16"}>Video Formats</h1>
                <table>
                    <thead>
                    <tr className={"text-xl"}>
                        <th>Video Format</th>
                        <th>Compression</th>
                        <th>Quality</th>
                        <th>Application</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>MPEG-1</td>
                        <td className="lossy">Lossy</td>
                        <td className="low">Low</td>
                        <td>VCD and early video streaming</td>
                    </tr>
                    <tr>
                        <td>MPEG-2</td>
                        <td className="lossy">Lossy</td>
                        <td className="standard">Standard</td>
                        <td>DVDs and broadcast TV</td>
                    </tr>
                    <tr>
                        <td>MPEG-4</td>
                        <td className="lossy">Lossy</td>
                        <td className="better-than-mpeg2">Better than MPEG-2</td>
                        <td>Streaming and video conferencing</td>
                    </tr>
                    <tr>
                        <td>AVI</td>
                        <td className="lossless">Lossless or lossy</td>
                        <td className="medium">Medium</td>
                        <td>Windows-based applications</td>
                    </tr>
                    <tr>
                        <td>WMV</td>
                        <td className="lossy">Lossy</td>
                        <td className="medium">Medium</td>
                        <td>Windows Media Player and Silverlight</td>
                    </tr>
                    <tr>
                        <td>MOV</td>
                        <td className="lossless">Lossless or lossy</td>
                        <td className="high">High</td>
                        <td>QuickTime and Apple ecosystem</td>
                    </tr>
                    <tr>
                        <td>MP4</td>
                        <td className="lossy">Lossy</td>
                        <td className="better-than-mpeg4">Better than MPEG-4</td>
                        <td>Most modern devices and video hosting platforms</td>
                    </tr>
                    <tr>
                        <td>FLV</td>
                        <td className="lossy">Lossy</td>
                        <td className="low">Low</td>
                        <td>Adobe Flash Player and legacy video streaming</td>
                    </tr>
                    <tr>
                        <td>WebM</td>
                        <td className="lossy">Lossy</td>
                        <td className="better-than-mpeg4">Better than MPEG-4</td>
                        <td>Open-source alternative to MP4</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </AnimatedPage>
    );
}

export default MediaCodexPage;
