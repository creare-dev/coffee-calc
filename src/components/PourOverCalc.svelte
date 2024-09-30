<script lang="ts">
  let cupCount = 2;
  let ratio = 16;
  let gramsPerCup = 18;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <form class="flex flex-col">
    <label for="cupCount">Number of Cups: {cupCount}</label>
    <input
      name="cupCount"
      type="range"
      bind:value={cupCount}
      min="1"
      max="10"
    />
    <label for="ratio">Ratio: {ratio}:1</label>
    <input name="ratio" type="range" bind:value={ratio} min="10" max="20" />
    <label for="gramsPerCup">Grams Per Cup: {gramsPerCup}</label>
    <input
      name="gramsPerCup"
      type="range"
      bind:value={gramsPerCup}
      min="10"
      max="30"
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
