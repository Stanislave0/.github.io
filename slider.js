function slider(class_name, slider_name_list) {
    tab = document.querySelector('.slider');
    tab_dot = document.querySelector('.dot-list');
    elem_slides = tab.querySelectorAll('.' + slider_name_list);
    dots_slider = tab_dot.querySelectorAll('.dot');

    if (class_name == 'next') {

        for (i = 0; i < elem_slides.length; i++) {
            if (elem_slides[i].style.display == 'block') {
                elem_slides[i].style.display = 'none';
                elem_slides[i+1].style.display = 'block';
                dots_slider[i].classList.remove('active_dot');
                dots_slider[i+1].classList.add('active_dot');
                break;
            }
            if (elem_slides[2].style.display == 'block') {
                elem_slides[2].style.display = 'none';
                elem_slides[0].style.display = 'block';
                dots_slider[2].classList.remove('active_dot');
                dots_slider[0].classList.add('active_dot');

            }
        }
    }
    if (class_name == 'prev') {
        for (i = 2; i > -1; i--) {
            if (elem_slides[i].style.display == 'block') {
                elem_slides[i].style.display = 'none';
                elem_slides[i-1].style.display = 'block';
                dots_slider[i].classList.remove('active_dot');
                dots_slider[i-1].classList.add('active_dot');
                break;
            }
            if (elem_slides[0].style.display == 'block') {
                elem_slides[0].style.display = 'none';
                elem_slides[2].style.display = 'block';
                dots_slider[0].classList.remove('active_dot');
                dots_slider[2].classList.add('active_dot');
            }
        }
    }
}