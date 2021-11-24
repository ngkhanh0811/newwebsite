var elements = document.getElementsByTagNameNS('li'); //gọi ra tập hợp các thẻ li

if (elements.length > 0){ // nếu có nhiều hơn 0 thẻ li
    var el = elements[0]; // chọn thẻ li đầu tiên
    el.className = 'cool'; // gán tên class cho thẻ li vừa chọn là 'cool'
}