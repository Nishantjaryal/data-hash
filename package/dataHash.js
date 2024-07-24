keyboard_characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?',
    ' ', '\t', '\n', '\\'
]

let hash_values_array = [
    'vlPZL134L4BKL3ilOlO2HtuIDwvZ81mrNc1oXuo',
    'iBErnpMnljFsrcRucn62GbSpJacCNOfhEz8hRhz',
    'daIdlbPOuIOn0ZL8bKDq0BaSeJT0ZK3IeUZlkH2',
    'd6sxWsnUgIomqJbcopCxGbUTNZFbX00GLglVDbg',
    'VY5tdZCLe1MNcc8czLNr4Bk8vzSoHOXTIwDYuWd',
    'eKZYuqcGMLDOLg6yC1ZcQeBj8zQ3dQU95Lag2wt',
    '0eges4FOLJEKRMplcneHSpuLutqY0QLMo51yX5w',
    'OSwX8a9KuAAjIM8Jev9FpPbmRl1XIVucTYPbKDY',
    'p3huuIBGHUOgs7AvQOtDfN0qpb9yDarPgsS5HYl',
    'sdlq2dMB0DHxIwe4IYISjXxDadJOGZjdvWtv3v5',
    'U6F25gIrl9VsSe64CM94mNUoamRqORfjHdj5H4p',
    'gVKVE6ihSnOs28jdjbFvc83xu30U06LL6tqQ5Fp',
    '3fvlDmjcnnUbipQgwoY4wBSanvViEccypJVl0An',
    'L8mKxDzzW0Y6a6kdwCruv3MidUjdqfPRdoLXEzF',
    'J4uzJp48BwKuTYpmI3rzjAuYosmstf44IvVjROM',
    'n0UxjIv3533Fvp2qHxMcsXZ12VAwCKEkwaY1NPT',
    'bEUVeMYSPlASAFUY7mX5TfsFlesBdAwkPDsMqMw',
    'TlejO7LKZRZGUWNzFqrNz1Z3ud0AC14Luevt2un',
    'dN94Hvlzl5tk5e4RusixgEgehcOpNnBYr6ITkzH',
    'hAln7skTcRD2aQtgxBHz1519WGCfB5dcg02ZFyw',
    'ngKlKbIaQFXvmnKu1ePiMTfguPRhLZOVbLfjop7',
    'cMZ7iDNXZKv7nBuyEA7jUlCH89s9jtBmZhoxT2b',
    'ifuO8SG4fugZdEVb4O8HDKRUfXdujiqvGd8OOgY',
    'FLSg0rFxzJQQQZsuH00tiEYqHcpQb2i14VAGh53',
    'BLXgeRWqwVWdkAJ0vYwB2U11ebMAMHfhrZ8usgz',
    'z8iDXtRVNUuv3HSXR18YThwYXSVhTOyja5bsFpX',
    'RG40YigBdqY6S56auYqbswo46aiJeLhh0ZdRZQQ',
    'zQFVn7IUJJqVgzrbXUP1BCNNAFwBzGfdsh6LrI8',
    'sote6Oi5WTehUxhwpi4vzxNs5xMF1dc0ITnG6Bq',
    'LWy1Xr4FZ41Iv1TU2xlvLm3YIYhELwEM4ldxEgC',
    'EhbV01frHTmuU0l2UV6FBXgqLgqclItkVg7Xtlx',
    'h2UkgSSkoMd0SxvgseQx5GdOfnRnC1CnCqqWkk0',
    'GWIhGONoLivSLI9xaa3JdnDO5cdK0BW0KvJVvWj',
    'kSi82MOkOatUTOsC5Cdj4dE4FIKltJhqZrl6TpC',
    'cOz1vDXLz2Wdyk7Ty0xWM6D6M1jymDNGzSsZgUF',
    'TUlLywYxJg2gnurYTyTWrKJ2IsJIFEmuJe72flo',
    'UDNeEmkgVpcD30c2Mc584dKXFP1p38rv0iI9i2v',
    'ZPErLqfykXEcMGTVEuFbHEnXORdrbwTOKBu9Zpl',
    'kmpOI5JLTYo0DEQjvj9puN7Cs6CMubEfjtZMS9L',
    'guAcHXzxKuYgGPQnPdFMKhYWf2i00nkvsI3yKKz',
    'oAcmBn3bwkWB3cnR0WuvgfZSzFPPE7Bm0LrAXW8',
    'JBlOn9OnNj2laBwPTSM9qmqUCz9ABx6p5pcjLLi',
    'AeMwnzkvf1EouHKxbwlVNxOf2x9gPnCS9h5OaxD',
    '02bIftYZsUPg2PCA1fk9A1PDtlZxjG6qTGJbgnC',
    'g7gzRuKggT0p73kXfaLVw0SkdB7DuUeM6bKlZIU',
    'JMs8Da61ugnpL3XQY57DCgFJpvAXU2PBxJa0L1T',
    'Muy3mqSMGaVsOlq1sjbwEZe3IDMWz5lSymJXA1n',
    'vdxty6EBs7mBLdDL7sZl2mr6McSKqZhQDO25iZt',
    'TSSVzGhLximxjsfZwU7O1Uzr295Kfp76sK9QVRF',
    'PTxNnO8FZzrcC5nWMoioBLRBD94BrujwIQt0FoS',
    'df57lUmv3HU3eh5DnLxRjV9wwgfzyZHwcC4GYC4',
    'OMJkNU9M20CMvFVePB5TAU0DEgQzbT3P0giHDsi',
    'OajlqMScjowu4F4DLsLkPOB99vlHLY9mUjO3Vhd',
    'ppdF7QJREuAypC2jWgpMycpzpF084ek681l0Tn7',
    'L4jLdW7g2rWOP7VVT81VmoKkK1E3AnFl4NJx9YY',
    'Zuv3jXFcnu1FE7FRxyDIY5FY64rtfc1r0IhDSM7',
    'NHCBJFWLtIMf8RRwqzaKJJud4lBuGDERjJZh5NO',
    'NKLpUPluZPLz5uHimlEKfSb78MwfLvLkHGOZfXu',
    'mWeNwBvl6G7AZLeQuSD7RF8eZrDnnQfLtewbyq8',
    'wR3uWnVIOvFxApJNL6rRNXhdvFik0cb97PDDzNE',
    '0H5g7a6RKwkNkcCxlIHY2ipqc6eFq3pb3MgoYG3',
    '0jHU0WrosVNJoYfsJV646DjwE3M5wo08y2SL5yy',
    'I6Y69CvQf8JrncHgyvGY68HrvuciSaVKLddmk4i',
    'n7YJTHkdz4TW6c5ZTkEOrASq274KFkQQnSMl21X',
    'g5LXwS534ue55zj7ySK9GRmbDlyu9uivmqgCuT9',
    '4L10Ter2S8fQI1Xt9CZC3sEFXKIS6HvRx1ulVem',
    'bhFj2jGdpz72HzDLK3TRVQ7T8iMTH7QBZ2EZcWW',
    'sfjVY1Rt0nQOiNS2UGkuni5Ap8SZG3yTRompwpg',
    'MRuFzADJdGp7A43BdvY89t2x3jZMJeOtatpg2gf',
    'twcRSJMUFJlzpQmWyCdzWOhXfQpT2LC0UI7d03y',
    'N3Y19TCKTwtqhcFJgpAP3bLuHFXrpw8gr49JSol',
    'wyAmnWfqTB1tShcmAoPERDRuk6H9MJ0VQkBMmSC',
    'IO3iO7CxBIQOWeyJaVkzgndZrlnEAVkrtCxNqjP',
    'GhqDdjaJwXrYJRBIxXn5ATAlrlxjG5AaIojN3yU',
    'BnDUX18AQkYVrvnVhvyNcuWbPTfICvER5jfFJO5',
    'R8cTDZRzZGOaWFrsESebgX6JJEu2g2rX2byFbkU',
    'sdkTXpbMzd0iKYtpg5sD9g35dsqkWyHOWh7SGKG',
    'IvnTk08tF79DncNHGimRrwUb045qNgEQL9yufau',
    'gBsHGQ7WGRPv88PuMR4x4ATa71WtOGwki6vE01c',
    'EfIMMiKrrQQT8no7KS04WgGmdcSb5KRwNPry2Ja',
    'SV4tNjKWHGyP6Ejibg0u3rQrIFi1zbjnmvxdCOh',
    'ICv93gi8Hxc764LebIlOt5OEQa3HXrOIWMOEJLN',
    'wIt91BAxmpkMkxsFNbSanxJNDPpsUzp2ECv8ZyJ',
    'M26bfO2LZVkXMQskX3agcdk0sk77FqtzfiwupnL',
    '5lYeekst6AAedUGFrtNnhP6yVEG6emM4qqCbv2N',
    'VGtV4TIt8sMxFI9ny2fFMNbA1EmLELA2ksnhkKO',
    'J3OEPvn9uQsdfLI8UahlvGgbJJr4sF5PrNNdCCM',
    '7Z5ZEwGq2tjrC7JwABYo6rJj2FdptVonEQZr9Zp',
    'HcUFa47t7nUgX9XPSFGarBRQU0o8C2vqQHlL3Qk',
    'x2KXWtw6AYicYBAAbAicKpKY9KCgFoudRDMsvFA',
    'dLoan2zqROmIPtLxPKvHJkwym9JZSI2fyl2BxD8',
    'CdCTVQblnvEOvxu6wlvcKrhQlVUSy6u1Pbrh8u7',
    'liwJs5gevNahOl1uLV7RmH6ZZRbCNGVxrWwMOqC',
    'utgfR9iSpKPh4XShS8J2jzPsgaiTUF8Aehnxmx4',
    'iD60LFUH7X6svXZuXBvSMOYyAfDxMyHjViZCW4r',
    '6C61yKbCoDmnWvAmvWUtWJ68PRsafYO6ZzLI6M4',
    '4wu1UHMBn6gFJQ6T122YmYLHWP5ST0uaUkJFCHc'
]



