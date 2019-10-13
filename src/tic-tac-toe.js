class TicTacToe {

    constructor() {
        this.field  = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        for (var i = 0; i < this.field.length; i++) {
           if (this.field[i][0] != null && this.field[i][0] == this.field[i][1] && this.field[i][1] == this.field[i][2]) {
               return this.field[i][0];
           }

           if (this.field[0][i] != null && this.field[0][i] == this.field[1][i] && this.field[1][i] == this.field[2][i]) {
            return this.field[0][i];
           }
        }

        if (this.field[0][0] != null && this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) {
            return this.field[0][0];
        }

        if (this.field[0][2] != null && this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0]) {
            return this.field[0][2];
        }
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
