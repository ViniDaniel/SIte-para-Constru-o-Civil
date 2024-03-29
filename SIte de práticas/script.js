// Este script é opcional e usado apenas para mostrar e ocultar o submenu em dispositivos com tela sensível ao toque

document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
            var dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });

    // Fechar o submenu se clicar fora dele
    document.addEventListener('click', function () {
        dropdowns.forEach(function (dropdown) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        });
    });
});
