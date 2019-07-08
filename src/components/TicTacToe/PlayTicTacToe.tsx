import * as React from "react";
import { connect } from "react-redux";
import { PlayProps, PlayState, GameWon, Move } from "./interfaces/components";
import { reset, changePlayer } from "./actions/player.action";
import { addMove, resetBoard } from "./actions/board.action";

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

class TicTacToe extends React.Component<PlayProps, PlayState> {
  public readonly state = {
    gameFinished: false,
    endGame: false,
  };

  public componentDidMount(): void {
    setTimeout((): void => {
      const p1score = document.getElementById("p1score");
      p1score.style.visibility = "visible";
      p1score.className = "animated fadeIn";
      const p2score = document.getElementById("p2score");
      p2score.style.visibility = "visible";
      p2score.className = "animated fadeIn";
    }, 1000);
  }

  public componentWillUpdate(nextProps, nextState): void {
    document.getElementById("currentTurn").className = "";
    if (nextState.gameFinished) {
      this.onResetBoard();
    }
  }

  public componentDidUpdate(): void {
    document.getElementById("currentTurn").className = "animated fadeIn";
    setTimeout((): void => {
      document.getElementById("currentTurn").className = "";
    }, 300);
  }

  public onTileClick = (event): void => {
    const { origBoard, currentPlayer } = this.state;
    const { player, board } = this.props;
    const { noPlayers, playerInfo } = player;
    const player1Counter = playerInfo[0].counter;
    const player2Counter = playerInfo[1].counter;
    const id = event.target.id;
    document.getElementById("currentTurn").className = "";

    if (typeof origBoard[id] === "number") {
      if (!this.checkTie() && noPlayers === 1) {
        this.takeTurn(id, player1Counter);
        if (!this.checkTie() && !this.checkWin(player1Counter)) {
          this.setState({ endGame: true, currentPlayer: 2 });
          setTimeout((): void => {
            this.takeTurn(this.bestSpot(), player2Counter);
            if (this.checkTie() || this.checkWin(player2Counter)) {
              this.setState({ gameFinished: true });
            } else {
              this.setState({ endGame: false, currentPlayer: 1 });
            }
          }, 1000);
        }
      } else {
        if (currentPlayer === 1) {
          this.takeTurn(id, player1Counter);
          this.setState({
            currentPlayer: 2,
          });
        } else if (currentPlayer === 2 && !this.checkTie()) {
          this.takeTurn(id, player2Counter);
          this.setState({
            currentPlayer: 1,
          });
        }
      }
    }
  };

  private takeTurn = (squareId: string, playerCounter: string): void => {
    const { origBoard, currentPlayer } = this.state;
    const { player, addMove, changePlayer } = this.props;
    const { player1, player2, noPlayers } = player;

    const newBoard = origBoard;
    newBoard[squareId] = playerCounter;

    const tile = document.getElementById(squareId);
    tile.innerText = playerCounter;
    tile.className =
      currentPlayer === 1
        ? "tile-text-p1 animated fadeIn"
        : "tile-text-p2 animated fadeIn";

    const gameWon = this.checkWin(playerCounter);
    changePlayer();
  };

  public checkWin = (player): GameWon => {
    const { origBoard: board } = this.state;
    const plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;
    for (const [index, win] of winCombos.entries()) {
      if (win.every(elem => plays.indexOf(elem) > -1)) {
        gameWon = {
          index: index,
          player: player,
        };
        break;
      }
    }
    return gameWon;
  };

  private gameOver = (gameWon: GameWon): void => {
    const { player1Score, player2Score, currentPlayer } = this.state;
    const { player } = this.props;
    const { playerInfo, noPlayers } = player;
    const player1 = playerInfo[0];
    const player2 = playerInfo[1];

    for (const index of winCombos[gameWon.index]) {
      document.getElementById(index).style.backgroundColor =
        gameWon.player === player1.counter ? "green" : "red";
      document.getElementById(index).className = "tile-text animated tada";
    }
    if (noPlayers === 1) {
      gameWon.player === player1.counter
        ? document.getElementById("p1score").classList.add("scoringAnimation")
        : document.getElementById("p2score").classList.add("scoringAnimation");

      gameWon.player === player1.counter
        ? this.setState({
            currentTurn: `${player1.name} Wins!`,
            player1Score: player1Score + 1,
            currentPlayer: 2,
          })
        : this.setState({
            currentTurn: "The Computer Wins!",
            player2Score: player2Score + 1,
            currentPlayer: 1,
          });
    } else {
      gameWon.player === player1.counter
        ? this.setState({
            currentTurn: `${player1.name} Wins!`,
            player1Score: player1Score + 1,
          })
        : this.setState({
            currentTurn: `${player2.name} Wins!`,
            player2Score: player2Score + 1,
          });
    }
    this.setState({
      endGame: true,
      gameFinished: true,
      currentPlayer: currentPlayer === 1 ? 2 : 1,
    });
  };

  private onResetClick = (): void => {
    setTimeout((): void => {
      this.setState({
        currentPlayer: 1,
        origBoard: Array.from(Array(9).keys()),
        player1Score: 0,
        player2Score: 0,
        endGame: false,
      });

      for (let i = 0; i < 9; i++) {
        const index = i.toString();
        document.getElementById(index).style.background = "none";
        document.getElementById(index).innerText = "";
      }
    }, 200);
  };

