function toggleMobileMenu(){
    let menu = document.getElementById('mobile-menu')
    if (menu.style.display === 'none') {
        menu.style.display='block';
        
    }
    else{
        menu.style.display='none';
    }
}

let gridBox = document.querySelectorAll('.grid-box')
gridBox.forEach(function(gridBox){


gridBox.addEventListener('mouseover', function(){
    this.querySelector('.grid-box-title').style.color = '#FAB700';
})
gridBox.addEventListener('mouseout', function() {
    // Change background color back to blue when mouse moves out
    this.querySelector('.grid-box-title').style.color = 'black';
  });
});


const counterUp = window.counterUp.default

        const callback = entries => {
            entries.forEach(entry => {
                const el = entry.target
                if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                    counterUp(el, {
                        duration: 2000,
                        delay: 16,
                    })
                    el.classList.add('is-visible')
                }
            })
        }

        const IO = new IntersectionObserver(callback, { threshold: 1 })

        let el = document.querySelector('.counter')
        let al = document.querySelector('.counter1')
        let sl = document.querySelector('.counter2')
        let dl = document.querySelector('.counter3')
        let hl = document.querySelector('.counter4')
        IO.observe(el)
        IO.observe(al)
        IO.observe(sl)
        IO.observe(dl)
        IO.observe(hl)