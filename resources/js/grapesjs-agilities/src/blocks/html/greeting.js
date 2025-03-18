export const greeting = `
<div class="flex flex-wrap items-center justify-between bg-gray-300 p-6">
  <div class="flex flex-col py-1">
    <h2 class="text-gray-800 text-2xl font-normal">Hello,</h2>
    <h1 class="text-teal-600 text-2xl font-medium">{{ auth()->user()->name }}</h1>
  </div>
  <div>
    <button class="bg-gray-200 py-2 px-4 mt-2 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-300 transition-colors">Explore Agilities</button>
  </div>
</div>
`;

export const greetingIcon = '<svg viewBox="0 0 266 80" fill="none" width="266" height="80"><path fill="#FFFFFF" d="M0 0h266v80H0z"></path><text x="20" y="35" font-family="Arial" font-size="16" fill="#333333">Hello,</text><text x="20" y="55" font-family="Arial" font-size="18" fill="#0D9488" font-weight="500">Coach Franklin</text><rect x="160" y="30" width="90" height="30" rx="15" fill="#E5E7EB"></rect><text x="175" y="50" font-family="Arial" font-size="12" fill="#4B5563">Explore Agilities</text></svg>';

export const greetingBlocks = {
    greeting
};

export const greetingIcons = {
    greetingIcon
};