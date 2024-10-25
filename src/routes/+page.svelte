<script lang="ts">
  import { formatDate } from '$lib/utils';
  import portrait from '$lib/assets/gerrit.jpg';

  export let data;
</script>

<!-- component -->
<!-- component -->
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="max-w-[720px] mx-auto">
      <!-- Centering wrapper -->
      <div
        class="relative flex bg-clip-border rounded-xl bg-gray-800 shadow-md w-full max-w-[48rem] flex-row"
      >
        <div
          class="relative w-2/5 m-0 overflow-hidden bg-gray-800 rounded-r-none bg-clip-border rounded-xl shrink-0"
        >
          <img
            src={portrait}
            alt="Portrait of Gerrit Wanderer"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-6">
          <h6
            class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase"
          >
            Gerrit Wanderer
          </h6>
          <h4
            class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white"
          >
            A place dedicated for my curiosity
          </h4>
          <p
            class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white"
          >
            Cherish each blossom, each idea that you sow, For in the field of the mind, a wildflower
            will grow. Connecting, exploring, in a fleeting display, A garden of thoughts that will
            bloom and then sway.
          </p>
        </div>
      </div>
    </div>
    <div class="py-12 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-foMt font-medium mb-2">Wildflower Notes</h2>
          <p class="leading-relaxed text-base">
            My notes are placed in the wildflower field, were nature could settle down and give
            flowers the space to easily sprout, grow and build connections with other flowers and
            organisms on this field.
          </p>
          <a class="mt-3 text-indigo-400 inline-flex items-center"
            >Read More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Propagator Lab</h2>
          <p class="leading-relaxed text-base">
            What kind of plant is this, where does it come from and which odor will the plant
            produce? Will in go into symbiose easy with wither organisms or not? An answer to these
            questions can only be found in my own propagator lab.
          </p>
          <a class="mt-3 text-indigo-400 inline-flex items-center"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Compost</h2>
          <p class="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
            indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter
            tumblr live-edge tilde.
          </p>
          <a class="mt-3 text-indigo-400 inline-flex items-center"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
