// $('#submitBtn').click();

function login() {
    let email = $('#email').val();
    let member_password = $('#member_password').val();
    let data = {
        controller: 'member',
        method: 'login',
        parameter: {
            email: email,
            member_password: member_password
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            if (res) {
                // 登入成功

            } else {
                // 帳號密碼錯誤登入失敗

            }
        }
    });
}

function register() {
    let email = $('#email').val();
    let member_password = $('#member_password').val();
    let member_name = $('#member_name').val();
    let birthday = $('#birthday').val();
    let phone_num = $('#phone_num').val();
    let sex = $('#sex').val();
    let cedit_num = $('#cedit_num').val();

    let data = {
        controller: 'member',
        method: 'register',
        parameter: {
            email: email,
            member_password: member_password,
            member_name: member_name,
            birthday: birthday,
            phone_num: phone_num,
            sex: sex,
            cedit_num: cedit_num
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            if (res) {
                // 註冊成功

            } else {
                // email重複註冊失敗

            }
        }
    });
}

function forgetPassword() {
    let email = $('#email').val();

    let data = {
        controller: 'member',
        method: 'forgetPassword',
        parameter: {
            email: email
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            if (res) {
                // 有此email，發送驗證碼

            } else {
                // 無此email
            }
        }
    });
}

function resetPassword() {
    let new_password = $('#new_password').val();
    let confirm_password = $('#confirm_password').val();

    if (new_password == confirm_password) {
        let data = {
            controller: 'member',
            method: 'resetPassword',
            parameter: {
                member_password: new_password
            }
        };
        let json = JSON.stringify(data);
        $.ajax({
            url: '/CD-Book-Store-System/controller/core.php',
            method: 'POST',
            data: json,
        });
    } else {
        // 兩個新帳號不相同
    }
}

function updateMemberInfo() {
    let memberInfo = [{
        member_name: $('#member_name').val(),
        birthday: $('#birthday').val(),
        phone_num: $('#phone_num').val(),
        sex: $('#sex').val(),
        cedit_num: $('#cedit_num').val()
    }];

    for (var i = 0; i < length(memberInfo); i++) {
        let data = {
            controller: 'member',
            method: 'updateMemberInfo',
            parameter: {
                change_place: memberInfo[i].key,
                change_text: memberInfo[i].value,
            }
        };
        let json = JSON.stringify(data);
        $.ajax({
            url: '/CD-Book-Store-System/controller/core.php',
            method: 'POST',
            data: json,
        });
    }

}

function getMemberInfo() {
    let data = {
        controller: 'member',
        method: 'getMemberInfo',
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);
        }
    });
}