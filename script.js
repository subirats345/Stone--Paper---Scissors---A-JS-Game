$(document).ready(function() {

    // Initializing the variables
    const options = ['Paper', 'Rock', 'Scissors'];

    let userPoints = 0;
    let comPoints = 0;

    // Initialize the game when the player push ine button
    $(".gameButton").click(function() {
        var me = $(this);
        game(me.val());
    });

    // Main function
    function game(a) {
        usersSelect(a, options);
    };

    // Random COM movement and go to the comparissons
    function usersSelect(a, array) {
        ComSelection = array[Math.floor(Math.random() * 3)];
        let userSelection = a;
        comparissons(ComSelection, userSelection);
    };

    // Ho wins?    
    function comparissons(ComSelection, userSelection) {

        if (ComSelection === 'Paper' && userSelection === 'Rock' || ComSelection === 'Scissors' && userSelection === 'Paper' || ComSelection === 'Rock' && userSelection === 'Scissors') {
            comPoints++;
            $('audio#pop2')[0].play()
            $('.subtitles').text(`The user has choosen ${userSelection} and the COM ${ComSelection}.`);
            $('.punctuation').text(`User ${userPoints} - COM ${comPoints}.`);
            endGame();
            game(options);

        }
        if (ComSelection === 'Rock' && userSelection === 'Paper' || ComSelection === 'Paper' && userSelection === 'Scissors' || ComSelection === 'Scissors' && userSelection === 'Rock') {
            userPoints++;
            $('audio#pop1')[0].play()
            $('.subtitles').text(`The user has choosen ${userSelection} and the COM ${ComSelection}.`);
            $('.punctuation').text(`User ${userPoints} - COM ${comPoints}.`);
            endGame();
            game(options);
        }
        if (ComSelection === userSelection) {
            $('audio#pop5')[0].play()
            $('.subtitles').text(`The user has choosen ${userSelection} and the COM ${ComSelection}. ¯\\_(ツ)_/¯`);
            $('.punctuation').text(`User ${userPoints} - COM ${comPoints}.`);
            endGame();
            game(options);

        }
    }


    // Stop the game when one player reaches 3 poitns
    function endGame() {
        if (comPoints === 3) {
            $('audio#pop3')[0].play()
            $('.modal-title').text(`I Won! Try it again...`);
            $('.modal-body').text(`${userPoints} - ${comPoints}`);
            $('#myModal').modal('show');
            userPoints = 0;
            comPoints = 0;
        }
        if (userPoints === 3) {
            $('audio#pop4')[0].play()
            $('.modal-title').text(`You are the Champion!!!`);
            $('.modal-body').text(`${userPoints} - ${comPoints}`);
            $('#myModal').modal('show');
            userPoints = 0;
            comPoints = 0;
        }
    };


    // Restar the game
    $('button.play-again').click(function() {
        $('audio#pop6')[0].play()
        $('#myModal').modal('hide');
        $('.subtitles').text(`---`);
        $('.punctuation').text(`User 0 - COM 0.`);
        game(options);
    })






    // game(options);

});