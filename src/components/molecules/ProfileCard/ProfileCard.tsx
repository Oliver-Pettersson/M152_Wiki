import React from "react";
import "./CardStyle.css";
import party from "party-js";

party.resolvableShapes["bomb"] = `<span>💣</span>`;
party.resolvableShapes["explosion"] = `<span>💥</span>`;
party.resolvableShapes["rainbow"] = `<span>🏳‍🌈</span>`;
party.resolvableShapes["cow"] = `<span>🐮</span>`;
party.resolvableShapes["pig"] = `<span>🐷</span>`;
party.resolvableShapes["chicken"] = `<span>🐔</span>`;
party.resolvableShapes["sheep"] = `<span>🐑</span>`;
party.resolvableShapes["horse"] = `<span>🐴</span>`;
party.resolvableShapes["dog"] = `<span>🐶</span>`;
party.resolvableShapes["cat"] = `<span>🐱</span>`;
party.resolvableShapes["fish"] = `<span>🐟</span>`;
party.resolvableShapes["bird"] = `<span>🐦</span>`;
party.resolvableShapes["elephant"] = `<span>🐘</span>`;
party.resolvableShapes["lion"] = `<span>🦁</span>`;
party.resolvableShapes["unicorn"] = `<span>🦄</span>`;
party.resolvableShapes["dragon"] = `<span>🐉</span>`;
party.resolvableShapes["tractor"] = `<span>🚜</span>`;
party.resolvableShapes["kiss"] = `<span>💋</span>`;
party.resolvableShapes["love"] = `<span>❤️</span>`;

interface PropsType {
  title: string;
  image: string;
}

export default function ProfileCard({ title, image }: PropsType) {
  function startTheParty(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLElement;

        switch (image) {
            case "/image/about/oliverw.png":
                party.confetti(target, {
                    shapes: ["bomb", "explosion"],
                    size: party.variation.range(10.5, 3.5),
                    count: party.variation.range(1, 20),

                })
                break;
            case "/image/about/saschaw.png":
                party.confetti(target, {
                    shapes: ["kiss", "love"],
                    size: party.variation.range(1, 2),
                    count: party.variation.range(15, 20),


                })
                break;
            case "/image/about/andrinw.png":
                party.confetti(target, {
                    shapes: ["cow", "pig", "chicken", "sheep", "horse", "dog", "cat", "fish", "bird", "elephant", "lion", "unicorn", "dragon", "tractor"],
                    size: party.variation.range(1, 2),
                    count: party.variation.range(10, 20),
                })
                break;
            default:
                party.confetti(target);
        }
    }

  return (
    <div className="py-4 w-60" onMouseDown={(event) => startTheParty(event)}>
      <div
        className={
          "shadow-lg rounded-md rounded-t-lg bg-[#222222] max-w-sm flex justify-center items-center mx-auto content-div"
        }
      >
        <div className="w-full">
          <img
            className="w-full h-full rounded-t-md"
            style={{ boxShadow: "none" }}
            src={image}
            alt="image"
          />
          <div className="h-12  my-3 flex items-center justify-center p-auto h-1/5 px-4 rounded-b-md">
            <span className="block text-lg dark:text-white font-bold tracking-wide">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
