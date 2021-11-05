/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Howler } from "howler";
import HiddenNavBar from "../../nav/components/HiddenNavBar";
import DrumMachineState from "../interfaces/drumMachine.i";
import background from "../images/background.jpeg";
import {
  heater1,
  piano1,
  heater2,
  piano2,
  heater3,
  piano3,
  heater4,
  piano4,
  heater5,
  piano5,
  heater6,
  piano6,
  heater7,
  piano7,
  heater8,
  piano8,
  heater9,
  piano9,
} from "../data/data";

const DrumMachine = (): JSX.Element => {
  const [state, setState] = useState<DrumMachineState>({
    kit: "heater",
    power: false,
    current: "Heater Kit",
  });

  let textFlash: number;

  const onPlaySound = (key: string): void => {
    const { power, kit } = state;
    if (!power) return;
    switch (key) {
      case "1":
        kit === "heater" ? heater1.play() : piano1.play();
        break;
      case "2":
        kit === "heater" ? heater2.play() : piano2.play();
        break;
      case "3":
        kit === "heater" ? heater3.play() : piano3.play();
        break;
      case "4":
        kit === "heater" ? heater4.play() : piano4.play();
        break;
      case "5":
        kit === "heater" ? heater5.play() : piano5.play();
        break;
      case "6":
        kit === "heater" ? heater6.play() : piano6.play();
        break;
      case "7":
        kit === "heater" ? heater7.play() : piano7.play();
        break;
      case "8":
        kit === "heater" ? heater8.play() : piano8.play();
        break;
      case "9":
        kit === "heater" ? heater9.play() : piano9.play();
        break;
      default:
        break;
    }
  };

  const onFlashKey = (key: string): void => {
    const { power, kit } = state;
    if (!power) return;
    const tile = document.getElementById(key);
    tile.classList.add("drum__flash");
    onPlaySound(key);
    let value: string;
    switch (key) {
      case "1":
        value = kit === "heater" ? "Heater 1" : "Chord 1";
        break;
      case "2":
        value = kit === "heater" ? "Heater 2" : "Chord 2";
        break;
      case "3":
        value = kit === "heater" ? "Heater 3" : "Chord 3";
        break;
      case "4":
        value = kit === "heater" ? "Heater 4" : "Shaker";
        break;
      case "5":
        value = kit === "heater" ? "Clap" : "Open HH";
        break;
      case "6":
        value = kit === "heater" ? "Open HH" : "Closed HH";
        break;
      case "7":
        value = kit === "heater" ? "Kick n' Hat" : "Punchy Kick";
        break;
      case "8":
        value = kit === "heater" ? "Kick" : "Side Stick";
        break;
      case "9":
        value = kit === "heater" ? "Closed HH" : "Snare";
        break;
      default:
        return;
    }

    document.getElementById("current").innerHTML = value;
    setTimeout((): void => {
      tile.classList.remove("drum__flash");
    }, 100);
    clearTimeout(textFlash);
    textFlash = window.setTimeout((): void => {
      document.getElementById("current").innerHTML = "";
    }, 1000);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    const { power } = state;
    if (!power) return;
    switch (e.key) {
      case "q":
        onFlashKey("1");
        break;
      case "w":
        onFlashKey("2");
        break;
      case "e":
        onFlashKey("3");
        break;
      case "a":
        onFlashKey("4");
        break;
      case "s":
        onFlashKey("5");
        break;
      case "d":
        onFlashKey("6");
        break;
      case "z":
        onFlashKey("7");
        break;
      case "x":
        onFlashKey("8");
        break;
      case "c":
        onFlashKey("9");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onSetVolume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { power } = state;
    if (!power) return;
    const volume: number = parseInt(e.target.value, 10);
    Howler.volume(volume / 100);
    document.getElementById("current").innerHTML = `Volume: ${volume}`;
    clearTimeout(textFlash);
    textFlash = window.setTimeout((): void => {
      document.getElementById("current").innerHTML = "";
    }, 1000);
  };

  const { current } = state;
  return (
    <div
      className="drum__background"
      style={{ background: `url(${background}) no-repeat center center fixed` }}
    >
      <HiddenNavBar color="white" navBackground={background} />
      <div className="drum__container">
        <div className="drum__info">
          <h3 className="drum__title">Drum Machine</h3>
          <p className="drum__text">
            Turn on the drum machine and use the keyboard or press the buttons to make
            some music!
          </p>
          <p className="drum__text">
            You can change the volume with the slider, or change the kit to a
            &quot;Heater&quot; kit or &quot;Smooth Piano&quot; kit with the toggle.
          </p>
        </div>
        <div className="drum__machine">
          <div className="drum__button-container">
            <div className="drum__row">
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="1"
                onClick={(): void => onFlashKey("1")}
              >
                Q
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="2"
                onClick={(): void => onFlashKey("2")}
              >
                W
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="3"
                onClick={(): void => onFlashKey("3")}
              >
                E
              </div>
            </div>
            <div className="drum__row">
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="4"
                onClick={(): void => onFlashKey("4")}
              >
                A
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="5"
                onClick={(): void => onFlashKey("5")}
              >
                S
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="6"
                onClick={(): void => onFlashKey("6")}
              >
                D
              </div>
            </div>
            <div className="drum__row">
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="7"
                onClick={(): void => onFlashKey("7")}
              >
                Z
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="8"
                onClick={(): void => onFlashKey("8")}
              >
                X
              </div>
              <div
                className="drum__button"
                role="button"
                tabIndex={0}
                id="9"
                onClick={(): void => onFlashKey("9")}
              >
                C
              </div>
            </div>
          </div>
          <div className="drum__controls-container">
            <div className="drum__slider-container">
              <p className="drum__label">Power</p>
              <label htmlFor="power" className="drum__switch">
                <input
                  id="power"
                  type="checkbox"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setState({ ...state, power: e.target.checked })
                  }
                />
                <span className="drum__slider" />
              </label>
            </div>
            <h4 id="current" className="drum__current">
              {current}
            </h4>
            <input
              className="drum__volume"
              type="range"
              min="0"
              max="100"
              step="1"
              onChange={onSetVolume}
            />
            <div className="drum__slider-container">
              <p className="drum__label">Kit</p>
              <label htmlFor="soundBoard" className="drum__switch">
                <input
                  id="soundBoard"
                  type="checkbox"
                  defaultChecked
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setState({
                      ...state,
                      kit: e.target.checked ? "heater" : "piano",
                      current: e.target.checked ? "Heater Kit" : "Smooth Piano Kit",
                    });
                  }}
                />
                <span className="drum__slider" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
