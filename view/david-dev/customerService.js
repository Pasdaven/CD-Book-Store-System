const createCsRecord = () => {
    let member_id = $("#text-5-1").val();
    let cs_id = $("#text-5-2").val();
    let topic = $("#text-5-3").val();
    let product_id = $("#text-5-4").val();
    let data = {
        controller: "customerService",
        method: "createCsRecord",
        parameter: {
            member_id: member_id,
            cs_id: cs_id,
            topic: topic,
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const createCsMessage = () => {
    let cs_record_id = $("#text-6-1").val();
    let msg_content = $("#text-6-2").val();
    let msg_by = $("#text-6-3").val();
    let data = {
        controller: "customerService",
        method: "createCsMessage",
        parameter: {
            cs_record_id: cs_record_id,
            msg_content: msg_content,
            msg_by: msg_by,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

$("#btn-5").click(() => {
    createCsRecord();
});
$("#btn-6").click(() => {
    createCsMessage();
});
