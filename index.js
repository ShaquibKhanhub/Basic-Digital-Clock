let clock = () => {
  let date = new Date();
  // console.log(date)

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let half = "";

  if (hours >= 12) half = "PM";
  else half = "AM";

  document.getElementById('hours').innerText=hours
  document.getElementById('minutes').innerText=minutes
  document.getElementById('seconds').innerText=seconds
  document.getElementById('half').innerText=half;
  
  setTimeout(clock,1000);
};

clock();
//here we used clock() for calling function again and again
