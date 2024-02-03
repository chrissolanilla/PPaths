<script>
    // function scrollToTestimonials() {
    //     const testElement = document.querySelector('#testimonials');
    //     if(testElement)
    //         testElement.scrollIntoView({ behavior: 'smooth'});
    // }
</script>

<section id="statistics" class="text-center py-10 hiddenChris">
    <h1 class="text-8xl mb-10 UnderstandingNumbersTextColor font-bold">Understanding the Numbers</h1>
    <div class="stat-container mx-auto">

        <!-- Clients Seen in 2023 -->
        <div class="statChild stat-block bg-yellow-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Clients Seen in 2023</div>
            <div class="stat-value text-6xl text-purple-600">458</div>
        </div>

        <!-- Free Ultrasounds Performed -->
        <div class="statChild stat-block bg-pink-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Free Ultrasounds Performed</div>
            <div class="stat-value text-6xl text-purple-600">312</div>
        </div>

        <!-- Free Pregnancy Tests -->
        <div class="statChild stat-block bg-green-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Free Pregnancy Tests</div>
            <div class="stat-value text-6xl text-purple-600">380</div>
        </div>

        <!-- Spiritual Support -->
        <div class="statChild stat-block bg-blue-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Spiritual Support</div>
            <div class="stat-value text-6xl text-purple-600">312</div>
        </div>

        <!-- Bright Course Prenatal and Parenting Ser. -->
        <div class="statChild stat-block bg-indigo-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Bright Course Prenatal and Parenting Ser.</div>
            <div class="stat-value text-6xl text-purple-600">260</div>
        </div>

        <!-- Material Assistance -->
        <div class="statChild stat-block bg-red-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Material Assistance</div>
            <div class="stat-value text-6xl text-purple-600">280</div>
        </div>

        <!-- Paid Staff -->
        <div class="statChild stat-block bg-orange-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Paid Staff</div>
            <div class="stat-value text-6xl text-purple-600">2</div>
        </div>

        <!-- Volunteers -->
        <div class="statChild stat-block bg-teal-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Volunteers</div>
            <div class="stat-value text-6xl text-purple-600">12</div>
        </div>

        <!-- Licensed Medical Professionals -->
        <div class="statChild stat-block bg-purple-100 p-6 rounded-lg shadow-lg">
            <div class="stat-title text-3xl text-gray-700">Licensed Medical Professionals</div>
            <div class="stat-value text-6xl text-purple-600">2</div>
        </div>

        <!-- <button on:click={scrollToTestimonials} class="btn btn-primary mt-9">See Impact</button> -->
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
