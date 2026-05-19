const timelineEvents = [
  {
    year: "1848",
    title: "Gold is discovered at Sutter's Mill.",
    body: "James Marshall found gold on January 24, 1848, while building a sawmill for John Sutter. Sutter wanted secrecy, but the discovery spread through California and then across the United States.",
    note: "The discovery happened just after the United States acquired California from Mexico, so gold turned conquest into a migration crisis and a national opportunity."
  },
  {
    year: "1849",
    title: "The Forty-Niners turn rumor into mass migration.",
    body: "After President James K. Polk confirmed the discovery in December 1848, thousands moved west by trail, ship, and shortcut. The National Park Service estimates 25,000 emigrants used the California Trail in 1849 alone.",
    note: "Migration made the West part of a national market. California was no longer only a frontier region; it became tied to shipping routes, banks, merchants, newspapers, and federal politics."
  },
  {
    year: "1850",
    title: "California enters the Union as a free state.",
    body: "The rush gave California enough people and political urgency to bypass the usual territorial path. Its admission as a free state intensified sectional conflict and became part of the Compromise of 1850.",
    note: "Statehood mattered nationally because every new free or slave state affected the balance of power in Congress. California's admission helped reopen the slavery question."
  },
  {
    year: "1852",
    title: "The boom reaches its crowded peak.",
    body: "California State Parks notes that the non-Indigenous population grew from about 14,000 before the discovery to nearly 100,000 by the end of 1849 and about 250,000 by 1852.",
    note: "The population boom created demand for courts, roads, banks, stores, and local government. It also intensified pressure on land, water, Native communities, and immigrants."
  },
  {
    year: "1855",
    title: "Easy gold fades; the consequences remain.",
    body: "As surface gold became harder to find, mining required more capital, equipment, and organization. The Gold Rush left cities, laws, exclusion, damaged rivers, and transformed Native homelands behind.",
    note: "The legacy is mixed: California became central to the United States, but that growth came through displacement, racial discrimination, environmental damage, and uneven opportunity."
  }
];

const stakes = {
  miners: {
    title: "Miners",
    body: [
      "Most miners came to California dreaming about freedom and a better life. While some struck surface gold at first, competition, high costs, illness, and fatigue made real wealth hard to acquire.",
      "Their experience shows the gap between opportunity and reality. A miner could be technically free and still be trapped by the price of food, tools, travel, and claims."
    ],
    risk: "82%",
    label: "Very high"
  },
  merchants: {
    title: "Merchants",
    body: [
      "Merchants had better chances than miners because pans, shovels, food, shelter, laundry, transportation, and other necessities allowed them to earn money from other people's risks.",
      "This is why the Gold Rush strengthened capitalism on the Pacific Coast. San Francisco and Sacramento grew because money moved through ports, warehouses, banks, hotels, and shipping companies."
    ],
    risk: "48%",
    label: "Medium"
  },
  native: {
    title: "Native Californians",
    body: [
      "Native Californians faced the most tragic fate. As gold miners used up food, land, water, and territory, violence and illness followed.",
      "This was not merely a business enterprise. For Native Californians, it became a question of survival as mining damaged rivers, disrupted food sources, and brought armed settlers into Native homelands."
    ],
    risk: "96%",
    label: "Extreme"
  },
  chinese: {
    title: "Chinese Immigrants",
    body: [
      "Chinese immigrants took part in the international race for prosperity and settled in California communities.",
      "They were also victims of foreign miners' taxes, mob assaults, legal discrimination, and political disenfranchisement. Their experience shows how western expansion and racial nativism developed together."
    ],
    risk: "88%",
    label: "Very high"
  }
};

const methods = {
  pan: {
    title: "Panning",
    body: "Panning was an easy and inexpensive process, giving the first stage of mining an accessible appeal. Early miners used shallow pans to wash lighter sediment away from heavier gold.",
    note: "Easy surface mining helped create the first massive migration, but it did not last."
  },
  rocker: {
    title: "Rocker and sluice mining",
    body: "Rockers and sluices were able to process larger amounts of material and required organized work crews. They rewarded teams, tools, and claims with better water access.",
    note: "The rush moved from individual chance toward coordinated labor and local rules."
  },
  hydraulic: {
    title: "Hydraulic mining",
    body: "Hydraulic mining used powerful jets of water to wash away hillsides and increase gold yields, creating sediment that flowed downstream into rivers, farms, and settlements.",
    note: "Technology turned the search for gold into an environmental conflict."
  }
};

const sourceDetails = {
  dinsdale: {
    title: "Matthew Dinsdale's 1850 letter",
    body: "Dinsdale's letter helps show how people in California described Gold Rush life while it was happening. It makes the rush feel less like a broad national myth and more like a lived experience."
  },
  mcelroy: {
    title: "Thornton F. McElroy's 1850 letter",
    body: "McElroy's letter supports the section about miners, risk, sickness, and the difficulty of actually making money. It helps show the gap between the dream of striking it rich and the reality of mining life."
  },
  shirley: {
    title: "The Shirley Letters",
    body: "The Shirley Letters describe daily life and social conditions in California mining camps. They are especially useful because they give a woman's perspective on the Gold Rush and strengthen the multiple-perspectives section."
  },
  wood: {
    title: "Charles A. Wood's 1850 letter",
    body: "Wood's letter helps explain the travel and communication side of the Gold Rush. It shows that the rush was not only about mining, but also about long, difficult journeys to California."
  }
};

const timelineButtons = document.querySelectorAll(".timeline-dot");
const timelineYear = document.querySelector("#timeline-year");
const timelineHeading = document.querySelector("#timeline-heading");
const timelineBody = document.querySelector("#timeline-body");
const timelineNote = document.querySelector("#timeline-note");

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const event = timelineEvents[Number(button.dataset.event)];
    timelineButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    timelineYear.textContent = event.year;
    timelineHeading.textContent = event.title;
    timelineBody.textContent = event.body;
    timelineNote.textContent = event.note;
  });
});

const stakeButtons = document.querySelectorAll(".stake-button");
const stakeTitle = document.querySelector("#stake-title");
const stakeBody = document.querySelector("#stake-body");
const riskBar = document.querySelector("#risk-bar");
const riskLabel = document.querySelector("#risk-label");

stakeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = stakes[button.dataset.stake];
    stakeButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    stakeTitle.textContent = selected.title;
    stakeBody.innerHTML = selected.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
    riskBar.style.width = selected.risk;
    riskLabel.textContent = selected.label;
  });
});

const methodButtons = document.querySelectorAll(".method-button");
const methodTitle = document.querySelector("#method-title");
const methodBody = document.querySelector("#method-body");
const methodNote = document.querySelector("#method-note");

methodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = methods[button.dataset.method];
    methodButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    methodTitle.textContent = selected.title;
    methodBody.textContent = selected.body;
    methodNote.textContent = selected.note;
  });
});

const sourceButtons = document.querySelectorAll(".source-button");
const sourceHeading = document.querySelector("#source-heading");
const sourceBody = document.querySelector("#source-body");

sourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = sourceDetails[button.dataset.source];
    sourceButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    sourceHeading.textContent = selected.title;
    sourceBody.textContent = selected.body;
  });
});
