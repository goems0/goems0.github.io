id = prompt('아이디 입력');
if (id == 'std01') {
    password = prompt('비밀번호 입력');
    if (password == '1111') {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_login.html"
    }
    else {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_error.html"
    }
}
else if (id == 'std02') {
    password = prompt('비밀번호 입력');
    if (password == '2222') {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_login.html"
    }
    else {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_error.html"
    }
}
else if (id == 'std03') {
    password = prompt('비밀번호 입력');
    if (password == '3333') {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_login.html"
    }
    else {
        location.href = "file:///C:/u20210774/hw/hw10/hw10_error.html"
    }
}
else {
    location.href = "file:///C:/u20210774/hw/hw10/hw10_error.html"
}