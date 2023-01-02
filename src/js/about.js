import '../css/main.css'
import './mode'

import request from './request'
import { createCounryInfo } from './updateUI'

const querySting = window.location.search
const urlParams = new URLSearchParams(querySting)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/${country}`

request(countryAPI).then((data) => {
    createCounryInfo(data[0])
}).catch((err) => {
    alert(err.message)
})