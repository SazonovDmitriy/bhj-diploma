/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    let url = options.url;
    const data = options.data;
    const formData = new FormData();
    const method = options.method;
        url += '?';
        xhr.withCredentials;
        xhr.responseType = 'json';
            for (let key in data) {
                url += key + "=" + data[key] + "&";
            };
        url.slice(0, -1);
            try {
                xhr.open(method, url);
                xhr.send();
            } catch (e) {
                options.callback(e);
            };
        for (let key in options.data) {
            formData.append(key, options.data[key]);
        }
    try {
        xhr.open(method, url);
        xhr.send(formData);
    } catch (e) {
        options.callback(e);
    }
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const error = null;
            const response = xhr.response;
            options.callback(error, response);
        };
    });
    return xhr;
};
