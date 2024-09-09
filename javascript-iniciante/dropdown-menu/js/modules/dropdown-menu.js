export default function initDropdownMenu(){
    

    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
        document.addEventListener('click', handleOutsideClick);
       
    })
    
    function handleClick(event){
        event.preventDefault();
        this.classList.toggle('active');
        
    }

}

function handleOutsideClick(event) { 
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {
        if (menu.classList.contains('active') && !menu.contains(event.target)) { 
            menu.classList.remove('active'); 
            
        }
    });
    
}




