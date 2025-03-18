export const oneColumn = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="w-full">
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for content blocks -->
      </div>
    </div>
  </div>
</section>
`;

export const twoColumns = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 1 content -->
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 2 content -->
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const threeColumns = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 1 content -->
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 2 content -->
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 3 content -->
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const fourColumns = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 1 content -->
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 2 content -->
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 sm:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 3 content -->
        </div>
      </div>
      <div class="w-full sm:w-1/2 lg:w-1/4 px-4">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for column 4 content -->
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const twoThirdsOneThird = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-2/3 px-4 mb-8 md:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for main content -->
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for sidebar content -->
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const oneThirdTwoThirds = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for sidebar content -->
        </div>
      </div>
      <div class="w-full md:w-2/3 px-4">
        <div class="rounded-lg overflow-hidden h-full min-h-[50px]">
          <!-- Droppable area for main content -->
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const gridLayout = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 1 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 2 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 3 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 4 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 5 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for grid item 6 -->
      </div>
    </div>
  </div>
</section>
`;

export const asymmetricGrid = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="md:col-span-2 rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for featured item -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for standard item 1 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for standard item 2 -->
      </div>
      <div class="rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for standard item 3 -->
      </div>
      <div class="md:col-span-3 rounded-lg overflow-hidden min-h-[50px]">
        <!-- Droppable area for wide item -->
      </div>
    </div>
  </div>
</section>
`;

export const zPattern = `
<section class="py-12 px-4">
  <div class="container mx-auto">
    <div class="flex flex-col space-y-12">
      <!-- Row 1: Image Right -->
      <div class="flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div class="rounded-lg overflow-hidden min-h-[50px]">
            <!-- Droppable area for left content -->
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="bg-gray-200 rounded-lg overflow-hidden h-64 w-full flex items-center justify-center">
            <!-- Droppable area for image -->
            <span class="text-gray-500">Drag an image here</span>
          </div>
        </div>
      </div>
      
      <!-- Row 2: Image Left -->
      <div class="flex flex-col md:flex-row-reverse items-center">
        <div class="w-full md:w-1/2 md:pl-8 mb-8 md:mb-0">
          <div class="rounded-lg overflow-hidden min-h-[50px]">
            <!-- Droppable area for right content -->
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="bg-gray-200 rounded-lg overflow-hidden h-64 w-full flex items-center justify-center">
            <!-- Droppable area for image -->
            <span class="text-gray-500">Drag an image here</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const columns = {
    oneColumn,
    twoColumns,
    threeColumns,
    fourColumns,
    twoThirdsOneThird,
    oneThirdTwoThirds,
    gridLayout,
    asymmetricGrid,
    zPattern
};


export const oneColumnIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="40" y="44" width="186" height="62" rx="2" fill="#E2E8F0"></rect><rect x="60" y="58" width="146" height="8" rx="2" fill="#4A5568"></rect><rect x="60" y="72" width="146" height="4" rx="2" fill="#A0AEC0"></rect><rect x="60" y="82" width="146" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const twoColumnsIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="40" y="44" width="89" height="62" rx="2" fill="#E2E8F0"></rect><rect x="137" y="44" width="89" height="62" rx="2" fill="#E2E8F0"></rect><rect x="50" y="58" width="69" height="8" rx="2" fill="#4A5568"></rect><rect x="147" y="58" width="69" height="8" rx="2" fill="#4A5568"></rect><rect x="50" y="72" width="69" height="4" rx="2" fill="#A0AEC0"></rect><rect x="147" y="72" width="69" height="4" rx="2" fill="#A0AEC0"></rect><rect x="50" y="82" width="69" height="4" rx="2" fill="#A0AEC0"></rect><rect x="147" y="82" width="69" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const threeColumnsIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="22" y="44" width="70" height="62" rx="2" fill="#E2E8F0"></rect><rect x="98" y="44" width="70" height="62" rx="2" fill="#E2E8F0"></rect><rect x="174" y="44" width="70" height="62" rx="2" fill="#E2E8F0"></rect><rect x="32" y="58" width="50" height="8" rx="2" fill="#4A5568"></rect><rect x="108" y="58" width="50" height="8" rx="2" fill="#4A5568"></rect><rect x="184" y="58" width="50" height="8" rx="2" fill="#4A5568"></rect><rect x="32" y="72" width="50" height="4" rx="2" fill="#A0AEC0"></rect><rect x="108" y="72" width="50" height="4" rx="2" fill="#A0AEC0"></rect><rect x="184" y="72" width="50" height="4" rx="2" fill="#A0AEC0"></rect><rect x="32" y="82" width="50" height="4" rx="2" fill="#A0AEC0"></rect><rect x="108" y="82" width="50" height="4" rx="2" fill="#A0AEC0"></rect><rect x="184" y="82" width="50" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const fourColumnsIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="13" y="44" width="57" height="62" rx="2" fill="#E2E8F0"></rect><rect x="76" y="44" width="57" height="62" rx="2" fill="#E2E8F0"></rect><rect x="139" y="44" width="57" height="62" rx="2" fill="#E2E8F0"></rect><rect x="202" y="44" width="57" height="62" rx="2" fill="#E2E8F0"></rect><rect x="20" y="58" width="43" height="6" rx="2" fill="#4A5568"></rect><rect x="83" y="58" width="43" height="6" rx="2" fill="#4A5568"></rect><rect x="146" y="58" width="43" height="6" rx="2" fill="#4A5568"></rect><rect x="209" y="58" width="43" height="6" rx="2" fill="#4A5568"></rect><rect x="20" y="70" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="83" y="70" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="146" y="70" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="209" y="70" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="20" y="78" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="83" y="78" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="146" y="78" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="209" y="78" width="43" height="3" rx="1.5" fill="#A0AEC0"></rect></svg>';

