import { PlayerState } from "../interfaces/components";
import {
  CHANGE_PLAYER_AFTER_MOVE,
  ChangePlayerAction,
  RESET,
  ResetAction,
  SETUP_PLAYERS,
  SetupPlayersAction,
  SET_NUM_PLAYERS,
  SetNumPlayersAction,
  PLAYER_ONE_SCORE,
  PLAYER_TWO_SCORE,
  PlayerOneScoreAction,
  PlayerTwoScoreAction,
  UPDATE_CURRENT_TURN,
  UpdateCurrentTurnAction,
  RESET_SCORE,
  ResetScoreAction,
  SET_CURRENT_PLAYER,
  SetCurrentPlayerAction,
} from "../interfaces/player.actions";

export const changePlayer = (): ChangePlayerAction => ({
  type: CHANGE_PLAYER_AFTER_MOVE,
});

export const reset = (): ResetAction => ({
  type: RESET,
});

export const setNumPlayers = (numPlayers: number): SetNumPlayersAction => ({
  type: SET_NUM_PLAYERS,
  numPlayers,
});

export const setCurrentPlayer = (player: number): SetCurrentPlayerAction => ({
  type: SET_CURRENT_PLAYER,
  player,
});

export const setupPlayers = (setup: PlayerState): SetupPlayersAction => ({
  type: SETUP_PLAYERS,
  setup,
});

export const playerOneScore = (): PlayerOneScoreAction => ({
  type: PLAYER_ONE_SCORE,
});

export const playerTwoScore = (): PlayerTwoScoreAction => ({
  type: PLAYER_TWO_SCORE,
});

export const resetScore = (): ResetScoreAction => ({
  type: RESET_SCORE,
});

export const updateCurrentTurn = (turn: string): UpdateCurrentTurnAction => ({
  type: UPDATE_CURRENT_TURN,
  turn,
});