let cl = console.log;

const changebg = document.getElementById("changebg")
const allBox = [...document.querySelectorAll(".all")] // allbox is array of document object




const onBgChange = (eve) => {
    cl(eve.target.value)
    let getClass = eve.target.value;
    allBox.forEach(ele => {
        ele.classList.add("d-none")
    })
    let getDiv = [...document.querySelectorAll(`.${getClass}`)]
    cl(getDiv)
    getDiv.forEach(ele =>  ele.classList.remove("d-none"))
}








changebg.addEventListener("change", onBgChange)