export const initParallaks = () => {
  const layersArray = [
    {element: document.querySelector(`.hero__image--layer2`),coefficient: 80,},
    {element: document.querySelector(`.hero__image--layer3`),coefficient: 20,},
  ];

  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const speed = 0.05;
  let positionX = 0;
  let positionY = 0;
  let coordXpercent = 0;
  let coordYpercent = 0;
  let animationFrameId;

  const setMouseParallaxStyle = () => {
    // if (window.matchMedia('(max-width: 991px)').matches) {
    //   if (document.body.dataset.animation === 'play') {
    //     layersArray.forEach((layer) => {
    //       if (!layer.element) return;
    //       layer.element.style.transform = ``;
    //     });
    //     document.body.dataset.animation = 'stop';
    //   }
    //   return;
    // };
    document.body.dataset.animation = 'play';
    
    const distX = coordXpercent - positionX;
    const distY = coordYpercent - positionY;

    positionX += distX * speed;
    positionY += distY * speed;

    layersArray.forEach((layer) => {
      if (!layer.element) return;
      layer.element.style.transform = `translate(${positionX / layer.coefficient}%, ${positionY / layer.coefficient}%)`;
    });

    animationFrameId = requestAnimationFrame(setMouseParallaxStyle);
  };

  const startAnimation = () => {
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(setMouseParallaxStyle);
    }
  };

  const stopAnimation = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  const changeCoordinates = (e) => {
    // if (window.matchMedia('(max-width: 991px)').matches) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const coordX = e.pageX - windowWidth / 2;
    const coordY = e.pageY - windowHeight / 2;

    coordXpercent = (coordX / windowWidth) * 100;
    coordYpercent = (coordY / windowHeight) * 100;
  };

  const initIntersectionObserver = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('mousemove', changeCoordinates);
          startAnimation();
          // if (window.matchMedia('(min-width: 992px)').matches) {
          // }
        } else {
          window.removeEventListener('mousemove', changeCoordinates);
          stopAnimation();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(heroSection);

    // window.addEventListener('resize', ()=>{
    //   if (window.matchMedia('(min-width: 992px)').matches) {
    //     if (heroSection.getBoundingClientRect().height + heroSection.getBoundingClientRect().top > 0) {
    //       window.addEventListener('mousemove', changeCoordinates);
    //       startAnimation();
    //     }
    //   }
    // });
  };

  initIntersectionObserver();
};