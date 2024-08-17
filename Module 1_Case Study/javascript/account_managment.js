let AccessName=[];
let accessAdmin = new NameList(202408001,'Dương', 'Admin', 'Super Admin', 'admin@gmail.com', 9024585642,'admin','123456');
AccessName.push(accessAdmin);
console.log(AccessName);
function addAccess() {
    let TempElement = new NameList();
    TempElement.id = document.getElementById('accessID').value;
    TempElement.name = document.getElementById('accessName').value;
    TempElement.position = document.getElementById('accessPosition').value;
    TempElement.role = document.getElementById('accessRole').value;
    TempElement.email = document.getElementById('accessEmail').value;
    TempElement.phone = document.getElementById('accessPhone').value;
    TempElement.username = document.getElementById('accessUsername').value;
    TempElement.password = document.getElementById('accessPassword').value;
    if (TempElement.id !== "" &&
        TempElement.name !== "" &&
        TempElement.position !== "" &&
        TempElement.role !== "" &&
        TempElement.email !== "" &&
        TempElement.username !== "" &&
        TempElement.password !== "") {
        let checkLoop = false
        if (AccessName !== []) {
            for (let j of AccessName) {
                if (j.getUsername() === document.getElementById('accessUsername').value || j.getEmail() === document.getElementById('accessEmail').value || j.getID() === document.getElementById('accessID').value) {
                    checkLoop = true
                    break;
                } else checkLoop = false
            }
            if (checkLoop === false) {
                let check = confirm("Bạn chắc muốn thêm " + TempElement.getID() + " " + TempElement.getName() + "?")
                if (check) {
                    AccessName.unshift(TempElement)
                    alert("Đã thêm hoàn tất");
                    displayAccess();
                }
            } else alert("Username, Email hoặc ID Đã Tồn Tại")
        }
    } else alert("Xin Vui Lòng Điền Đủ Thông Tin")
}


function displayAccess() {
    let table = "<tbody>"
    for (let i = 0; i < AccessName.length; i++) {
        table += "<tr>" +
            "<td>" + AccessName[i].getID() + "</td>" +
            "<td>" + AccessName[i].getName() + "</td>" +
            "<td>" + AccessName[i].getPosition() + "</td>" +
            "<td>" + AccessName[i].getRole() + "</td>" +
            "<td>" + AccessName[i].getEmail() + "</td>" +
            "<td>" + AccessName[i].getPhone() + "</td>" +
            "<td>" + AccessName[i].getUsername() + "</td>" +
            "<td>" + AccessName[i].getPassword() + "</td>" +
            "<td id='adjust'><button class=\"btn btn-warning\" type='button' onclick='adjustData(" + i + ")'</button>Chỉnh Sửa</td>" +
            "<td><button class=\"btn btn-danger\" type='button' onclick='deleteData(" + i + ")'</button>Xóa Người Dùng</td>" +
            "</tr>" +
            "</tbody>"
    }
    document.getElementById("result").innerHTML = table;
    document.getElementById('accessID').value = "";
    document.getElementById('accessName').value = "";
    document.getElementById('accessPosition').innerHTML =
        "<option name=\"position\" disabled selected hidden>--Chọn--</option>\n" +
        "<option name=\"position\" value=\"Staff\">Staff</option>\n" +
        "<option name=\"position\" value=\"Supervisor\">Supervisor</option>\n" +
        "<option name=\"position\" value=\"Manager\">Manager</option>";
    document.getElementById('accessRole').innerHTML =
        "<option name=\"role\" disabled selected hidden>--Chọn--</option>\n" +
        "<option name=\"role\" value=\"Basic\">Basic</option>\n" +
        "<option name=\"role\" value=\"Admin\">Admin</option>\n" +
        "<option name=\"role\" value=\"Super Admin\">Super Admin</option>;";
    document.getElementById('accessEmail').value = "";
    document.getElementById('accessPhone').value = "";
    document.getElementById('accessUsername').value = "";
    document.getElementById('accessPassword').value = "";

}

function adjustData(num) {
    document.getElementById('accessID').value = AccessName[num].getID();
    document.getElementById('accessName').value = AccessName[num].getName();
    document.getElementById('accessPosition').innerHTML =
        "<option name=\"position\" value=" + AccessName[num].getPosition() + " disabled selected hidden>" + AccessName[num].getPosition() + " </option>\n" +
        "<option name=\"position\" value=\"Nhân Viên\">Nhân Viên</option>\n" +
        "<option name=\"position\" value=\"Quản Lý\">Quản Lý</option>\n" +
        "<option name=\"position\" value=\"Giám Đốc\">Giám Đốc</option>"
    document.getElementById('accessRole').innerHTML =
        "<option name=\"role\" value=" + AccessName[num].getRole() + " disabled selected hidden>" + AccessName[num].getRole() + "</option>\n" +
        "<option name=\"role\" value=\"Cơ Bản\">Cơ Bản</option>\n" +
        "<option name=\"role\" value=\"Quản Lý\">Quản Lý</option>\n" +
        "<option name=\"role\" value=\"Quản Lý Cao Cấp\">Quản Lý Cao Cấp</option>;"
    document.getElementById('accessEmail').value = AccessName[num].getEmail();
    document.getElementById('accessPhone').value = AccessName[num].getPhone();
    document.getElementById('accessUsername').value = AccessName[num].getUsername();
    document.getElementById('accessPassword').value = AccessName[num].getPassword();
    document.getElementById('addUpdate').innerHTML = "<button class=\"btn btn-primary\" id='adjust' type='button' onclick='updateData(" + num + ")'</button>Cập Nhật</td>"
}

function updateData(num) {
    let checkLoop = true
    for (let j of AccessName) {
        if (AccessName.indexOf(j) !== num && j.getEmail() === document.getElementById('accessEmail').value ) {
                alert("Số Email Đã Tồn Tại.")
                adjustData(num)
                break;
            } else checkLoop = false
        }
    if (checkLoop === false) {
        let check1 = confirm("Bạn Xác Nhận Muốn Cập Nhật Thông Tin Trên?")
        if (check1) {
            AccessName[num].setName(document.getElementById('accessName').value);
            AccessName[num].setPosition(document.getElementById('accessPosition').value);
            AccessName[num].setRole(document.getElementById('accessRole').value);
            AccessName[num].setEmail(document.getElementById('accessEmail').value);
            AccessName[num].setPhone(document.getElementById('accessPhone').value);
            AccessName[num].setPassword(document.getElementById('accessPassword').value);
            document.getElementById('addUpdate').innerHTML =
                '<button class=\'btn btn-success\' type="button" onClick="addAccess()">Thêm Người</button>';
            alert("Số ID/Username là nguyên tố cố định không thể cập nhật, những thông tin khác đã cập nhật hoàn tất.")
            displayAccess()
        } else {
            document.getElementById('addUpdate').innerHTML =
                '<button class=\'btn btn-success\' type="button" onClick="addAccess()">Thêm Người</button>';
            displayAccess()
        }
    }
}

function deleteData(num) {
    let check = confirm("Bạn chắc muốn xóa " + AccessName[num].getID() + " " + AccessName[num].getName() + "?")
    if (check) {
        AccessName.splice(num, 1);
        displayAccess();
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


function logout(){
    let check=confirm('Bạn xác nhận muốn đăng xuất tài khoản.')
    if(check){
        window.location.href="http://localhost:63342/Module%201_Case%20Study/Module%201_Case%20Study/home.html"
    }
}