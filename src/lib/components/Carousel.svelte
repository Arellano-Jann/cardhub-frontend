<!-- <script>
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import 'swiper/css';
</script> -->

<!-- <script>
  // core version pagination modules:
    import Swiper, { Pagination, EffectCards } from 'swiper';
    // import Swiper and modules styles
    import 'swiper/css';
    import 'swiper/css/';
    import 'swiper/css/pagination';
    import 'swiper/css/effectcards';

    // init Swiper:
    const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Pagination, EffectCards],
    });
</script> -->

<script>
    import { register } from 'swiper/element/bundle';
    import Swiper, { Pagination, EffectCards } from 'swiper';
  
    register();
  
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
    };
    const onSlideChange = (e) => {
      console.log('slide changed')
    };

    let swiperEl;

    function handleNext() {
        swiperEl.swiper.slideNext();
    };

    function handlePrev() {
        swiperEl.swiper.slidePrev();
    };
  </script>

<!-- <Swiper
    modules={[EffectCards, Pagination]}
    spaceBetween={50}
    slidesPerView={3}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
    > -->

<swiper-container
    bind:this={swiperEl}
    slides-per-view={2}
    space-between={9}
    centered-slides={true}
    pagination={{
      hideOnClick: true,
    }} image.png
    on:progress={onProgress}
    on:slidechange={onSlideChange}
    modules={[EffectCards, Pagination]}
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

<button on:click={handleNext}>Next</button>
<button on:click={handlePrev}>Prev</button>