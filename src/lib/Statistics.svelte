<script>
        function scrollToTestimonials() {
        const testElement = document.querySelector('#testimonials');
        if(testElement)
            testElement.scrollIntoView({ behavior: 'smooth'});
    }
</script>

<section id="statistics" class="text-center py-10">
    <h1 class="text-8xl mb-10 UnderstandingNumbersTextColor font-bold">Understanding the Numbers</h1>
    <div class="stat-container mx-auto">

        <div class="stat-block bg-yellow-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Successful Pregnancies Supported</div>
            <div class="stat-value text-6xl text-purple-600">89,400</div>
            <div class="stat-desc text-xl text-gray-500">Supported by our comprehensive care programs</div>
        </div>
        
        <div class="stat-block bg-pink-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Adoptions Facilitated</div>
            <div class="stat-value text-6xl text-purple-600">5,230</div>
            <div class="stat-desc text-xl text-gray-500">Finding loving homes for children</div>
        </div>

        <div class="stat-block bg-green-100 p-6 rounded-lg shadow-lg">
            <div class="stat-title text-3xl text-gray-700">Families Receiving Financial Aid</div>
            <div class="stat-value text-6xl text-purple-600">12,300</div>
            <div class="stat-desc text-xl text-gray-500">Easing the journey for new parents</div>
        </div>
        <button on:click={scrollToTestimonials} class="btn btn-primary mt-9">See Impact</button>
    </div>
</section>

<style>
    .UnderstandingNumbersTextColor {
        color: rgb(90, 90, 223);
    }

    @media (max-width: 768px){
        .UnderstandingNumbersTextColor{
            font-size: 34px;
        }
        .stat-title {
            font-size: 16px;
        }
        .stat-desc {
            font-size: 12px;
        }
    }
</style>