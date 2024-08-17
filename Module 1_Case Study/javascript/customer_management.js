let clientName = []

function addClient() {
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');

    let clientData = new ClientName();
    clientData.id = document.getElementById('clientID').value;
    clientData.nationID = document.getElementById('clientNationID').value;
    clientData.name = document.getElementById('clientName').value;
    clientData.birthDate = document.getElementById('clientBirth').value;
    clientData.address = document.getElementById('clientAdd').value;
    clientData.phone = document.getElementById('clientPhone').value;
    clientData.mail = document.getElementById('clientEmail').value;
    clientData.note = document.getElementById('clientNote').value;

    if (radio1.checked) {
        clientData.gender = document.getElementById('radio1').value;
    } else if (radio2.checked) {
        clientData.gender = document.getElementById('radio2').value;
    } else if (radio3.checked) {
        clientData.gender = document.getElementById('radio3').value;
    }
    if (clientData.id !== "" &&
        clientData.nationID !== "" &&
        clientData.name !== "" &&
        clientData.gender !== "" &&
        clientData.birthDate !== "" &&
        clientData.address !== "" &&
        clientData.phone !== "" &&
        clientData.mail !== ""
    ) {
        let checkLoop = false
        if (clientName !== []) {
            for (let j of clientName) {
                if (j.getEmail() === document.getElementById('clientEmail').value || j.getID() === document.getElementById('clientID').value || j.getNationID() === document.getElementById('clientNationID').value) {
                    checkLoop = true
                } else checkLoop = false
            }
            if (checkLoop === false) {
                let check = confirm("Bạn chắc muốn thêm " + clientData.getID() + " " + clientData.getName() + "?")
                if (check) {
                    clientName.unshift(clientData)
                    alert("Đã thêm hoàn tất");
                    displayClient();
                }
            } else alert("Email,CCCD hoặc ID Đã Tồn Tại")
        }
    } else alert("Xin Vui Lòng Điền Đủ Thông Tin")
}


function displayClient() {
    let table = "<tbody>"
    for (let i = 0; i < clientName.length; i++) {
        table += "<tr>" +
            "<td>" + clientName[i].getID() + "</td>" +
            "<td>" + clientName[i].getNationID() + "</td>" +
            "<td>" + clientName[i].getName() + "</td>" +
            "<td>" + clientName[i].getGender() + "</td>" +
            "<td>" + clientName[i].getBirthDate() + "</td>" +
            "<td>" + clientName[i].getAddress() + "</td>" +
            "<td>" + clientName[i].getPhone() + "</td>" +
            "<td>" + clientName[i].getEmail() + "</td>" +
            "<td>" + clientName[i].getNote() + "</td>" +
            "<td id='adjust'><button class=\"btn btn-warning\" type='button' onclick='adjustData(" + i + ")'</button>Chỉnh Sửa</td>" +
            "<td><button class=\"btn btn-danger\" type='button' onclick='deleteData(" + i + ")'</button>Xóa Người Dùng</td>" +
            "</tr>" +
            "</tbody>"
    }
    document.getElementById("cusResult").innerHTML = table;
    document.getElementById('clientID').value = "";
    document.getElementById('clientNationID').value = "";
    document.getElementById('clientName').value = "";
    document.getElementById('clientGender').innerHTML =
        ' <input class="radioSize" type="radio" id="radio1" name="gender" value="Nam">Nam' +
        '<input class="radioSize" type="radio" id="radio2" name="gender" value="Nữ">Nữ' +
        '<input class="radioSize" type="radio" id="radio3" name="gender" value="Khác">Khác';
    document.getElementById('clientBirth').value = "";
    document.getElementById('clientAdd').value = "";
    document.getElementById('clientPhone').value = "";
    document.getElementById('clientEmail').value = "";
    document.getElementById('clientNote').value = "";
    document.getElementById('addClient').innerHTML =
        ' <button class=\"btn btn-success\" type="button" onclick="addClient()" id="addClient">Thêm Thông Tin</button>';
}

