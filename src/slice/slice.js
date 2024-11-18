import { createSlice} from "@reduxjs/toolkit";


const testSlice = createSlice({
    name: 'test',
    initialState: {
        data: Array(9).fill(Array(9).fill(0)),
        isNextX: true,
        prevStep: 10,
        nextField: [0,1,2,3,4,5,6,7,8],
        winPosition: Array(9).fill(0),
        winner: 0,
        combinations: [    
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        clicked: false,
        darkMode: false,
        playersNum: 1
    },
    reducers: {
        addData: (state, action) => {
            state.data[action.payload[0]][action.payload[1]] = state.isNextX ? 1 : 2;
            state.isNextX = !state.isNextX;
            state.prevStep = action.payload[0];
            state.nextField = [action.payload[1]];
        }, 
        setWinnerOfField: (state, action) => {
            state.winPosition[action.payload[0]] = action.payload[1];
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        },
        setPrevStep: (state, action) => {
            state.prevStep = action.payload;
        },
        setNextFieldAny: (state, action) => {
            state.nextField = action.payload;
        },
        clearContainer: (state, action) => {
            state.data = Array(9).fill(Array(9).fill(0));
            state.isNextX = true;
            state.prevStep = 10;
            state.nextField = [0,1,2,3,4,5,6,7,8];
            state.winPosition = Array(9).fill(0);
            state.winner = 0;
            state.timeStep = 30;
            state.combinations = [    
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
        },
        setTimeStep: (state, action) => {
            state.timeStep -= action.payload;
        },
        setDataFromDB: (state, action) => {
            state.data = action.payload.data;
            state.isNextX = action.payload.isNextX;
            state.prevStep = action.payload.prevStep;
            state.nextField = action.payload.nextField;
            state.winPosition = action.payload.winPosition;
            state.winner = action.payload.winner;
        },
        setDataTest: (state, action) => {
            state.data[action.payload[0]][action.payload[1]] = state.isNextX ? 1 : 2;
            state.isNextX = !state.isNextX;
        },
        setCliked: (state, action) => {
            state.clicked = action.payload
        },
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            console.log(state.darkMode)
        },
        set: (state, action) => {
            state[action.payload[1]] = action.payload[0]
        }
    },
});

const {actions, reducer} = testSlice;

export default reducer;

export const {
    addData,
    setWinnerOfField,
    setWinner,
    setPrevStep,
    setNextFieldAny,
    clearContainer,
    setTimeStep,
    setDataFromDB,
    setDataTest,
    setCliked,
    setDarkMode,
    set
} = actions;
 