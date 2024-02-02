<!-- Navbar.svelte in the lib directory -->
<script lang='ts'>
    // Function to handle scrolling to a specific section
    function scrollToSection(sectionId:any) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  </script>
  
  <nav class="navbar bg-yellow-100 flex items-center">
    <div class="flex items-center justify-center">
      <button class="btn btn-ghost normal-case text-xl font-bold chrisClass">Pregnancy Paths</button>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li class="chrisTest font-bold">
          <!-- Using href="#" and preventDefault to avoid page jump -->
          <a href="#" on:click|preventDefault={() => scrollToSection('#about-us')} tabindex="0">About Us</a>
        </li>
        <li class="chrisTest font-bold">
          <a href="#" on:click|preventDefault={() => scrollToSection('#statistics')} tabindex="0">Statistics</a>
        </li>
        <li class="chrisTest font-bold">
          <a href="#" on:click|preventDefault={() => scrollToSection('#testimonials')} tabindex="0">Testimonials</a>
        </li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </nav>
  <style lang="postcss">
    @media (max-width: 768px){
        .chrisClass {
            margin-left: 10px;
            font-size: 15px;
            
        }
        .chrisTest {
            font-size: 9.5px;
            margin-right: 0;
        }
    }
  </style>
  