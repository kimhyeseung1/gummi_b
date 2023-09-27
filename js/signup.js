window.addEventListener("load", function() { 
    $("#publisher").change(function () {
        var selectedOption = $("#publisher option:selected").val();
        $("#mail_publisher").attr("placeholder", selectedOption); // 선택한 값으로 input의 placeholder를 업데이트
    }); 
    $("#confirm").click(function () {
        var userID = $("#user_id").val()
        var userName = $("#user_name").val()
        var userGen = $(".gen:checked").val()
        var userpw = $("#user_pw").val()
        var userpwcon = $("#pw_confirm").val()

        if (userpw != userpwcon) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 입력해주세요");
            return;
        }

        var mailId = $("#mail_id").val();
        var mailpub = $("#mail_publisher").val();
        var selectedPublisher = $("#publisher option:selected").text();

        if (selectedPublisher === "직접입력") {
        var mailFull = mailId + "@" + mailpub;
        } else {
        var mailFull = mailId + "@" + selectedPublisher;
        }

        // var mailFull = mailid + "@" + mailpub;

        var useraddr = $("#user_address").val()

        var carrier = $(".phone:checked").val();
        var phoneNum = $("#phone1").val() + "-" + $("#phone2").val() + "-" + $("#phone3").val();
        var phoneInfo = carrier + " / " + phoneNum

        var favorNum = $(".favor:checked").length
        var favor = "";

        for (var i = 0; i < favorNum; i++) {
            favor += $(".favor:checked").eq(i).val() + " ";
        }

        var intro = $("#introduce").val()

        var agreement = $("#agreement:checked").length
        if (!agreement) {
            alert("약관에 동의하셔야 회원가입을 하실 수 있습니다.");
        }else {
            location.href = "login.html"

        }
        
        var pwmask = "";
        for (var i = 0; i < userpw.length; i++) {
            pwmask += "*"
        }
        var joinInfo =
            "아이디 : " + userID + "\n" +
            "이름 : " + userName + "\n" +
            "성별 : " + userGen + "\n" +
            "비밀번호 : " + pwmask + "\n" +
            "메일주소 : " + mailFull + "\n" +
            "휴대전화 : " + phoneInfo + "\n" +
            "주소 : " + useraddr + "\n";
        var con = confirm(joinInfo + "입력하신 정보가 맞습니까?");
        if (con) {
            alert("회원가입이 완료되었습니다.");
            location.href = "login.html"
        }
    })
})
