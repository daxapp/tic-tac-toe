export const startGameData = {
    data: Array(9).fill(Array(9).fill(0)),
    isNextX: true,
    prevStep: 10,
    nextField: [0,1,2,3,4,5,6,7,8],
    winPosition: Array(9).fill(0),
    winner: 0,
    playersNum: 1
}

export const combinations = [    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



