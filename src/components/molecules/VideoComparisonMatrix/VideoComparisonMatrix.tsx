import React from "react";

export default function VideoComparisonMatrix() {
    return (
        <table className="border border-collapse w-full">
            <thead>
            <tr>
                <th className="border border-gray-600 bg-gray-800 p-2">Feature</th>
                <th className="border border-gray-600 bg-gray-800 p-2">
                    Adobe Premiere Pro
                </th>
                <th className="border border-gray-600 bg-gray-800 p-2">
                    Final Cut Pro X
                </th>
                <th className="border border-gray-600 bg-gray-800 p-2">
                    DaVinci Resolve
                </th>
                <th className="border border-gray-600 bg-gray-800 p-2">
                    Avid Media Composer
                </th>
                <th className="border border-gray-600 bg-gray-800 p-2">
                    HitFilm Pro
                </th>
            </tr>
            </thead>
            <tbody className="border border-gray-600 p-2">
            <tr>
                <td className="border border-gray-600 p-2 font-bold">Price</td>
                <td className="border border-gray-600 p-2">Subscription-based</td>
                <td className="border border-gray-600 p-2">$299.99</td>
                <td className="border border-gray-600 p-2">Free / $299</td>
                <td className="border border-gray-600 p-2">Subscription-based</td>
                <td className="border border-gray-600 p-2">$349</td>
            </tr>
            <tr>
                <td className="border border-gray-600 p-2 font-bold">Platforms</td>
                <td className="border border-gray-600 p-2">Windows, Mac</td>
                <td className="border border-gray-600 p-2">Mac</td>
                <td className="border border-gray-600 p-2">Windows, Mac</td>
                <td className="border border-gray-600 p-2">Windows, Mac</td>
                <td className="border border-gray-600 p-2">Windows, Mac</td>
            </tr>
            <tr>
                <td className="border border-gray-600 p-2 font-bold">Audio Editing</td>
                <td className="border border-gray-600 p-2">Advanced</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Advanced</td>
            </tr>
            <tr>
                <td className="border border-gray-600 p-2 font-bold">3D Editing</td>
                <td className="border border-gray-600 p-2">Yes</td>
                <td className="border border-gray-600 p-2">No</td>
                <td className="border border-gray-600 p-2">Yes</td>
                <td className="border border-gray-600 p-2">No</td>
                <td className="border border-gray-600 p-2">Yes</td>
            </tr>
            <tr>
                <td className="border border-gray-600 p-2 font-bold">Motion Graphics</td>
                <td className="border border-gray-600 p-2">Yes</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Basic</td>
                <td className="border border-gray-600 p-2">Advanced</td>
            </tr>
            <tr>
                <td className="border border-gray-600 p-2 font-bold">Learning Curve</td>
                <td className="border border-gray-600 p-2">Moderate</td>
                <td className="border border-gray-600 p-2">Moderate</td>
                <td className="border border-gray-600 p-2">Moderate</td>
                <td className="border border-gray-600 p-2">Difficult</td>
                <td className="border border-gray-600 p-2">Moderate</td>
            </tr>
            </tbody>
        </table>
    );
}
