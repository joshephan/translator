const googleTranslate = require('google-translate-api');
let langAry = ['en','ko','ja','es','zh-TW','hi', 'ar', 'th', 'de']; 

let hasNull = (target) => {
    for (var member in target) {
        if (target[member] == null)
            return true;
    }
    return false;
};

let airTranslater = (nation, word) => {
    let wordObj = {
        'en' : null,
        'ko' : "'" + word + "'",
        'ja' : null,
        'es' : null,
        'zh-TW' : null,
        'hi' : null,
        'ar' : null,
        'th' : null,
        'de' : null
    };
    for (var i = 0; i < langAry.length; i++) {
        let item = langAry[i];
        googleTranslate(word, {from: nation, to: langAry[i]})
        .then(res => {
            wordObj[item] = "\"" + res.text + "\"";
        }).catch(err => {
            console.error(err);
        });
    }    
    
    let countCheck = setInterval(() => {
        let wordAry = [wordObj['en'], wordObj['ko'], wordObj['ja'], wordObj['es'], wordObj['zh-TW'], wordObj['hi'], wordObj['ar'], wordObj['th'], wordObj['de']];
        if (!hasNull(wordObj)) {
            console.log(wordObj['en'] + " : [" + wordAry + "],");
            clearInterval(countCheck); 
            process.exit();
        } 
    }, 1000);
}

airTranslater("ko", `번역 테스트`);


