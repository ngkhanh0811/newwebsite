var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML; //khai báo biến ứng với id one đầu tiên trong file HTML

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