export const twoThirdsOneThirdIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="30" y="44" width="124" height="62" rx="2" fill="#E2E8F0"></rect><rect x="162" y="44" width="74" height="62" rx="2" fill="#E2E8F0"></rect><rect x="46" y="58" width="92" height="8" rx="2" fill="#4A5568"></rect><rect x="173" y="58" width="52" height="8" rx="2" fill="#4A5568"></rect><rect x="46" y="72" width="92" height="4" rx="2" fill="#A0AEC0"></rect><rect x="173" y="72" width="52" height="4" rx="2" fill="#A0AEC0"></rect><rect x="46" y="82" width="92" height="4" rx="2" fill="#A0AEC0"></rect><rect x="173" y="82" width="52" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const oneThirdTwoThirdsIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="30" y="44" width="74" height="62" rx="2" fill="#E2E8F0"></rect><rect x="112" y="44" width="124" height="62" rx="2" fill="#E2E8F0"></rect><rect x="41" y="58" width="52" height="8" rx="2" fill="#4A5568"></rect><rect x="128" y="58" width="92" height="8" rx="2" fill="#4A5568"></rect><rect x="41" y="72" width="52" height="4" rx="2" fill="#A0AEC0"></rect><rect x="128" y="72" width="92" height="4" rx="2" fill="#A0AEC0"></rect><rect x="41" y="82" width="52" height="4" rx="2" fill="#A0AEC0"></rect><rect x="128" y="82" width="92" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const gridLayoutIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="30" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="98" y="30" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="176" y="30" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="20" y="80" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="98" y="80" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="176" y="80" width="70" height="40" rx="2" fill="#E2E8F0"></rect><rect x="29" y="40" width="52" height="6" rx="2" fill="#4A5568"></rect><rect x="107" y="40" width="52" height="6" rx="2" fill="#4A5568"></rect><rect x="185" y="40" width="52" height="6" rx="2" fill="#4A5568"></rect><rect x="29" y="90" width="52" height="6" rx="2" fill="#4A5568"></rect><rect x="107" y="90" width="52" height="6" rx="2" fill="#4A5568"></rect><rect x="185" y="90" width="52" height="6" rx="2" fill="#4A5568"></rect></svg>';

export const asymmetricGridIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="44" width="120" height="62" rx="2" fill="#E2E8F0"></rect><rect x="148" y="44" width="50" height="62" rx="2" fill="#E2E8F0"></rect><rect x="206" y="44" width="50" height="62" rx="2" fill="#E2E8F0"></rect><rect x="70" y="58" width="25" height="8" rx="2" fill="#4A5568"></rect><rect x="160" y="58" width="25" height="8" rx="2" fill="#4A5568"></rect><rect x="218" y="58" width="25" height="8" rx="2" fill="#4A5568"></rect><rect x="60" y="72" width="40" height="4" rx="2" fill="#A0AEC0"></rect><rect x="155" y="72" width="35" height="4" rx="2" fill="#A0AEC0"></rect><rect x="213" y="72" width="35" height="4" rx="2" fill="#A0AEC0"></rect></svg>';

export const zPatternIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="30" y="30" width="94" height="40" rx="2" fill="#E2E8F0"></rect><rect x="142" y="30" width="94" height="40" rx="2" fill="#CBD5E0"></rect><rect x="30" y="80" width="94" height="40" rx="2" fill="#CBD5E0"></rect><rect x="142" y="80" width="94" height="40" rx="2" fill="#E2E8F0"></rect><rect x="45" y="40" width="60" height="6" rx="2" fill="#4A5568"></rect><rect x="160" y="40" width="60" height="6" rx="2" fill="#4A5568"></rect><rect x="45" y="90" width="60" height="6" rx="2" fill="#4A5568"></rect><rect x="160" y="90" width="60" height="6" rx="2" fill="#4A5568"></rect><rect x="45" y="50" width="60" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="160" y="50" width="60" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="45" y="100" width="60" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="160" y="100" width="60" height="3" rx="1.5" fill="#A0AEC0"></rect></svg>';

export const icons = {
    oneColumnIcon,
    twoColumnsIcon,
    threeColumnsIcon,
    fourColumnsIcon,
    twoThirdsOneThirdIcon,
    oneThirdTwoThirdsIcon,
    gridLayoutIcon,
    asymmetricGridIcon,
    zPatternIcon
};