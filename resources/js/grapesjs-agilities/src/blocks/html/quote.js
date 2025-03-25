export const studentQuote = `
<div class="relative bg-[#0293A70A] p-8 rounded-lg">
  <!-- Left border line using pseudo-element -->
  <div class="absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>
  
  <!-- Quote text -->
  <blockquote class="ml-6">
    <p class="font-roboto font-semibold text-3xl leading-10 text-transparent bg-clip-text bg-gradient-to-b from-teal-500 to-blue-500">
      I can see my agilities in my school projects and my after school activities. I'll be able to plan for my future and look for jobs I'll be good at and I'll like doing.
    </p>
    <footer class="mt-4 font-roboto font-normal text-base leading-7 text-gray-600">
      <span class="flex items-center">
        <span class="inline-block mr-2 w-1.5 h-1.5 rounded-full bg-teal-500"></span>
        8th Grade Student
      </span>
    </footer>
  </blockquote>
</div>
`;

export const studentQuoteIcon = '<svg viewBox="0 0 266 150" fill="none" width="266" height="150"><path fill="#ebf9fa" d="M0 0h266v150H0z"></path><rect x="8" y="20" width="4" height="110" rx="2" fill="url(#paint0_linear)"></rect><text x="24" y="40" font-family="Roboto" font-size="14" fill="url(#paint1_linear)" font-weight="600">I can see my agilities in my school</text><text x="24" y="60" font-family="Roboto" font-size="14" fill="url(#paint1_linear)" font-weight="600">projects and after school activities...</text><text x="24" y="120" font-family="Roboto" font-size="12" fill="#4B5563">8th Grade Student</text><defs><linearGradient id="paint0_linear" x1="10" y1="20" x2="10" y2="130" gradientUnits="userSpaceOnUse"><stop stop-color="#0293A7"></stop><stop offset="1" stop-color="#037DAD"></stop></linearGradient><linearGradient id="paint1_linear" x1="24" y1="30" x2="24" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#0293A7"></stop><stop offset="1" stop-color="#037DAD"></stop></linearGradient></defs></svg>';

export const quoteBlocks = {
    studentQuote
};

export const quoteIcons = {
    studentQuoteIcon
};