  private emptyTiles = (): number[] => {
    const { origBoard } = this.state;
    return origBoard.filter((s): boolean => typeof s == "number");
  };

  private bestSpot = (): string => {
    const { player } = this.props;
    const { difficulty, playerInfo } = player;
    const player2Counter = playerInfo[1].counter;
    const length = this.emptyTiles().length;
    const randomNum = Math.floor(Math.random() * Math.floor(length));

    switch (difficulty) {
      case 1:
        return this.emptyTiles()[0].toString();
      case 2:
        if (length === 1) {
          return this.emptyTiles()[0].toString();
        }
        return this.emptyTiles()[randomNum].toString();
      case 3:
        return this.minimax(player2Counter).index.toString();
    }
  };

  private onResetBoard = (): void => {
    const { currentPlayer } = this.state;
    const { player } = this.props;
    const { noPlayers, player1, player2 } = player;

    setTimeout((): void => {
      this.setState({
        origBoard: Array.from(Array(9).keys()),
        endGame: false,
        gameFinished: false,
        currentTurn:
          (currentPlayer === 2 && noPlayers === 2 && `It's ${player2.name}'s turn`) ||
          (currentPlayer === 2 && noPlayers === 1 && "AI is thinking...") ||
          (currentPlayer === 1 && `It's ${player1.name}'s turn`),
      });
      document.getElementById("p1score").className = "";
      document.getElementById("p2score").className = "";

      for (let i = 0; i < 9; i++) {
        const index = i.toString();
        document.getElementById(index).style.background = "none";
        document.getElementById(index).innerText = "";
      }

      if (currentPlayer === 1 && noPlayers === 1) {
        this.setState({ endGame: true });
        setTimeout((): void => {
          this.takeTurn(this.bestSpot(), player2.counter);
          this.setState({ currentPlayer: 1, endGame: false });
        }, 1000);
      }
    }, 1500);
  };

  private checkTie = (): boolean => {
    if (this.emptyTiles().length === 0 && !this.checkWin("X") && !this.checkWin("O")) {
      this.setState({
        gameFinished: true,
        currentTurn: "It's a draw!",
        endGame: true,
      });
      return true;
    }
    return false;
  };

  private minimax = (counter): Move => {
    const { origBoard } = this.state;
    const { player } = this.props;
    const { playerInfo } = player;
    const player1 = playerInfo[0];
    const player2 = playerInfo[1];

    const availSpots = this.emptyTiles();

    if (this.checkWin(player1.counter)) {
      return {
        score: -10,
      };
    } else if (this.checkWin(player2.counter)) {
      return {
        score: 10,
      };
    } else if (availSpots.length === 0) {
      return {
        score: 0,
      };
    }

    const moves: Move[] = [];
    for (let i = 0; i < availSpots.length; i++) {
      const move: Move = {};
      move.index = origBoard[availSpots[i]];
      origBoard[availSpots[i]] = counter;
      if (counter == player2.counter) {
        const result = this.minimax(player1.counter);
        move.score = result.score;
      } else {
        const result = this.minimax(player2.counter);
        move.score = result.score;
      }

      origBoard[availSpots[i]] = move.index;

      moves.push(move);
    }
    let bestMove;
    if (counter === player2.counter) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  };

  public render(): JSX.Element {
    const styles = {
      fontFamily: "Oswald",
    };

    const { player1Score, player2Score, currentTurn, endGame } = this.state;
    const { player } = this.props;
    const { difficulty, noPlayers } = player;
    const player1 = playerInfo[0];
    const player2 = playerInfo[1];
    return (
      <div style={styles}>
        <div className="scores">
          <div className="player1score">
            <div className="player1Label animated slideInLeft">
              {player1.name || "Player 1"}:{" "}
            </div>
            <div id="p1score">{player1Score}</div>
          </div>
          <div className="player2score">
            <div className="player2Label animated slideInRight">
              {noPlayers === 2
                ? player2.name
                : `${(difficulty === 1 && "Easy") ||
                    (difficulty === 2 && "Normal") ||
                    (difficulty === 3 && "Unbeatable")} AI`}
              :
            </div>
            <div id="p2score">{player2Score}</div>
          </div>
        </div>
        <div id="currentTurn">{currentTurn}</div>
        <div id="backBtnContainer" role="button" tabIndex={0} onClick={this.onResetClick}>
          <i className="fa fa-undo" />
        </div>
        <div className="grid">
          <div className="tile">
            <div
              className="tile-text"
              id="0"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="1"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="2"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="3"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="4"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="5"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="6"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="7"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
          <div className="tile">
            <div
              className="tile-text"
              id="8"
              role="button"
              tabIndex={0}
              onClick={!endGame ? this.onTileClick : undefined}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player, board }) => ({ player, board });

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset()),
  resetBoard: () => dispatch(resetBoard()),
  addMove: (tile, currentPlayer) => dispatch(addMove(tile, currentPlayer)),
  changePlayer: () => dispatch(changePlayer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToe);
