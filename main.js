function getPlayer(playerNameId) {
    const name = document.getElementById(playerNameId);
    const player = name.innerText;


    const selectedPlayerElement = document.getElementById('selected-player-ul');
    const li = document.createElement('li');

    selectedPlayerElement.appendChild(li);

    const liList = document.querySelectorAll('#selected-player-ul li');
    const liListLength = liList.length + '. ';


    if (liList.length <= 5) {
        li.innerText = liListLength + player;

    }

    else {
        alert("You can't add more than 5 players");

    }
}




document.getElementById('calculate').addEventListener('click', function () {
    const playerSallery = document.getElementById('player-sallery');
    const playerSalleryString = playerSallery.value;
    const playersSalleries = parseFloat(playerSalleryString);

    const liList = document.querySelectorAll('#selected-player-ul li')
    const liListLength = liList.length;
    if (liListLength <= 5) {
        const playersExpense = playersSalleries * liListLength;

        const PerPlayerExpenses = document.getElementById('expenses');
        PerPlayerExpenses.innerText = playersExpense;
    }
    else {
        alert("Tried to added more")
    }

})



document.getElementById('total-calculation').addEventListener('click', function () {
    const PerPlayerExpenses = document.getElementById('expenses');
    const PerPlayerExpensesString = PerPlayerExpenses.innerText;
    const perPlayerExpenses = parseFloat(PerPlayerExpensesString);

    const managerExpense = document.getElementById('manager-expense');
    const managerExpenseString = managerExpense.value;
    const managerExpenseAmount = parseFloat(managerExpenseString);

    const coachExpenses = document.getElementById('coach-expense');
    const coachExpensesString = coachExpenses.value;
    const coachExpensesAmount = parseFloat(coachExpensesString);

    const totalExpenses = perPlayerExpenses + managerExpenseAmount + coachExpensesAmount;

    const finalExpenses = document.getElementById('total-expenses');
    finalExpenses.innerText = totalExpenses;
})




