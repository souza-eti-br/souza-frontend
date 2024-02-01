/** Usado para fazer requisição http. */
class HTTP {

    get(url: string, success: Function) {
        let http = new XMLHttpRequest();
        http.open("GET", url);
        http.send();
        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) {
                success(http.responseText);
            }
        }
    }
}

const http = new HTTP();

export default http;