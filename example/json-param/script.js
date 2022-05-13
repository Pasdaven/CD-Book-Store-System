// Vanilla JS
function functionName() {
    var url = "core_link";
    let data = {
        controller: "test url",
        method: "test method",
        parameter: {
            //parameter
        },
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
}

// jQuery AJAX
const foo = () => {
    let param = "Hello World";
    let data = {
        controller: "ctrl",
        method: "method",
        parameter: {
            param: param,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "", // core url
        method: "POST",
        data: json,
        success: (res) => anotherFoo(res), // use the return data
    });
};