function salt() {
    let slt = "";
    for (let index = 0; index < 16; index++) {
        slt += keyboard_characters[Math.floor(Math.random()*(keyboard_characters.length-5))]    
    }
    return slt;
}


function hash(code_string) {

    let return_str = ""
    code = []
    let hash_code = []

    for (let i = 0; i < code_string.length; i++) {
        code.push(code_string[i])
    }

    let temp = 0;

    code.forEach(char => {
        keyboard_characters.forEach((element, index) => {
            if (element === char) {

                if (hash_code.length === 0) {

                    for (let ele = 0; ele < hash_values_array[index].length; ele++) {
                        const element = hash_values_array[index][ele];
                        hash_code.push(element)
                    }
                        
                    hash_code.push()

                }else if (hash_code.length === 39) {

                    let hash_values_array_value = []

                    for (let i = 0; i < hash_values_array[index].length; i++) {
                        hash_values_array_value.push(hash_values_array[index][i])
                    }

                    hash_values_array_value.forEach((ch, indx) => {
                        if ((temp+indx)>39) {
                            let indx_temp = (temp+indx)%39
                            hash_code[indx_temp] = ch;
                        }
                        else{
                            hash_code[(temp+indx)] = ch;
                        }
                        
                        temp++
                    })
                }
            }
        })
    });

    hash_code.forEach(char=>{
        return_str += char
    })

    return return_str.split('').reverse().join(''); // return reverse of what we have obtained

}
function Dataset(salt,text) {
    let position = 0
    hashable = ""
    const string = text.toString()
    const paper_Hash = salt.toString()

    while (position<(string.length-1) || position<(paper_Hash.length-1)){
        if (string[position]) {
            hashable+=string[position];
        }
        if (paper_Hash[position]) {
            hashable+=paper_Hash[position];
        }  
        position++
    }

    this.hashable = hashable
    return hashable;
}

Dataset.prototype.cook = function(){
   const hashedString = hash(this.hashable);
   return hashedString
}


module.exports = { Dataset,hash,salt }