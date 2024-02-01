window.addEventListener('load', () => {
    Swal.fire({
        title: "Do you want to play music in the background?",
        text: "Play aja dulu biar gak sepi waktu baca",
        icon: "Enjoy",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, play it!"
      }).then((result) => {
        if (result.isConfirmed) {
             document.querySelector('.music').play();
        }
        animationTimeline();
      })
})

const animationTimeline = () => {
     const textboxChars = document.getElementsByClassName('textbox__chat')[0];
    const hbd = document.getElementsByClassName('wish__hbd')[0];

     textboxChars.innerHTML = `<span>${textboxChars.innerHTML.split('').join('</span><span>')}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML.split('').join('</span><span>')}</span>`;

    const tl = new TimelineMax();

     tl.to('.container', 0.6, {
         visibility: "visible" 
     })
      .from('.one', 0.7, {
          opacity: 0,
          y: 10
      })
      .from('.two', 0.4, {
          opacity: 0,
          y: 10
      })
      .to('.one', 0.7, {
          opacity: 0,
          y: 10
      }, '+=3')
      .to('.two', 0.7, {
          opacity: 0,
          y: 10
     }, '-=1')

     .from('.three', 0.7, {
         opacity: 0,
         scale : 0.2
     })

     .from('.fake__button', 0.3, {
         opacity: 0,
         scale: 0.2
     })

     .staggerTo('.textbox__chat  span', 1.5, {
         visibility: 'visible',
     }, 0.05)

     .to('.fake__button', 0.1, {
         backgroundColor: 'rgb(127,206,248)'
     }, '+=4')
     .to('.three', 0.5, {
         opacity: 0,
         scale: 0.2,
         y: -150,
     }, '+=1')

     .staggerFromTo('.baloons img', 2.5, {
         opacity: 0,
         y: 1400
     }, {
         opacity: 1,
         y: -1000
     }, 0.2)
     .from('.profile', 0.5, {
         opacity: 0,
         scale: 0.5,
         x: 25,
         y: -25,
         rotationZ: -45
     }, '-=2')
     .staggerFrom('.wish__hbd span', 0.7,{
         opacity: 0,
         y: -50,
         rotation: 150,
         skewX: '30deg',
         ease: Elastic.easeOut.config(1, 0.5)
     }, 0.1)
     .staggerFromTo('.wish__hbd span', 0.7, {
         scale: 1.4,
         rotateY: 150
     }, {
         scale: 1,
         rotateY: 0,
         color: '#ff69b',
         ease: Expo.easeOut
     }, 0.1, 'party')
     .from('.wish h5', 0.5, {
         opacity: 0,
         y: 10,
         skewX: '-15deg'
     }, 'party')
     .staggerTo('.six svg', 0.8, {
         opacity: 0,
         visibility: 'visible',
         scale: 80,
         repeat: 2,
         repeatDelay: 0.6,
     }, 0.3)
     .to('.four', 0.5, {
         opacity: 0,
         y: 30,
         zIndex: '-1'
     })
}