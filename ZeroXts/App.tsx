import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { trigger } from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const winner = calculateWinner(board);

  const handlePress = (index: number) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: number) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
        <Text style={styles.squareText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const getStatus = () => {
    if (winner) {
      trigger('impactHeavy', options);
      return `Winner: ${winner}`;
    } else if (board.every(square => square)) {
      trigger('impactHeavy', options);
      return 'Draw!';
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>ZeroXts - Play Tic - Tac - Toe</Text>
      </View>
      <View style={styles.game}>
        <Text style={styles.status}>{getStatus()}</Text>
        <View style={styles.board}>
          <View style={styles.row}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </View>
          <View style={styles.row}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </View>
          <View style={styles.row}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </View>
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetButtonText}>Reset Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      trigger('rigid', options);
      return squares[a];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    backgroundColor: '#6200ee',
    padding: 15,
    alignItems: 'center',
  },
  navTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  game: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    borderWidth: 3,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default App;