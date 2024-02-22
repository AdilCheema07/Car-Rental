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