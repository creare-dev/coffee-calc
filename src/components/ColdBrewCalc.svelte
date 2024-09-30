<script lang="ts">
  import { onMount } from "svelte";

  const storageKey = "coldBrew";

  let cupCount = 8;
  let ratio = 10;
  let gramsPerCup = 17.5;
  const isBrowser = typeof window !== "undefined";
  onMount(() => {
    if (localStorage[storageKey]) {
      const values = JSON.parse(localStorage[storageKey]);
      if (values) {
        ({ cupCount, ratio, gramsPerCup } = values);
      }
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
  // $: console.log({ isBrowser: isBrowser });
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
