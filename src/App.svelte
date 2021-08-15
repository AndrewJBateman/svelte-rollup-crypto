<script>
  import { onMount } from "svelte";
  let coins = [];
  let headings = ["Crypto. Name", "Price (€)", "Chg/24hrs (%)", "Market Cap. (€)"];
  let textSearch = "";
  let filteredCoins = [];
  let ref = null;
  const loadCoins = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    coins = data;
    filteredCoins = data;
  };
  loadCoins();
  const searchCoin = (value) => {
    value = value.toLowerCase();
    filteredCoins = coins.filter(
      (coin) =>
          coin.name.toLowerCase().includes(value) ||
        coin.symbol.toLowerCase().includes(value)
    );
  };
  onMount(() => {
    ref.focus();
  });
</script>

<main class="container p-4">
  <h1 class="text-center">CryptoCurrency Prices</h1>
  <input
    type="text"
    placeholder="search cryptos by name or symbol"
    class="form-control bg-light rounded-0 my-4"
    bind:value={textSearch}
    on:keyup={({ target: { value } }) => searchCoin(value)}
    bind:this={ref}
  />
  <table class="table table-light table-striped table-hover my-4">
    <thead>
      <tr>
        {#each headings as heading}
          <th class={heading == "Coin" ? "px-3" : ""}>{heading}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each filteredCoins as coin, i}
        <tr>
          <td>
            <img
              src={coin.image}
              alt={coin.name}
              style="width: 1.5rem"
              class="img-fluid mx-2"
            />
            <span class="ms-3 text-muted">
              {coin.name}
            </span>
            <span class="text-muted text-uppercase">
              ({coin.symbol})
            </span>
          </td>
          <td>
            {coin.current_price.toLocaleString()}
          </td>
          <td
            class={coin.price_change_24h > 0
              ? "text-success"
              : "text-danger"}
          >
            {coin.price_change_percentage_24h}
          </td>
          <td>
            {coin.market_cap.toLocaleString()}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>