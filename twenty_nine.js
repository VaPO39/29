//TODO В html файле подключен файл fetch, а не этот
const requestURL = 'https://jsonplaceholder.typicode.com/users'
function sendRequest(method, url,body = null) {// третий параметр нужен для метода POST
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)// у объекта xhr вызвать метод опен, он откроет новое соединие, первый параметр это метод по которому делаем запрос(есть базовые методы гет и пост)
        //! getполучение данных, post для создания? delete  удаление, put для полного обновления элемента, patch для частичного
        // добавим новый слушатель
        // важно это сделать до отправки запроса xhr.send()
        // по сети данные гуляют в формате строки, обьектами они быть не могугт, поэтому нам приходит строка
        /*xhr.onload = () => {
            console.log(JSON.parse(xhr.response))// обратимся к глобальному объету JSON и выззвем метод parse, для преобрпзования строки в объект
            
        }*/
        //* еще один вариант парса
        xhr.responseType = 'json'// указваем тип ответа json
        xhr.setRequestHeader('Content-Type','application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {// проверка на ошибку, если ее значение больше 400 то это ошибка и выведем консоль.еррор
                reject(xhr.response)
        
            } else {
               resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)// для ошибки
    
        }

        xhr.send(JSON.stringify(body))
    })// не забудь ее открыть на строке 4
}

    /*sendRequest('GET', requestURL)// вызвали метод, ГЕТом получили, а откуда получать мы взяли из второго параматера  урл
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
