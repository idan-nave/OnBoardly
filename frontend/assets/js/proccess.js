const add = document.getElementById('button');
add.addEventListener('click', () => {
    // קבלת אלמנט הסטייג'ים
    const stagesContainer = document.getElementById('stages');

    // קבלת מספר הסטייג'ים הקיימים
    const currentStages = stagesContainer.querySelectorAll('input').length;

    // יצירת stage חדש
    const newStageNumber = currentStages + 1;

    // יצירת ה-label וה-input החדש
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `stage-${newStageNumber}`);
    newLabel.innerText = `Stage ${newStageNumber}:`;

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', `stage-${newStageNumber}`);
    newInput.setAttribute('placeholder', `Enter your stage ${newStageNumber}`);

    // הוספת ה-label וה-input החדשים למיכל הסטייג'ים
    stagesContainer.insertBefore(newLabel, add); // ממקמים את ה-label לפני הכפתור
    stagesContainer.insertBefore(newInput, add); // ממקמים את ה-input לפני הכפתור
});
