<script lang="ts">
  import { onMount } from "svelte";

  export let storageKey;

  export let defaults: {
    cupCount: number;
    ratio: number;
    gramsPerCup: number;
  }; // = { cupCount: 8, ratio: 12, gramsPerCup: 17.5 }
  let cupCount;
  //   let cupCount = 8;
  let ratio;
  //   let ratio = 10;
  let gramsPerCup;
  //   let gramsPerCup = 17.5;
  const isBrowser = typeof window !== "undefined";
  onMount(() => {
    try {
      if (localStorage[storageKey]) {
        const values = JSON.parse(localStorage[storageKey]);
        if (values) {
          ({ cupCount, ratio, gramsPerCup } = values);
        } else {
          throw new Error("Invalid Data");
        }
      } else {
        throw new Error("No Data");
      }
    } catch (e) {
      console.log({ e });
      ({ cupCount, ratio, gramsPerCup } = { ...defaults });
    }
  });
  const update = () => {
    if (isBrowser)
      localStorage[storageKey] = JSON.stringify({
        cupCount,
        ratio,
        gramsPerCup,
      });
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <form class="flex flex-col">
    <label for="cupCount">Number of Cups: {cupCount}</label>
    <input
      on:change={() => update()}
      name="cupCount"
      type="range"
      bind:value={cupCount}
      min="1"
      max="10"
      step="1"
    />
    <label for="ratio">Ratio: {ratio}:1</label>
    <input
      on:change={() => update()}
      name="ratio"
      type="range"
      bind:value={ratio}
      min="8"
      max="18"
      step="1"
    />
    <label for="gramsPerCup">Grams Per Cup: {gramsPerCup}</label>
    <input
      on:change={() => update()}
      name="gramsPerCup"
      type="range"
      bind:value={gramsPerCup}
      min="10"
      max="25"
      step="0.5"
    />
  </form>

  <div class="output">
    <div>
      <div>Coffee:</div>
      <div>
        {gramsPerCup * cupCount} g
      </div>
    </div>
    <div>
      <div>Total Water:</div>
      <div>
        {gramsPerCup * cupCount * ratio} ml
      </div>
    </div>
    <div>
      <div>Bloom Water:</div>
      <div>
        {gramsPerCup * cupCount * 2} ml
      </div>
    </div>
    <div>
      <div>Remaining Water:</div>
      <div>
        {gramsPerCup * cupCount * ratio - gramsPerCup * cupCount * 2} ml
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .output {
    @apply flex flex-col flex-1 justify-between gap-1;
  }
  .output > div {
    @apply rounded-md w-full h-full place-items-center flex flex-row justify-between odd:bg-accent-d/50 even:bg-accent-d/25 w-full text-primary-l dark:text-primary-d;
  }
  .output > div > div {
    @apply w-fit p-2;
  }
  label {
    @apply text-center text-primary-l dark:text-primary-d;
  }
  input[type="range"] {
    @apply appearance-none my-5 w-4/5 mx-auto h-1 bg-surface-d/25 dark:bg-surface-l/25 rounded-sm accent-surface-d dark:accent-surface-l;
  }
  input[type="range"]::-moz-range-thumb,
  input[type="range"]::-webkit-slider-thumb {
    @apply bg-surface-d dark:bg-surface-l rounded-full h-4 w-4 border-none;
  }
</style>
