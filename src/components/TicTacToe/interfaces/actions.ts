import { PlayerState } from "./components";

export const CHANGE_PLAYER_AFTER_MOVE = "CHANGE_PLAYER_AFTER_MOVE";
export const RESET = "RESET";
export const SET_NUM_PLAYERS = "SET_NUM_PLAYERS";
export const SETUP_PLAYERS = "SETUP_PLAYERS";
export const PLAYER_SCORE = "PLAYER_SCORE";
export const UPDATE_CURRENT_TURN = "UPDATE_CURRENT_TURN";
export const RESET_SCORE = "RESET_SCORE";

export interface ChangePlayerAction {
  type: typeof CHANGE_PLAYER_AFTER_MOVE;
}

export interface ResetAction {
  type: typeof RESET;
}

export interface SetNumPlayersAction {
  type: typeof SET_NUM_PLAYERS;
  numPlayers: number;
}

export interface SetupPlayersAction {
  type: typeof SETUP_PLAYERS;
  setup: PlayerState;
}

export interface PlayerScoreAction {
  type: typeof PLAYER_SCORE;
  player: number;
}

export interface ResetScoreAction {
  type: typeof RESET_SCORE;
}

export interface UpdateCurrentTurnAction {
  type: typeof UPDATE_CURRENT_TURN;
  turn: string;
}

export const ADD_MOVE = "ADD_MOVE";
export const RESET_BOARD = "RESET_BOARD";

export interface AddMoveAction {
  type: typeof ADD_MOVE;
  tiles: number[];
}

export interface ResetBoardAction {
  type: typeof RESET_BOARD;
}

export type BoardActionsTypes = AddMoveAction | ResetBoardAction;

export type PlayerActionTypes =
  | ChangePlayerAction
  | ResetAction
  | SetNumPlayersAction
  | SetupPlayersAction
  | PlayerScoreAction
  | ResetScoreAction
  | UpdateCurrentTurnAction;
