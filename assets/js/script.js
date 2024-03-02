// for moving button
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.butil-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// for teams moving button

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.teams-btn');

    buttons.forEach(button =>{
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        })
    })
});
