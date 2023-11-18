$(document).ready(function() {
  function checkPopupState() {
    if($("#popup").is(":visible")) {
      history.pushState({popup: true}, "Форма обратной связи", "?popup=true");
    }
    else {
      history.pushState({}, "Главная", "/");
    }
  }
  document.querySelector(".close").addEventListener("click", function() {    
     document.getElementById("popup").style.display = "none";   
      history.pushState(null, null, " "); 
  });
  $("#openPopup").on("click", function() {
    $("#popup").css("display", "block");
    checkPopupState();
  });
  $(window).on("popstate", function(event) {
    if(event.originalEvent.state.popup) {
      $("#popup").css("display", "none");
    }
  });
  $("#feedbackForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var organization = $("#organization").val();
    var message = $("#message").val();
    var agreement = $("#agreement").is(":checked");
    $.ajax({
      url: "https://formcarry.com/s/1m72WUzc3U",
      type: "POST",
      data: {
        name: name,
        email: email,
        phone: phone,
        organization: organization,
        message: message,
        agreement: agreement
      },
      dataType: "json",
      success: function(response) {
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#organization").val("");
        $("#message").val("");
        $("#agreement").prop("checked", false);
        $("#messageContainer").html("Сообщение успешно отправлено");
      },
      error: function(error) {
        $("#messageContainer").html("Произошла ошибка при отправке сообщения");
      }
    });
  });
  if(localStorage.getItem("name")) {
    $("#name").val(localStorage.getItem("name"));
  }
  if(localStorage.getItem("email")) {
    $("#email").val(localStorage.getItem("email"));
  }
  if(localStorage.getItem("phone")) {
    $("#phone").val(localStorage.getItem("phone"));
  }
  if(localStorage.getItem("organization")) {
    $("#organization").val(localStorage.getItem("organization"));
  }
  if(localStorage.getItem("message")) {
    $("#message").val(localStorage.getItem("message"));
  }
  $("#feedbackForm input, #feedbackForm textarea").on("change", function() {
    localStorage.setItem("name", $("#name").val());
    localStorage.setItem("email", $("#email").val());
    localStorage.setItem("phone", $("#phone").val());
    localStorage.setItem("organization", $("#organization").val());
    localStorage.setItem("message", $("#message").val());
  });
});
