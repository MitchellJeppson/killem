function IsVictory(cells) {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pos of positions) {
        const symbol = cells[pos[0]];
        let winner = symbol;
        for (let i of pos) {
            if (cells[i] !== symbol) {
                winner = null;
                break;
            }
        }
        if (winner != null) return true;
    }

    return false;
}

export const TicTacToe = {
    name: "tic-tac-toe",

    setup: () => ({
        cells: Array(9).fill(null)
    }),

    moves: {
        clickCell(G, ctx, id) {
            if (G.cells[id] === null) {
                G.cells[id] = ctx.currentPlayer;
            }
        }
    },

    turn: { moveLimit: 1 },

    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (G.cells.filter(c => c === null).length == 0) {
            return { draw: true };
        }
    }
};
