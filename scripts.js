const button = document.querySelector('button')
const select = document.getElementById('select-currency')

const dolar = 5
const euro = 6
const bitcoin = 0.0000071

const clickConversor = () => {
    const input = document.querySelector('input').value
    const realValue = document.getElementById('real-value')
    const currencyValue = document.getElementById('currency-value')

    realValue.innerHTML = Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(input)
    if (select.value === 'US$ Dólar Americano') {
        currencyValue.innerHTML = Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input / dolar)
    } else if (select.value === '€ Euro') {
        currencyValue.innerHTML = Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input / euro)
    } else {
        currencyValue.innerHTML = Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }).format(input * bitcoin)
    }

}

changeCurrency = () => {
    const currencyCountry = document.getElementById('currency-country')
    const currencyName = document.getElementById('currency-name')

    if (select.value === 'US$ Dólar Americano') {
        currencyCountry.src = "./assets/estados-unidos.svg"
        currencyName.innerHTML = 'Dólar Americano'
    } else if (select.value === '€ Euro') {
        currencyCountry.src = "./assets/euro.svg"
        currencyName.innerHTML = 'Euro'
    } else {
        currencyCountry.src = "./assets/Bitcoin.png"
        currencyName.innerHTML = 'Bitcoin'
    }

    clickConversor()
}

button.addEventListener('click', clickConversor)
select.addEventListener('change', changeCurrency)