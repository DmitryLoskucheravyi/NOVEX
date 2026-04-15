document.addEventListener("DOMContentLoaded", () => {
  const selectors = {
    coinRow: ".js-coin-row",
    openCoinsModalBtn: ".js-open-coins-modal",
    coinsModal: ".js-coins-modal",
    coinsModalOverlay: ".js-coins-modal-overlay",
    closeCoinsModalBtn: ".js-close-coins-modal",
    extraCoinsList: ".js-extra-coins-list",
    networkGrid: ".js-network-grid",
    depositNetworkLabel: ".js-deposit-network-label",
    depositAddress: ".js-deposit-address",
    coinNameSpan: ".js-warning-coin-span",
    networkNameOutput: ".js-network-name",
    minDepositOutput: ".js-min-deposit",
    arrivalTimeOutput: ".js-arrival-time",
    qrImage: ".js-qr-image",
    copyBtn: ".copy-btn",
    toggleHistoryBtn: ".js-toggle-history",
    extraHistoryRows: ".history-extra-row",
    activeCoinCard: ".coin-card.active",
    mobileSidebarToggle: ".js-mobile-sidebar-toggle",
    sidebar: ".sidebar",
    sidebarOverlay: ".js-sidebar-overlay",
  };

  const elements = {
    coinRow: document.querySelector(selectors.coinRow),
    openCoinsModalBtn: document.querySelector(selectors.openCoinsModalBtn),
    coinsModal: document.querySelector(selectors.coinsModal),
    coinsModalOverlay: document.querySelector(selectors.coinsModalOverlay),
    closeCoinsModalBtn: document.querySelector(selectors.closeCoinsModalBtn),
    extraCoinsList: document.querySelector(selectors.extraCoinsList),
    networkGrid: document.querySelector(selectors.networkGrid),
    depositNetworkLabel: document.querySelector(selectors.depositNetworkLabel),
    depositAddress: document.querySelector(selectors.depositAddress),
    coinNameSpan: document.querySelector(selectors.coinNameSpan),
    networkNameOutput: document.querySelector(selectors.networkNameOutput),
    minDepositOutput: document.querySelector(selectors.minDepositOutput),
    arrivalTimeOutput: document.querySelector(selectors.arrivalTimeOutput),
    qrImage: document.querySelector(selectors.qrImage),
    copyBtn: document.querySelector(selectors.copyBtn),
    toggleHistoryBtn: document.querySelector(selectors.toggleHistoryBtn),
    extraHistoryRows: document.querySelectorAll(selectors.extraHistoryRows),
    mobileSidebarToggle: document.querySelector(selectors.mobileSidebarToggle),
    sidebar: document.querySelector(selectors.sidebar),
    sidebarOverlay: document.querySelector(selectors.sidebarOverlay),
  };

  const COINS = {
    USDT: {
      label: "Tether USDT",
      icon: "assets/usdt-svgrepo-com.svg",
      qr: "QRS/Tether.png",
      networks: [
        { name: "TRC20", fee: "1 USDT", time: "≈ 1 мин", icon: "assets/trx-svgrepo-com.svg", minDeposit: "1 USDT", address: "TQXz96r6Tt3eJf1FzqGfQ9oR1mX9h1mYSi" },
        { name: "ERC20", fee: "5 USDT", time: "≈ 3–5 мин", icon: "assets/Ethereum-icon-purple.svg.png", minDeposit: "10 USDT", address: "0x7a8b9d1e4f62c3a8d17f8b09c4a8d441a2ef9981" },
        { name: "BEP20", fee: "0.8 USDT", time: "≈ 2 мин", icon: "assets/bnb-bnb-logo.svg", minDeposit: "1 USDT", address: "0xb8f54f2e91f4b5d2b3d9d0b784cb5c9d1a22aa10" },
        { name: "Arbitrum One", fee: "0.2 USDT", time: "≈ 2–5 мин", icon: "assets/arbitrum-arb-logo.svg", minDeposit: "1 USDT", address: "0x8A1C2d74b93cA12D7d93A87f1b8aD44fC1e02D93" },
        { name: "Polygon", fee: "0.1 USDT", time: "≈ 1–3 мин", icon: "assets/polygon-matic-logo.svg", minDeposit: "1 USDT", address: "0x4fC2b8D34A9D1c2E7F4b8E0bD7391cFA8d2A1f13" },
        { name: "Optimism", fee: "0.1 USDT", time: "≈ 2–5 мин", icon: "assets/optimism-ethereum-op-logo.svg", minDeposit: "1 USDT", address: "0x2cA81D1F3b89C7D11A0e2A6c4E91Af87B55D9A10" },
      ],
    },
    BTC: {
      label: "Bitcoin",
      icon: "assets/bitcoin-btc-logo.svg",
      qr: "QRS/Bitcoin.png",
      networks: [
        { name: "BTC", fee: "0.0002 BTC", time: "≈ 10–30 мин", icon: "assets/bitcoin-btc-logo.svg", minDeposit: "0.0001 BTC", address: "bc1q9w0k7t6x5m3v2p8n4c1z7u9s6y4r5t8q1z2x3c" },
      ],
    },
    ETH: {
      label: "Ethereum",
      icon: "assets/Ethereum-icon-purple.svg.png",
      qr: "QRS/Ethereum.png",
      networks: [
        { name: "ERC20", fee: "0.0012 ETH", time: "≈ 3–5 мин", icon: "assets/Ethereum-icon-purple.svg.png", minDeposit: "0.005 ETH", address: "0x9A1f3D2eB7c41d88Fa190AB4D1d2b3fE7123Dd29" },
        { name: "Arbitrum One", fee: "0.0003 ETH", time: "≈ 2–5 мин", icon: "assets/arbitrum-arb-logo.svg", minDeposit: "0.002 ETH", address: "0x7b11D8f31A43C98A2b3F0c7E912a5Dfa11Be0C82" },
        { name: "Polygon", fee: "0.0002 ETH", time: "≈ 1–3 мин", icon: "assets/polygon-matic-logo.svg", minDeposit: "0.002 ETH", address: "0x4Ab2d17c0F5dA992cb9E12a1e64b0Af8D2E13C88" },
        { name: "Optimism", fee: "0.0002 ETH", time: "≈ 2–5 мин", icon: "assets/optimism-ethereum-op-logo.svg", minDeposit: "0.002 ETH", address: "0x3d9A2e6B1c0f8D4A7E2c91b6F54A1d0A8E2B1f90" },
      ],
    },
    USDC: {
      label: "USD Coin",
      icon: "assets/usd-coin-usdc-logo.svg",
      qr: "QRS/Tether.png",
      networks: [
        { name: "ERC20", fee: "5 USDC", time: "≈ 3–5 мин", icon: "assets/Ethereum-icon-purple.svg.png", minDeposit: "10 USDC", address: "0x2fB17D4a0A3e91F8c24fB68a19d4c2F801D2e9B4" },
        { name: "Arbitrum One", fee: "0.2 USDC", time: "≈ 2–5 мин", icon: "assets/arbitrum-arb-logo.svg", minDeposit: "1 USDC", address: "0x9fA211B3c4d8290F8b13aA02D6f18e2B38c72C10" },
        { name: "Polygon", fee: "0.1 USDC", time: "≈ 1–3 мин", icon: "assets/polygon-matic-logo.svg", minDeposit: "1 USDC", address: "0x3e11bAD42f81A5D92d7C1fA840D3e1B9A92cd120" },
        { name: "Optimism", fee: "0.1 USDC", time: "≈ 2–5 мин", icon: "assets/optimism-ethereum-op-logo.svg", minDeposit: "1 USDC", address: "0x6C2e01D4B2dA9C31c7E10f2A4d9b3E17c11d4f77" },
      ],
    },
    BNB: {
      label: "BNB",
      icon: "assets/bnb-bnb-logo.svg",
      qr: "QRS/Binance.png",
      networks: [
        { name: "BEP20", fee: "0.0005 BNB", time: "≈ 2 мин", icon: "assets/bnb-bnb-logo.svg", minDeposit: "0.001 BNB", address: "0xb21d9eF2A1B4c37d5F9b8E1D3A7cB22f18A4dE11" },
      ],
    },
    XRP: {
      label: "XRP",
      icon: "assets/trx-svgrepo-com.svg",
      qr: "QRS/XRP.png",
      networks: [
        { name: "XRP", fee: "0.25 XRP", time: "≈ 1–3 мин", icon: "assets/trx-svgrepo-com.svg", minDeposit: "1 XRP", address: "rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh" },
      ],
    },
    SOL: {
      label: "Solana",
      icon: "assets/arbitrum-arb-logo.svg",
      qr: "QRS/Solana.png",
      networks: [
        { name: "Solana", fee: "0.0001 SOL", time: "≈ 1–2 мин", icon: "assets/arbitrum-arb-logo.svg", minDeposit: "0.01 SOL", address: "7fYc9d2Bv6rK1oP8mQ4tZ0xW3nJ7uH5eL2aS9cD1fG6" },
      ],
    },
    DOGE: {
      label: "Dogecoin",
      icon: "assets/bitcoin-btc-logo.svg",
      qr: "QRS/Dogecoin.png",
      networks: [
        { name: "Dogecoin", fee: "1 DOGE", time: "≈ 2–10 мин", icon: "assets/bitcoin-btc-logo.svg", minDeposit: "5 DOGE", address: "D8xY2mQ7pR4tK1nV6zF9cL3wB0aH5uJ8eT2" },
      ],
    },
    TON: {
      label: "Toncoin",
      icon: "assets/optimism-ethereum-op-logo.svg",
      qr: "QRS/Tether.png",
      networks: [
        { name: "TON", fee: "0.05 TON", time: "≈ 1–3 мин", icon: "assets/optimism-ethereum-op-logo.svg", minDeposit: "0.2 TON", address: "UQBk2G7fP4nD9aR1xL6mC0tY8vW3zQ5eN2hJ7sA4d" },
      ],
    },
    ADA: {
      label: "Cardano",
      icon: "assets/polygon-matic-logo.svg",
      qr: "QRS/Tether.png",
      networks: [
        { name: "Cardano", fee: "0.2 ADA", time: "≈ 2–8 мин", icon: "assets/polygon-matic-logo.svg", minDeposit: "1 ADA", address: "addr1qy8x7n4p2t6m0k3v9c5z1w7r8d4s6f2g1h9j0l" },
      ],
    },
  };

  const BASE_COINS = ["USDT", "BTC", "ETH", "USDC", "BNB", "XRP"];
  const EXTRA_COINS = ["SOL", "DOGE", "TON", "ADA"];

  const state = {
    currentCoin: document.querySelector(selectors.activeCoinCard)?.dataset.coin || "USDT",
    insertedExtraCoin: null,
    isHistoryExpanded: false,
  };

  function getCoinData(coin) {
    return COINS[coin] || null;
  }

  function isBaseCoin(coin) {
    return BASE_COINS.includes(coin);
  }

  function getVisibleCoins() {
    const visibleCoins = [...BASE_COINS];

    if (state.insertedExtraCoin && !isBaseCoin(state.currentCoin)) {
      visibleCoins.push(state.insertedExtraCoin);
    }

    return visibleCoins;
  }


  function getCoinCardInnerMarkup(coin) {
    const coinData = getCoinData(coin);

    return `
      <div class="coin-icon">
        <img src="${coinData.icon}" alt="${coin}">
      </div>
      <div class="coin-text">
        <strong>${coin}</strong>
        <span>${coinData.label}</span>
      </div>
    `;
  }

  function createCoinCardElement(coin, options = {}) {
    const { isActive = false, isExtra = false, tag = "div", className = "coin-card" } = options;
    const element = document.createElement(tag);

    if (tag === "button") {
      element.type = "button";
    }

    element.className = [
      className,
      isActive ? tag === "button" ? "is-selected" : "active" : "",
      isExtra ? "is-extra" : "",
    ].filter(Boolean).join(" ");

    element.dataset.coin = coin;
    element.innerHTML = getCoinCardInnerMarkup(coin);

    return element;
  }

  function renderBaseCoins() {
    if (!elements.coinRow) return;

    const fragment = document.createDocumentFragment();

    getVisibleCoins().forEach((coin) => {
      fragment.append(
        createCoinCardElement(coin, {
          isActive: coin === state.currentCoin,
          isExtra: !isBaseCoin(coin),
        })
      );
    });

    elements.coinRow.innerHTML = "";
    elements.coinRow.append(fragment);
  }

  function createNetworkCardElement(network, isActive = false) {
    const card = document.createElement("article");

    card.className = `network-card${isActive ? " active" : ""}`;
    card.dataset.network = network.name;
    card.dataset.fee = network.fee;
    card.dataset.time = network.time;
    card.dataset.minDeposit = network.minDeposit;
    card.dataset.address = network.address;

    card.innerHTML = `
      <div class="network-top">
        <div class="network-name-wrap">
          <div class="network-logo">
            <img src="${network.icon}" alt="${network.name}">
          </div>
          <div>${network.name}</div>
        </div>
        <div class="radio"></div>
      </div>
      <div class="network-meta">
        <span>Комиссия</span>
        <strong>${network.fee}</strong>
        <span>Время зачисления</span>
        <strong>${network.time}</strong>
      </div>
    `;

    return card;
  }

  function renderNetworks(coin) {
    const coinData = getCoinData(coin);
    if (!coinData || !elements.networkGrid) return;

    const fragment = document.createDocumentFragment();

    coinData.networks.forEach((network, index) => {
      fragment.append(createNetworkCardElement(network, index === 0));
    });

    elements.networkGrid.innerHTML = "";
    elements.networkGrid.append(fragment);

    const activeNetworkCard = elements.networkGrid.querySelector(".network-card.active");
    if (activeNetworkCard) {
      updateDepositDetails(activeNetworkCard);
    }
  }

  function renderExtraCoinsModal() {
    if (!elements.extraCoinsList) return;

    const fragment = document.createDocumentFragment();

    EXTRA_COINS.forEach((coin) => {
      fragment.append(
        createCoinCardElement(coin, {
          tag: "button",
          className: "modal-coin-card",
          isActive: state.currentCoin === coin,
        })
      );
    });

    elements.extraCoinsList.innerHTML = "";
    elements.extraCoinsList.append(fragment);
  }

  function updateDepositDetails(networkCard) {
    if (!networkCard) return;

    const { network, minDeposit, time, address } = networkCard.dataset;
    const currentCoinData = getCoinData(state.currentCoin);

    if (elements.depositNetworkLabel) {
      elements.depositNetworkLabel.textContent = `Адрес депозита (${network})`;
    }

    if (elements.depositAddress) {
      elements.depositAddress.textContent = address;
    }

    if (elements.networkNameOutput) {
      elements.networkNameOutput.textContent = network;
    }

    if (elements.minDepositOutput) {
      elements.minDepositOutput.textContent = minDeposit;
    }

    if (elements.arrivalTimeOutput) {
      elements.arrivalTimeOutput.textContent = time;
    }

    if (elements.coinNameSpan) {
      elements.coinNameSpan.textContent = state.currentCoin;
    }

    if (elements.qrImage && currentCoinData) {
      elements.qrImage.src = currentCoinData.qr;
      elements.qrImage.alt = `${state.currentCoin} QR code`;
    }
  }

  function syncInsertedExtraCoin(coin) {
    state.insertedExtraCoin = isBaseCoin(coin) ? null : coin;
  }

  function selectCoin(coin) {
    if (!getCoinData(coin)) return;

    state.currentCoin = coin;
    syncInsertedExtraCoin(coin);

    renderBaseCoins();
    renderNetworks(coin);
    renderExtraCoinsModal();
  }

  function setActiveNetworkCard(selectedCard) {
    if (!elements.networkGrid) return;

    const networkCards = elements.networkGrid.querySelectorAll(".network-card");
    networkCards.forEach((card) => {
      card.classList.toggle("active", card === selectedCard);
    });
  }

  function openCoinsModal() {
    if (!elements.coinsModal) return;

    elements.coinsModal.classList.add("is-open");
    elements.coinsModal.setAttribute("aria-hidden", "false");
    renderExtraCoinsModal();
  }

  function closeCoinsModal() {
    if (!elements.coinsModal) return;

    elements.coinsModal.classList.remove("is-open");
    elements.coinsModal.setAttribute("aria-hidden", "true");
  }

  async function copyDepositAddress() {
    if (!elements.copyBtn || !elements.depositAddress) return;

    try {
      await navigator.clipboard.writeText(elements.depositAddress.textContent.trim());

      const oldText = elements.copyBtn.textContent;
      elements.copyBtn.textContent = "✓";

      setTimeout(() => {
        elements.copyBtn.textContent = oldText;
      }, 1000);
    } catch (error) {
      console.error("Не вдалося скопіювати адресу", error);
    }
  }

  function toggleHistory() {
    if (!elements.toggleHistoryBtn || !elements.extraHistoryRows.length) return;

    state.isHistoryExpanded = !state.isHistoryExpanded;

    elements.extraHistoryRows.forEach((row) => {
      row.classList.toggle("is-visible", state.isHistoryExpanded);
    });

    elements.toggleHistoryBtn.textContent = state.isHistoryExpanded
      ? "Скрыть"
      : "Посмотреть все";
  }

  function openMobileSidebar() {
    if (!elements.sidebar || !elements.mobileSidebarToggle || !elements.sidebarOverlay) return;

    elements.sidebar.classList.add("is-open");
    elements.sidebarOverlay.classList.add("is-visible");
    elements.mobileSidebarToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("sidebar-open");
  }

  function closeMobileSidebar() {
    if (!elements.sidebar || !elements.mobileSidebarToggle || !elements.sidebarOverlay) return;

    elements.sidebar.classList.remove("is-open");
    elements.sidebarOverlay.classList.remove("is-visible");
    elements.mobileSidebarToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("sidebar-open");
  }

  function bindEvents() {
    if (elements.coinRow) {
      elements.coinRow.addEventListener("click", (event) => {
        const card = event.target.closest(".coin-card");
        if (!card) return;

        selectCoin(card.dataset.coin);
      });
      // Header nav overflow detection
      function updateNavOverflow() {
        const nav = document.querySelector('.js-header-nav');
        const moreBtn = document.querySelector('.js-header-nav-more');
        const dropdown = document.querySelector('.js-header-nav-dropdown');
        if (!nav || !moreBtn || !dropdown) return;

        const links = [...nav.querySelectorAll('.header__nav-link')];

        // Скидаємо стан
        links.forEach(l => l.style.display = '');
        moreBtn.style.display = 'none';
        dropdown.innerHTML = '';

        // Тимчасово показуємо кнопку щоб врахувати її ширину
        moreBtn.style.display = 'inline-flex';
        moreBtn.style.visibility = 'hidden';

        const navRight = nav.getBoundingClientRect().right;
        const moreBtnWidth = moreBtn.getBoundingClientRect().width;

        moreBtn.style.display = 'none';
        moreBtn.style.visibility = '';

        const hidden = links.filter(link => {
          return link.getBoundingClientRect().right > navRight - moreBtnWidth - 8;
        });

        if (hidden.length) {
          moreBtn.style.display = 'inline-flex';
          hidden.forEach(link => {
            link.style.display = 'none';
            const clone = link.cloneNode(true);
            clone.style.display = '';
            dropdown.appendChild(clone);
          });
        }
      }

      updateNavOverflow();
      window.addEventListener('resize', updateNavOverflow);

      const moreBtn = document.querySelector('.js-header-nav-more');
      if (moreBtn) {
        moreBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          moreBtn.classList.toggle('is-open');
        });

        document.addEventListener('click', (e) => {
          if (!moreBtn.contains(e.target)) {
            moreBtn.classList.remove('is-open');
          }
        });
      }
    }

    if (elements.networkGrid) {
      elements.networkGrid.addEventListener("click", (event) => {
        const card = event.target.closest(".network-card");
        if (!card) return;

        setActiveNetworkCard(card);
        updateDepositDetails(card);
      });
    }

    if (elements.openCoinsModalBtn) {
      elements.openCoinsModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        openCoinsModal();
      });
    }

    if (elements.closeCoinsModalBtn) {
      elements.closeCoinsModalBtn.addEventListener("click", closeCoinsModal);
    }

    if (elements.coinsModalOverlay) {
      elements.coinsModalOverlay.addEventListener("click", closeCoinsModal);
    }

    if (elements.extraCoinsList) {
      elements.extraCoinsList.addEventListener("click", (event) => {
        const card = event.target.closest(".modal-coin-card");
        if (!card) return;

        selectCoin(card.dataset.coin);
        closeCoinsModal();
      });
    }

    if (elements.copyBtn) {
      elements.copyBtn.addEventListener("click", copyDepositAddress);
    }

    if (elements.toggleHistoryBtn && elements.extraHistoryRows.length) {
      elements.toggleHistoryBtn.addEventListener("click", toggleHistory);
    }

    if (elements.mobileSidebarToggle) {
      elements.mobileSidebarToggle.addEventListener("click", () => {
        const isOpen = elements.sidebar?.classList.contains("is-open");

        if (isOpen) {
          closeMobileSidebar();
        } else {
          openMobileSidebar();
        }
      });
    }

    if (elements.sidebarOverlay) {
      elements.sidebarOverlay.addEventListener("click", closeMobileSidebar);
    }

    if (elements.sidebar) {
      elements.sidebar.addEventListener("click", (event) => {
        const navItem = event.target.closest(".nav-item");

        if (navItem && window.innerWidth <= 767) {
          closeMobileSidebar();
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (elements.coinsModal?.classList.contains("is-open")) {
          closeCoinsModal();
        }

        if (elements.sidebar?.classList.contains("is-open")) {
          closeMobileSidebar();
        }
      }
    });
  }

  function init() {
    bindEvents();
    renderBaseCoins();
    renderExtraCoinsModal();
    renderNetworks(state.currentCoin);
    syncInsertedExtraCoin(state.currentCoin);
    selectCoin(state.currentCoin);
  }

  init();


});