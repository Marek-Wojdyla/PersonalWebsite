// pobieram elementy z klasą "Projects title"
const projectTitlesElements = document.querySelectorAll(".Projects-title");
//pobieram elementy z klasą "Projects-img-packet"
const projectImgPacket = document.querySelectorAll(".Projects-img-packet")



// projectTitlesElements.forEach((element) => element.addEventListener("click", changeFunction()) )

projectTitlesElements[0].addEventListener("click", () => {
    projectImgPacket[0].style.display = 'block'
    projectImgPacket[1].style.display = 'none'
    projectImgPacket[2].style.display = 'none'
    projectImgPacket[3].style.display = 'none'
    projectImgPacket[4].style.display = 'none'
  })

projectTitlesElements[1].addEventListener("click", () => {
  projectImgPacket[1].style.display = 'block'
  projectImgPacket[0].style.display = 'none'
  projectImgPacket[2].style.display = 'none'
  projectImgPacket[3].style.display = 'none'
  projectImgPacket[4].style.display = 'none'
})

projectTitlesElements[2].addEventListener("click", () => {
    projectImgPacket[2].style.display = 'block'
    projectImgPacket[0].style.display = 'none'
    projectImgPacket[1].style.display = 'none'
    projectImgPacket[3].style.display = 'none'
    projectImgPacket[4].style.display = 'none'
})

projectTitlesElements[3].addEventListener("click", () => {
    projectImgPacket[3].style.display = 'block'
    projectImgPacket[0].style.display = 'none'
    projectImgPacket[1].style.display = 'none'
    projectImgPacket[2].style.display = 'none'
    projectImgPacket[4].style.display = 'none'
})

projectTitlesElements[4].addEventListener("click", () => {
  projectImgPacket[4].style.display = 'block'
  projectImgPacket[0].style.display = 'none'
  projectImgPacket[1].style.display = 'none'
  projectImgPacket[2].style.display = 'none'
  projectImgPacket[3].style.display = 'none'
})

// projectTitlesElements.forEach(elementyP => {
//     elementyP.addEventListener("click", () => {
//         if (elementyP[0]){

//         }
//         projectImgPacket.forEach(elementyImg => {
//             elementyImg.classList.toggle("show")
//         })
//     })
// })