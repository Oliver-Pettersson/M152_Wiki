import React from "react";

export default function ComparisonMatrix() {
  return (
    <table className="border border-collapse w-full">
      <thead>
        <tr>
          <th className="border border-gray-600 bg-gray-800 p-2">Feature</th>
          <th className="border border-gray-600 bg-gray-800 p-2">Audacity</th>
          <th className="border border-gray-600 bg-gray-800 p-2">Adobe Audition</th>
          <th className="border border-gray-600 bg-gray-800 p-2">Logic Pro X</th>
          <th className="border border-gray-600 bg-gray-800 p-2">Pro Tools</th>
          <th className="border border-gray-600 bg-gray-800 p-2">Ableton Live</th>
        </tr>
      </thead>
      <tbody className="border border-gray-600 p-2">
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Price</td>
          <td className="border border-gray-600 p-2">Free</td>
          <td className="border border-gray-600 p-2">Subscription</td>
          <td className="border border-gray-600 p-2">$199.99</td>
          <td className="border border-gray-600 p-2">$24.92/mo</td>
          <td className="border border-gray-600 p-2">$99-$749</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Platforms</td>
          <td className="border border-gray-600 p-2">Windows, Mac, Linux</td>
          <td className="border border-gray-600 p-2">Windows, Mac</td>
          <td className="border border-gray-600 p-2">Mac</td>
          <td className="border border-gray-600 p-2">Windows, Mac</td>
          <td className="border border-gray-600 p-2">Windows, Mac</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Editing Capabilities</td>
          <td className="border border-gray-600 p-2">Basic</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Multi-track editing</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">MIDI Support</td>
          <td className="border border-gray-600 p-2">No</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Virtual Instruments</td>
          <td className="border border-gray-600 p-2">No</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
          <td className="border border-gray-600 p-2">Yes</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Effects and Plugins</td>
          <td className="border border-gray-600 p-2">Basic</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
          <td className="border border-gray-600 p-2">Advanced</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">Learning Curve</td>
          <td className="border border-gray-600 p-2">Easy</td>
          <td className="border border-gray-600 p-2">Moderate</td>
          <td className="border border-gray-600 p-2">Moderate</td>
          <td className="border border-gray-600 p-2">Difficult</td>
          <td className="border border-gray-600 p-2">Moderate</td>
        </tr>
        <tr>
          <td className="border border-gray-600 p-2 font-bold">User Interface</td>
          <td className="border border-gray-600 p-2">Simple</td>
          <td className="border border-gray-600 p-2">Professional</td>
          <td className="border border-gray-600 p-2">Professional</td>
          <td className="border border-gray-600 p-2">Professional</td>
          <td className="border border-gray-600 p-2">Professional</td>
        </tr>
      </tbody>
    </table>
  );
}
