

let key = '5487bdea15ed96000309e9dba96cb79b'
// let city = 'pune'

const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name'),
temp = document.getElementById('temp'),
temp_status = document.getElementById('temp_status'),
temp_real_val = document.getElementById('temp_real_val')


const getInfo = async(e) =>{
    e.preventDefault();
    let cityVal = cityName.value
    

    if(cityVal === ''){
        city_name.innerText = 'Please write the name before search'
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${key}`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            // console.log(arrData)

            temp_real_val.innerText = arrData[0].main.temp
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMood == 'Clouds'){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if (tempMood == 'Rain'){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }

        }catch{
            city_name.innerText = 'Please enter city name properly'

        }
    }
}

submitBtn.addEventListener('click',getInfo);