<template>
  <div
    id="messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <div class="flex w-full px-4 py-3 items-center cursor-pointer">
      <img
        src="https://placehold.co/100x100"
        alt=""
        class="rounded-full ml-1 w-10"
      />

      <div class="w-full ml-1">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">Frank</div>
          <div class="text-[12px] text-gray-600">Date</div>
        </div>

        <div class="flex items-center">
          <div
            class="text-[15px] text-gray-500 flex items-center justify-between"
          >
            This is a mesage...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>