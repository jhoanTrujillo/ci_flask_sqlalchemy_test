// Initialize sidenav 
// This code was copied from the Google Materialize css framework
document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);

     // datepicker initialization
     let datepicker = document.querySelectorAll(".datepicker");
     M.Datepicker.init(datepicker, {
         format: "dd mmmm, yyyy",
         i18n: {done: "Select"}
     });
 
     // select initialization
     let selects = document.querySelectorAll("select");
     M.FormSelect.init(selects);
  });

