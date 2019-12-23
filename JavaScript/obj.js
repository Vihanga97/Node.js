const grawie = {
    name : 'Uruputi Haputi Kotiputi Wadiputi Theththaputi Paththaputi Thkkdikidi Dinkitikiti Chankutukutu Weeraprameshwara',
    age : 22,
    owner : 'Good Girl',
    type : 'food',
    kitheth: ['soft', 'wet', 'long', 'pihina', 'gilina', 'passing', 'french', 'wululululu', 'australian'],
    modes: ['adale', 'thukka', 'pulupulu'],
    
    getEaten() { 
        return('Hi! I\'m '+this.name+
        '.\nNow, I\'m going to get eaten by '+this.owner+
        '.\nDon\'t worry! I love being eaten by her!'+
        '\nShe\'s been eating me for '+(this.age-20)+' years now!\n');
    },

    kithDescription() {
        this.kitheth.push('all the');
        for(let kith of this.kitheth){
            console.log('I like', kith, 'kitheth!');
        }
        console.log('\n');
        console.log(this.kitheth.map(boom => ('Vivi gives me '+boom+' kitheth')))
    }
};

//console.log(grawie.getEaten());
//grawie.kithDescription();

const spread = {...grawie};
console.log(spread);

const rest = (...args) => {
    return args;
}
console.log('Grawie', 'is', 'my', 'baby', 'boo');

const printName = ({name, getEaten}) => {
    return(name+'\n'+getEaten);
}
console.log(printName(grawie));

const {name, age} = grawie;
console.log(name, age);

const [mode1, mode2, mode3] = grawie.modes;
console.log(mode1, mode2, mode3);