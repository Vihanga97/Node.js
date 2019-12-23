const fetchData = callback => {
    setTimeout(() => {
        callback('I fetched! And oh, hi there! I take even longer to print!');
    }, 1500);
}

/*setTimeout(() => {
    console.log('Hi! I take time to print!');
    fetchData(fetchedText => {
        console.log(fetchedText);
    });
},2000 );*/

const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I fetched! And oh, hi there! I take even longer to print!');
        }, 1500);
    }); 
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData1()
        .then(text => {
            console.log(text);
            return fetchData1();
    })
    .then(text1 => {
        console.log(text1);
    });
}, 2000);

console.log('Hi! I don\'t take time to print!'); 