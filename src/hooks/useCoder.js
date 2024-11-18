

const useCoder = () => {
    const abcCoder = {
        0: 'Q',
        1: 'w',
        2: 'e',
        3: 'a',
        4: 'g',
        5: 'v',
        6: 'i',
        7: 'l',
        8: 'z',
        9: 'h',
    };

    const abcDecoder = {
        'Q': 0,
        'w': 1,
        'e': 2,
        'a': 3,
        'g': 4,
        'v': 5,
        'i': 6,
        'l': 7,
        'z': 8,
        'h': 9,
    };
    
    const decoder = (codedNumber) => {
        return codedNumber.match(/\d{2,3}/g).map(item => {
            return abcDecoder[String.fromCharCode(item)]
        }).join('')
    }
    
    const createCode = (code) => {
        let result = '';
        code.split('').forEach(item => {
            if (!isNaN(item)) {
                result += item;
            }   
        })
        result = result.slice(result.length-6) * 581 + ''
        return result.slice(result.length-6);
    }
    
    const encoder = (codePath) => {
        let codedNumber = '';
        codePath.split('').forEach(item => {
            let temp = '';
            const char = abcCoder[item];
    
            if (+item % 2 === 0) {
                temp = char;
                temp += char.charCodeAt(0) + abcCoder[9-(+item)]
            } else {
                temp = abcCoder[9-(+item)];
                temp += char.charCodeAt(0) + char
            }
            
            codedNumber += temp;
        });
        return codedNumber;
    }

    return {createCode, decoder, encoder}
}

export default useCoder;
