const startbtn = document.querySelector(".btn-exc");
const result = document.querySelector(".cont-result");
const modal = document.querySelector("#modal");
const modalbtn = document.querySelector(".btn-go");
const modalClose = document.querySelector(".modal-close");
const loading = document.querySelector(".loading");
const share = document.querySelector(".btn-share");

function cal(e) {
  e.preventDefault(); // 기본 동작은 막음
  //e.stopPropagation(); // 이벤트 전파를 막음
  const textField = document.getElementById("txt-field");
  let timeField = document.getElementById("time-field");
  let timeField_int = Number(timeField.value);
  console.log(timeField_int);
  const fieldResult = document.querySelector(".field-result");
  const timeResult = document.querySelector(".time-result");

  if (textField.value == "") {
    alert("직업이 입력 되지 않았습니다.");
    textField.focus();
    return false;
  } else if (timeField.value == "") {
    alert("훈련 시간이 입력 되지 않았습니다.");
    timeField.focus();
    return false;
  } else if (timeField_int > 24) {
    alert("인간은 24시간 이상 훈련할수 없습니다.");
    return false;
  }

  // result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function () {
    loading.style.display = "none";
    result.style.display = "block";

    fieldResult.innerText = textField.value;
    timeResult.innerText = parseInt(10000 / timeField_int, 10);
  }, 1500);
}

function modalMain(e) {
  // console.log('Modal click');
  e.stopPropagation();
  modal.style.display = "flex";

  window.onclick = function (event) {
    // console.log('onclick', event.path, event.path.includes(modal));
    if (!event.path.includes(modal)) {
      closeModal();
      window.onclick = null;
    }
  };
  // window.addEventListener('click', (event) => {
  //   console.log('onclick', event.path, event.path.includes(modal));
  //   if(!event.path.includes(modal)) {
  //     ModalClose();
  //     // window.onclick = null;
  //   }
  // })
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == window) {
    closeModal();
  }
};

let url = window.location.href;

function copyUrl() {  
    var type = "text/plain";
    var blob = new Blob([url], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      function () {
        console.log("성공");
        alert('사이트 주소가 복사되었습니다!!!!')
      },
      function () {
        console.log("실패");
        /* failure */
      }
    );
}

startbtn.addEventListener("click", cal);
modalClose.addEventListener("click", closeModal);
modalbtn.addEventListener("click", modalMain);
share.addEventListener("click", copyUrl);
