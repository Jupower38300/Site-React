import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import pong from "/project/workspace/src/Image/Pong.png";

export default function Home() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const [isMorpionModalOpen, setIsMorpionModalOpen] = useState(false);
  const [morpionPosition, setMorpionPosition] = useState({ x: 150, y: 150 });
  const [draggingMorpion, setDraggingMorpion] = useState(false);
  const [initialMorpionPosition, setInitialMorpionPosition] = useState({
    x: 0,
    y: 0,
  });

  // Functions for Démineur Modal
  const handleMouseDown = (e) => {
    setDragging(true);
    setInitialPosition({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setModalPosition({
        x: e.clientX - initialPosition.x,
        y: e.clientY - initialPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Functions for Morpion Modal
  const handleMouseDownMorpion = (e) => {
    setDraggingMorpion(true);
    setInitialMorpionPosition({
      x: e.clientX - morpionPosition.x,
      y: e.clientY - morpionPosition.y,
    });
  };

  const handleMouseMoveMorpion = (e) => {
    if (draggingMorpion) {
      setMorpionPosition({
        x: e.clientX - initialMorpionPosition.x,
        y: e.clientY - initialMorpionPosition.y,
      });
    }
  };

  const handleMouseUpMorpion = () => {
    setDraggingMorpion(false);
  };

  function Buttonbar({ image }) {
    return (
      <div>
        <button className="button-desk">
          <img src={image} alt="app Barre" />
        </button>
      </div>
    );
  }

  function Apps({ nom, image, path, onClick }) {
    return (
      <div className="app-docs" onClick={onClick}>
        <Link to={path}>
          <img src={image} alt="Application" />
          <h2>{nom}</h2>
        </Link>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="Main">
        <div className="Apps">
          <div className="column">
            <Apps
              nom="Réalisations"
              image="https://img.icons8.com/?size=512&id=dINnkNb1FBl4&format=png"
              path="/realisations"
            />
            <Apps
              nom="Jeux"
              image="https://img.icons8.com/?size=512&id=dINnkNb1FBl4&format=png"
              path="/jeux"
            />
            <Apps
              nom="Sites"
              image="https://img.icons8.com/?size=512&id=dINnkNb1FBl4&format=png"
              path="/sites"
            />
          </div>
          <div className="column">
            <Apps
              nom="Démineur"
              image="https://static-00.iconduck.com/assets.00/minesweeper-icon-1935x2048-kwrajscs.png"
              path="#"
              onClick={() => setIsModalOpen(true)} // Open Démineur modal on click
            />
            <Apps
              nom="Morpion"
              image="https://cdn-icons-png.flaticon.com/512/2162/2162800.png"
              path="#"
              onClick={() => setIsMorpionModalOpen(true)} // Open Morpion modal on click
            />
            <Apps nom="Pong" image={pong} path="/pong" />
          </div>
        </div>
      </div>

      <div className="barre">
        <div className="apps-button">
          <Buttonbar image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2%2FWindows-Logo.png&f=1&nofb=1&ipt=138b43d7e04eae45170bacc5c0bfb5b0d3c40acdcd1212049e89421467301df2&ipo=images" />
          <Buttonbar image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Windows_Settings_icon.svg/1092px-Windows_Settings_icon.svg.png" />
          <Buttonbar image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fgoogle-chrome%2Flogo-google-chrome-1024.png&f=1&nofb=1&ipt=98244d1cacda3b3a33635266b0c7fa54abde0644c824fc65f87c3e918d948864&ipo=images" />
          <Buttonbar image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F479-4799678_telephone-icon-in-white.png&f=1&nofb=1&ipt=c8d9401bdb3b38d160a8a93ad778e43dcc0f71bab48eac4b11cf278d0b74cffc&ipo=images" />
          <Buttonbar image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ce572dc7-f6bc-4d9f-a140-fd183b1c15b7/dcl8rf1-76485ebc-d5dd-4c48-9880-dbe70ce58a53.png" />
        </div>
      </div>

      {/* Démineur Modal Window */}
      {isModalOpen && (
        <div
          className="modal-window"
          style={{
            top: `${modalPosition.y}px`,
            left: `${modalPosition.x}px`,
            position: "absolute",
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="modal-header" onMouseDown={handleMouseDown}>
            <span>💣 Démineur</span>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <strong>X</strong>
            </button>
          </div>
          <div className="modal-content">
            <iframe
              src="/demineur"
              title="Démineur"
              className="iframe-content"
            ></iframe>
          </div>
        </div>
      )}

      {/* Morpion Modal Window */}
      {isMorpionModalOpen && (
        <div
          className="modal-window"
          style={{
            top: `${morpionPosition.y}px`,
            left: `${morpionPosition.x}px`,
            position: "absolute",
          }}
          onMouseMove={handleMouseMoveMorpion}
          onMouseUp={handleMouseUpMorpion}
        >
          <div className="modal-header" onMouseDown={handleMouseDownMorpion}>
            <span>❌ Morpion</span>
            <button
              className="close-btn"
              onClick={() => setIsMorpionModalOpen(false)}
            >
              <strong>X</strong>
            </button>
          </div>
          <div className="modal-content">
            <iframe
              src="/morpion"
              title="Morpion"
              className="iframe-content"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
