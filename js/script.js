

  
document.querySelector('.dropdown-button').addEventListener('click', function () {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});

// إغلاق القائمة إذا تم النقر خارجها
window.addEventListener('click', function (e) {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (!e.target.matches('.dropdown-button') && !e.target.matches('.dropdown-content')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});
