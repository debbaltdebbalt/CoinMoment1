function coin(id, name, price, img, rateToFiat, minToFiat) {
    return {
        id, name, price, img, rateToFiat, minToFiat
    }
}

var coins2 = [];

//Метод получиния данных с бэка
(async () => {
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);
    response = await response.json();
    response.forEach((element) => {
        coins2.push(coin(
            element.commit.author.name, //Пример приема данных
            element.id,
            element.name,
            element.price,
            element.img,
            element.rateToFiat,
            element.minToFiat
        ));
    })
})();
console.log(coins2); //вывод данных из запроса
//Пример массива данных. Нужно закоментировать, когда приступишь к работе
const coins = [
    coin(1, 'BTC1', 100, '../static/img/btc.svg', 1, 100),
    coin(2, 'BTC2', 200, '../static/img/btc.svg', 3.05, 13),
    coin(3, 'FIAT', 300, '../static/img/usdt.svg', null, 200),
    coin(4, 'BTC4', 400, '../static/img/btc.svg', 6, 18),
    coin(5, 'BTC5', 500, '../static/img/btc.svg', 5000, 20),
];

new Vue({
    el: '#exchange',
    data: {
        coins: coins,
        fiatCoinId: 3,
        firstCoin: 'Select Coin',
        firstCoinSum: 0,
        isFirstCoinSelected: false,
        secondCoin: 'Select Coin',
        secondCoinSum: 0,
        isSecondCoinSelected: false
    },
    methods: {
        selectFirstCoin: function (item) {
            this.firstCoin = item;
            this.isFirstCoinSelected = true;
            this.isSecondCoinSelected = false;
            if (item.id != 3) {
                this.secondCoin = coin(3, 'FIAT', 300, '../static/img/usdt.svg', null, 200);
            } else {
                this.secondCoin = coin(1, 'BTC1', 100, '../static/img/btc.svg', 1, 100);
            }
            this.changeFirstCoinSum({target: {value: this.firstCoinSum}});
        },
        selectSecondCoin: function (item) {
            this.secondCoin = item;
            this.isSecondCoinSelected = true;
            this.isFirstCoinSelected = false;
            if (item.id != 3) {
                this.firstCoin = coin(3, 'FIAT', 300, '../static/img/usdt.svg', null, 200);
            } else {
                this.firstCoin = coin(1, 'BTC1', 100, '../static/img/btc.svg', 1, 100);
            }
            this.changeSecondCoinSum({target: {value: this.secondCoinSum}});
        },
        changeFirstCoinSum: function (event) {
            this.firstCoinSum = event.target.value;
            this.secondCoinSum =
                this.firstCoin.id == 3 ?
                    this.firstCoinSum / this.secondCoin.rateToFiat : this.firstCoinSum * this.firstCoin.rateToFiat;
        },
        changeSecondCoinSum: function (event) {
            this.secondCoinSum = event.target.value;
            this.firstCoinSum =
                this.secondCoin.id == 3 ?
                    this.secondCoinSum * this.firstCoin.rateToFiat : this.secondCoinSum / this.secondCoin.rateToFiat;
        },
        exchange: function () {
            return this.firstCoin.id == 3 ? this.firstCoin.minToFiat / this.secondCoin.rateToFiat : this.firstCoin.minToFiat * this.firstCoin.rateToFiat
        }
    }
});