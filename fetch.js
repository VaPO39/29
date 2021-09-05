const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {// третий параметр нужен для метода POST
    const headers = {
        'Content-Type':'application/json'
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(Response => {
            if (Response.ok) {
                return Response.json()// return Responce.text() выведет в консоль нам содержимое ссылки requestURL в текстовомвиде
            }
            return Response.json().then(error => {
                const e = new Error('Что то пошло не так')
                e.data = error// в е дата заносим объект ошибки, что бы в дальнейшем с ней работать
                throw e// выкидываем ошибку оперетором throw
            })
            })
    }


    /*
    (sendRequest('GET', requestURL)// вызвали метод, ГЕТом получили, а откуда получать мы взяли из второго параматера  урл
    .then(data=>console.log(data))//вывeли полученные данные в консоль, дата это данные
    .catch(err=>console.log(err))// а это строка для ошибок
    */
   
  const body= {
    name: 'Ivan',
    age:22
    }
sendRequest('Post', requestURL, body)// можно было третий параметр(body) передавать из обьекта( создать обьект с полями нейм и айдж и его название передавать)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
