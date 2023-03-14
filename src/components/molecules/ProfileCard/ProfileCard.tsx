import React from "react";
import "./CardStyle.css";
import party, {Vector} from "party-js";
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

interface PropsType {
  title: string;
  image: string;
}

export default function ProfileCard({ title, image }: PropsType) {

    function startTheParty(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = event.target as HTMLElement;

        switch (image) {
            case "/image/oliver.jpg":
                party.confetti(target, {
                    shapes: ["bomb", "explosion"],
                    size: party.variation.range(1.5, 2.5),
                })
                break;
            case "/image/sascha.jpg":
                party.confetti(target, {
                    shapes: ["rainbow"],
                    size: party.variation.range(0.5, 1.5),
                })
                break;
            case "/image/andrin.png":
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
          "shadow-lg rounded-md dark:bg-custom-dark-1 bg-white max-w-sm flex justify-center items-center mx-auto content-div"
        }
      >
        <div className="w-full">
          <img
            className="w-full h-full rounded-t-md"
            style={{ boxShadow: "none" }}
            src={image}
            alt="image"
          />
          <div className="h-12 my-3 flex items-center justify-center p-auto h-1/5 px-4 dark:bg-custom-dark-1 bg-white rounded-b-md">
            <span className="block text-lg dark:text-white text-gray-800 font-bold tracking-wide">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
