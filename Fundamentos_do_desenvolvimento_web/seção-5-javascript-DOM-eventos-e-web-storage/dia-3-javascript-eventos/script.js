function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createNumberDays(){
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const days = document.getElementById('days');
  for(let index = 0; index < decemberDaysList.length; index += 1){
    const daysNumber = document.createElement("li");
    daysNumber.innerHTML = decemberDaysList[index];
    days.appendChild(daysNumber);
    
    if(decemberDaysList[index] === 24 || decemberDaysList[index]=== 25 || decemberDaysList[index] ===31){
        daysNumber.setAttribute("class","day holiday");
    }else if (decemberDaysList[index] === 4||decemberDaysList[index] === 11||decemberDaysList[index] === 18||decemberDaysList[index] === 25){
        daysNumber.setAttribute("class","day friday");

    }else{
        daysNumber.className = "day";
    }
  }
}
createNumberDays();