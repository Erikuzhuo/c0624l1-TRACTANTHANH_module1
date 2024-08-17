function modalOption() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let ProductList = []

function addItem() {
    let productData = new Products()
    productData.code = document.getElementById('productCode').value;
    productData.name = document.getElementById('productName').value;
    productData.group = document.getElementById('productType').value;
    productData.unit = document.getElementById('productUnit').value;
    productData.price = document.getElementById('productSalePrice').value;
    productData.cost = document.getElementById('productCost').value;
    productData.description = document.getElementById('productDescription').value;
    productData.location = document.getElementById('productLocation').value;
    productData.stock = document.getElementById('productStock').value;

    if (productData.code !== "" &&
        productData.name !== "" &&
        productData.group !== "" &&
        productData.unit !== "" &&
        productData.price !== "" &&
        productData.cost !== "" &&
        productData.description !== "" &&
        productData.location !== "" &&
        productData.stock !== "" &&
        productData.price > 0 &&
        productData.cost > 0 &&
        productData.stock > 0) {
        let checkLoop = false
        if (ProductList !== []) {
            for (let j of ProductList) {
                if (j.getCode() === document.getElementById('productCode').value || j.getName() === document.getElementById('productName').value) {
                    checkLoop = true
                } else checkLoop = false
            }
            if (checkLoop === false) {
                let check = confirm("Bạn chắc muốn thêm " + productData.getCode() + " " + productData.getName() + "?")
                if (check) {
                    ProductList.unshift(productData)
                    alert("Đã thêm hoàn tất");
                    displayProduct();
                }
            } else alert("Mã Hàng / Tên Hàng Đã Tồn Tại")
        }
    } else alert("Xin Vui Lòng Điền Đúng Thông Tin")
}

function displayProduct() {
    for (let i = 0; i < ProductList.length; i++) {
        if (ProductList[i].getStock() > 10) {
            ProductList[i].setStockStatus("Còn Hàng");
            document.getElementsByClassName('productStatus').color = "Green";
        } else if (ProductList[i].getStock() < 10) {
            ProductList[i].setStockStatus("Sắp Hết Hàng")
            document.getElementsByClassName('productStatus').color = "DarkGold";
        } else {
            ProductList[i].setStockStatus("Hết Hàng")
            document.getElementsByClassName('productStatus').color = "Red";
        }
    }

    let table = "<tbody>"
    for (let j = 0; j < ProductList.length; j++) {
        table += "<tr>" +
            "<td>" + ProductList[j].getCode() + "</td>" +
            "<td>" + ProductList[j].getName() + "</td>" +
            "<td>" + ProductList[j].getGroup() + "</td>" +
            "<td>" + ProductList[j].getUnit() + "</td>" +
            "<td>" + ProductList[j].getPrice() + "</td>" +
            "<td>" + ProductList[j].getCost() + "</td>" +
            "<td>" + ProductList[j].getDescription() + "</td>" +
            "<td>" + ProductList[j].getLocation() + "</td>" +
            "<td>" + ProductList[j].getStock() + "</td>" +
            "<td class='productStatus'>" + ProductList[j].getStockStatus() + "</td>" +
            "<td id='adjust'><button class=\"btn btn-warning\" type='button' onclick='adjustData(" + j + ")'</button>Chỉnh Sửa</td>" +
            "<td><button class=\"btn btn-danger\" type='button' onclick='deleteData(" + j + ")'</button>Xóa Mặt Hàng</td>" +
            "</tr>" +
            "</tbody>"
    }
    document.getElementById("productResult").innerHTML = table;
    document.getElementById('productCode').value = "";
    document.getElementById('productName').value = "";
    document.getElementById('productType').value = "";
    document.getElementById('productUnit').value = "";
    document.getElementById('productSalePrice').value = "";
    document.getElementById('productCost').value = "";
    document.getElementById('productDescription').value = "";
    document.getElementById('productLocation').value = "";
    document.getElementById('productStock').value = "";
    document.getElementById('return').style.display = "none";
}