function adjustData(num) {
    document.getElementById('clientID').value = clientName[num].getID();
    document.getElementById('clientNationID').value = clientName[num].getNationID();
    document.getElementById('clientName').value = clientName[num].getName();
    if (clientName[num].getGender() === "Nam") {
        document.getElementById('clientGender').innerHTML =
            ' <input class="radioSize" type="radio" id="radio1" name="gender" value="Nam" checked>Nam' +
            '<input class="radioSize" type="radio" id="radio2" name="gender" value="Nữ" required>Nữ' +
            '<input class="radioSize" type="radio" id="radio3" name="gender" value="Khác" required>Khác';
    } else if (clientName[num].getGender() === "Nữ") {
        document.getElementById('clientGender').innerHTML =
            ' <input class="radioSize" type="radio" id="radio1" name="gender" value="Nam" required>Nam' +
            '<input class="radioSize" type="radio" id="radio2" name="gender" value="Nữ" checked>Nữ' +
            '<input class="radioSize" type="radio" id="radio3" name="gender" value="Khác" required>Khác';
    } else if (clientName[num].getGender() === "Khác") {
        document.getElementById('clientGender').innerHTML =
            ' <input class="radioSize" type="radio" id="radio1" name="gender" value="Nam" required>Nam' +
            '<input class="radioSize" type="radio" id="radio2" name="gender" value="Nữ" required>Nữ' +
            '<input class="radioSize" type="radio" id="radio3" name="gender" value="Khác" checked>Khác';
    }
    document.getElementById('clientBirth').value = clientName[num].getBirthDate();
    document.getElementById('clientAdd').value = clientName[num].getAddress();
    document.getElementById('clientPhone').value = clientName[num].getPhone();
    document.getElementById('clientEmail').value = clientName[num].getEmail();
    document.getElementById('clientNote').value = clientName[num].getNote();
    document.getElementById('addClient').innerHTML = "<button class=\"btn btn-primary\" id='adjust' type='button' onclick='updateData(" + num + ")'</button>Cập Nhật</td>"
}

function updateData(num) {
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');

    let checkLoop = true
    for (let j of clientName) {
        if (clientName.indexOf(j) !== num && j.getNationID() === document.getElementById('clientNationID').value) {
            alert("Số CCCD Bị Trùng")
            adjustData(num)
            break;
        } else checkLoop = false
    }

    if (checkLoop === false) {
        let check2 = confirm("Bạn Xác Nhận Muốn Cập Nhật Thông Tin Trên?")
        if (check2) {
            clientName[num].setNationID(document.getElementById('clientNationID').value);
            clientName[num].setName(document.getElementById('clientName').value);
            clientName[num].setBirthDate(document.getElementById('clientBirth').value);
            if (radio1.checked) {
                clientName[num].setGender(document.getElementById('radio1').value);
            } else if (radio2.checked) {
                clientName[num].setGender(document.getElementById('radio2').value);
            } else if (radio3.checked) {
                clientName[num].setGender(document.getElementById('radio3').value);
            }
            clientName[num].setAddress(document.getElementById('clientAdd').value);
            clientName[num].setPhone(document.getElementById('clientPhone').value);
            clientName[num].setEmail(document.getElementById('clientEmail').value);
            clientName[num].setNote(document.getElementById('clientNote').value);
            alert("Số ID là con số cố định không thể cập nhật, những thông tin khác đã cập nhật hoàn tất.")
            displayClient()
        } else {
            displayClient()
        }
    }
}

function deleteData(num) {
    let check = confirm("Bạn chắc muốn xóa " + clientName[num].getID() + " " + clientName[num].getName() + "?")
    if (check) {
        clientName.splice(num, 1);
        displayClient();
        alert("Đã xóa hoàn tất");
    }
}

function checkEmptyInput(element) {
    if (element.value.trim() === "") {
        element.style.backgroundColor = 'pink';
    } else {
        element.style.backgroundColor = '';
    }
}

function logout() {
    let check = confirm('Bạn xác nhận muốn đăng xuất tài khoản.')
    if (check) {
        window.location.href = "http://localhost:63342/Module%201_Case%20Study/Module%201_Case%20Study/home.html"
    }
}