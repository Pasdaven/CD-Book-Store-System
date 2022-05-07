function functionName() {
    var url = 'core_link';
    let data = {
        controller: 'test url',
        method: 'test method',
        parameter: {
            //parameter
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => console.log(res));
}