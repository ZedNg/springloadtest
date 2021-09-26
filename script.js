// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict'
  // Block position for checklist for mobile
  let smallDevice = window.matchMedia("(min-width: 800px)");
  handleDeviceChange(smallDevice);
  smallDevice.addListener(handleDeviceChange);

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.requires-validation')

  let showTiger = document.getElementById('tigerCheckbox')

  showTiger.addEventListener('change', showTypeTiger);


  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        var checkBox = document.getElementsByClassName('form-check-input');
        var array = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        var showValid = document.getElementById('selectOne')



        for (var i = 0; i < checkboxes.length; i++) {
          array.push(checkboxes[i].value)
        }


        if (array.length == 0) {
          for (var j = 0; j < checkBox.length; j++) {
            checkBox[j].setCustomValidity("Error Message")
            showValid.classList.add("show")
          }
        } else {
          for (var k = 0; k < checkBox.length; k++) {
            checkBox[k].setCustomValidity("")
            showValid.classList.remove("show")
          }
        }

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()



        }
        form.classList.add('was-validated')


      }, false)
    })

  function showTypeTiger() {

    let showType = document.getElementById('unHide')
    if (this.checked) {
      showType.classList.add("show")
    } else {
      showType.classList.remove("show")
    }
  }

  // Function when screenwidth is < 600px
  function handleDeviceChange(e) {
    let changeLayout = document.getElementsByClassName('form-check');
    if (!e.matches) {
      for (let i = 0; i < changeLayout.length; i++) {
        if (changeLayout[i].classList.contains('form-check-inline')) {
          changeLayout[i].classList.remove('form-check-inline');
        }
      }
    } else {
      for (let i = 0; i < changeLayout.length; i++) {
        if (!changeLayout[i].classList.contains('form-check-inline')) {
          changeLayout[i].classList.add('form-check-inline');
        }
      }
    }
  }
})()
