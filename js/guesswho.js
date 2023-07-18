// After document ready, listen for events from the chatbot client.
(function() {
    window.onmessage = function(e) {
        // Select a character
        if (e.data.startsWith('select')) {

            setTimeout(function() {            
                let char = e.data.split('|')[1].toLowerCase().replace(' ', '-');

                let chars = document.querySelectorAll('.char');
            
                for (let i = 0; i < chars.length; i++) {
                    chars[i].querySelector('.char-img').classList.add('hidden');
                    chars[i].querySelector('.back').classList.remove('hidden');        
                }
            
                document.querySelector('.char-' + char + ' > .back').classList.add('hidden');
                document.querySelector('.char-' + char + ' > .char-img').classList.remove('hidden');    
            }, 2200);         
        }

        else if(e.data == 'reset') {
            let chars = document.querySelectorAll('.char');
            for (let i = 0; i < chars.length; i++) {                
                chars[i].querySelector('.back').classList.add('hidden');        
                chars[i].querySelector('.char-img').classList.remove('hidden');
            }
        }
    }
})();

function toggle_card(el) {
    if (el.querySelector('.back').classList.contains('hidden')) {
        el.querySelector('.char-img').classList.add('hidden');
        el.querySelector('.back').classList.remove('hidden');
    }

    else {
        el.querySelector('.back').classList.add('hidden');
        el.querySelector('.char-img').classList.remove('hidden');
    }
}