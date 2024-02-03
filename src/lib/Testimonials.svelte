<script>
    import { onMount } from "svelte";
    import Swiper from 'swiper';
    import { Navigation, Pagination, Autoplay } from "swiper/modules"

    onMount(() => {
        const swiper = new Swiper('.mySwiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });
    });

    function scrollToContent() {
        const contentElement = document.querySelector('#statistics');
        if(contentElement)
            contentElement.scrollIntoView({ behavior: 'smooth' });
    }
</script>
<!-- Testimonials Section -->
<section id="testimonials" class="bg-gray-50 text-center py-10 hiddenChris">
    <h1 class="text-8xl mb-10 UnderstandingNumbersTextColor font-bold">Stories of Impact</h1>
    
    <!-- Swiper -->
    <div class="mySwiper">
        <div class="swiper-wrapper">
            
            <!-- Testimonial Slide 1 -->
            <div class="swiper-slide">
            <blockquote class="max-w-screen-md mx-auto">
                <p class="text-2xl font-medium">
                "Pregnancy Paths was a pillar of support during my journey. Their compassionate guidance helped me make an informed decision with confidence and peace."
                </p>
                <figure>

                    <figcaption class="mt-4 p-10">— Emma S., Grateful Mother</figcaption>
                </figure>
            </blockquote>
            </div>
            <!-- Testimonial Slide 2 -->
            <div class="swiper-slide">
            <blockquote class="max-w-screen-md mx-auto">
                <p class="text-2xl font-medium">
                "The resources and community support I found here were life-changing. I'm thankful for the care and dedication of everyone involved."
                </p>
                <figure>

                    <figcaption class="mt-4">— Aiden J., Proud Parent</figcaption>
                </figure>
            </blockquote>
            </div>
            <!-- Testimonial Slide 3 -->
            <div class="swiper-slide">
                <blockquote class="max-w-screen-md mx-auto">
                    <p class="text-2xl font-medium">
                    "As someone facing difficult choices, the unbiased information and personal stories I found on Pregnancy Paths were invaluable."
                    </p>
                    <figure>

                        <figcaption class="mt-4">— Riley K., Empowered Visitor</figcaption>
                    </figure>
                </blockquote>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
            <!-- Add Navigation -->
        </div>
        
    </div>

    <a target="_blank" href="https://mcdonalds.com"><button class="btn btn-secondary"> Get Help Now</button> </a>
    <a href="/checkout" target="_blank"> <button class="btn btn-accent">Support Our Cause</button> </a>
    <button class="btn btn-primary" on:click={scrollToContent}>See Our Impact</button>
</section>

<style>
    .UnderstandingNumbersTextColor {
        color: rgb(90, 90, 223);
    }

    .swiper-button-prev, .swiper-button-next {
        color: #333;
        width: 50px;
        height: 50px;
        background: rgba(92, 217, 233, 0.8);
        border-radius: 50%;
        z-index: 10;

    }

    .swiper-button-prev {
        left: 10px;
    }

    .swiper-button-next {
        right: 10px;
    }

    @media (max-width: 768px){

        .UnderstandingNumbersTextColor{
            font-size: 34px;
        }

        .swiper-button-prev, .swiper-button-next {
            color: #333;
            width: 50px !important;
            height: 50px !important;
            background: rgba(92, 217, 233, 0.8);
            border-radius: 50%;
            z-index: 10;
            bottom: 1px;
            

        }
        .swiper-slide {
            padding: 10px;
        }
    }
</style>