function deleteData(number) {
    let check = confirm("Bạn chắc muốn xóa " + ProductList[number].getCode() + " " + ProductList[number].getName() + "?")
    if (check) {
        ProductList.splice(number, 1);
        displayProduct();
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

function adjustData(num) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById('productCode').value = ProductList[num].getCode();
    document.getElementById('productName').value = ProductList[num].getName();
    document.getElementById('productType').value = ProductList[num].getGroup();
    document.getElementById('productUnit').value = ProductList[num].getUnit();
    document.getElementById('productSalePrice').value = ProductList[num].getPrice();
    document.getElementById('productCost').value = ProductList[num].getCost();
    document.getElementById('productDescription').value = ProductList[num].getDescription();
    document.getElementById('productLocation').value = ProductList[num].getLocation();
    document.getElementById('productStock').value = ProductList[num].getStock();
    document.getElementById('addProduct').innerHTML = "<button class=\"btn btn-primary\" id='adjust' type='button' onclick='updateData(" + num + ")'</button>Cập Nhật</td>"
}

function updateData(num) {
    let checkLoop = true
    for (let j of ProductList) {
        if (ProductList.indexOf(j) !== num) {
            if (j.getCode() === document.getElementById('productCode').value ||
                j.getName() === document.getElementById('productName').value) {
                alert("Mã Hàng / Tên Hàng Bị Trùng")
                adjustData(num)
                break;
            }
        } else checkLoop = false
    }

    if (checkLoop === false) {
        if (document.getElementById('productSalePrice').value < 0 ||
            document.getElementById('productCost').value < 0 ||
            document.getElementById('productStock').value < 0) {
            alert("Giá Trị Không Đúng")
            adjustData(num)
        } else {
            let check3 = confirm("Bạn Xác Nhận Muốn Cập Nhật Thông Tin Trên?")
            if (check3) {
                ProductList[num].setUnit(document.getElementById('productUnit').value);
                ProductList[num].setGroup(document.getElementById('productType').value);
                ProductList[num].setPrice(document.getElementById('productSalePrice').value);
                ProductList[num].setCost(document.getElementById('productCost').value);
                ProductList[num].setDescription(document.getElementById('productDescription').value);
                ProductList[num].setLocation(document.getElementById('productLocation').value);
                ProductList[num].setStock(document.getElementById('productStock').value);
                alert("Mã Hàng và Tên Hàng không thể cập nhật, những thông tin khác đã cập nhật hoàn tất.")
                displayProduct()
                document.getElementById("myModal").style.display = "none";
            } else {
                displayProduct()
                document.getElementById("myModal").style.display = "none";
            }
        }
    }
}

function logout() {
    let check = confirm('Bạn xác nhận muốn đăng xuất tài khoản.')
    if (check) {
        window.location.href = "http://localhost:63342/Module%201_Case%20Study/Module%201_Case%20Study/home.html"
    }
}

function filterItem() {
    let num = prompt('Số Lượng Hàng Hóa Bạn Cần Tìm:');
    let CheckArrays = [];
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            let checkElement = prompt("Nhập Mã Hàng Bạn Muốn Tìm "+i+":")
            CheckArrays.push(checkElement)
        }

        let ConfirmElement = [];
        let IndexConfirmElement = [];
        for (let j = 0; j < CheckArrays.length; j++) {
            for (let k = 0; k < ProductList.length; k++) {
                if (CheckArrays[j] === ProductList[k].getName()) {
                    ConfirmElement.push(CheckArrays[j]);
                    IndexConfirmElement.push(k);
                }
            }
        }
        if (IndexConfirmElement !== []) {
            let table = "<tbody>"
            for (let j = 0; j < IndexConfirmElement.length; j++) {
                table += "<tr>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getCode() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getName() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getGroup() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getUnit() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getPrice() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getCost() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getDescription() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getLocation() + "</td>" +
                    "<td>" + ProductList[IndexConfirmElement[j]].getStock() + "</td>" +
                    "<td class='productStatus'>" + ProductList[IndexConfirmElement[j]].getStockStatus() + "</td>" +
                    "<td id='adjust'><button class=\"btn btn-warning\" type='button' onclick='adjustData(" + IndexConfirmElement[j] + ")'</button>Chỉnh Sửa</td>" +
                    "<td><button class=\"btn btn-danger\" type='button' onclick='deleteData(" + IndexConfirmElement[j] + ")'</button>Xóa Mặt Hàng</td>" +
                    "</tr>" +
                    "</tbody>"
            }
            document.getElementById("productResult").innerHTML = table;
            document.getElementById('return').style.display = "block";
        } else {
            alert('Không Có Mặt Hàng Nào Có Giá Trị Trên')
            filterItem()
        }

    } else {
        alert('Xin Mời Nhập Đúng Giá Trị')
        filterItem()
    }
}
