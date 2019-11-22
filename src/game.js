function IsVictory(cells) {
  //TODO: obviously implement this method
  return false;
}

const KillEm = {
  name: "KillEm",

  setup: () => ({
    currentTurn: 0,
    players: [
      {
        playerNumber: 0,
        color: 0x00ff00,
        username: "",
        marbles: [undefined, undefined, undefined, undefined],
        transparentMarble: [undefined, undefined, undefined],
        startingTile: "MoveTile14"
      },
      {
        playerNumber: 1,
        color: 0xff0000,
        username: "",
        marbles: [undefined, undefined, undefined, undefined],
        transparentMarble: [undefined, undefined, undefined],
        startingTile: "MoveTile25"
      },
      {
        playerNumber: 2,
        color: 0x0000ff,
        username: "",
        marbles: [undefined, undefined, undefined, undefined],
        transparentMarble: [undefined, undefined, undefined],
        startingTile: "MoveTile36"
      },
      {
        playerNumber: 3,
        color: 0xffff00,
        username: "",
        marbles: [undefined, undefined, undefined, undefined],
        transparentMarble: [undefined, undefined, undefined],
        startingTile: "MoveTile3"
      }
    ],
    dieOne: 0,
    dieTwo: 0
  }),

  moves: {
    clickCell(G, ctx, id) {
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer;
      }
    },

    rollDice(G, ctx, dieOne, dieTwo) {},

    updateMarblePosition(G, ctx, playerNumber, marbleNumber, position) {
      G.players[playerNumber].marbles[marbleNumber].position = position;
    }
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (IsVictory(G.players)) {
      return { winner: ctx.currentPlayer };
    }
  }
};

export { KillEm };
