/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let url = options.url;
    const method = (options.method || 'GET').toUpperCase();
    const data = options.data || {};
    let sendData = null;
    const callback = options.callback || function () {};
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if (method === 'GET') {
        const parts = [];
        Object.keys(data).forEach(key => {
            parts.push(key + '=' + data[key]);
        });
        if (parts.length > 0) {
            url += '?' + parts.join('&');
        }
    }
    else {
        sendData = new FormData();
        Object.keys(data).forEach(key => {
            sendData.append(key, data[key]);
        });
    }
    xhr.onload = () => {
        callback(null, xhr.response);
    };
    xhr.onerror = () => {
        callback(new Error('Ошибка сети'));
    };
    try {
        xhr.open(method, url);
        xhr.send(sendData)
    }
    catch(err) {
        callback(err);
    }
};
