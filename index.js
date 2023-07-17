function setAlarm() {
  const alarmInput = document.getElementById('alarmTime').value;
  const alarmTime = new Date(alarmInput);
  const currentTime = new Date();

  if (alarmTime > currentTime) {
    const timeDifference = alarmTime.getTime() - currentTime.getTime();
    setTimeout(() => {
      alert('Wake up!');
    }, timeDifference);
  } else {
    alert('Please select a future time for the alarm.');
  }
}
